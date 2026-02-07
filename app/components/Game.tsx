'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { WORLD_FLAGS, Country } from '../data/countries';

interface FlagEntity {
    id: number;
    code: string;
    name: string;
    x: number;
    y: number;
    vx: number;
    vy: number;
    status: 'live' | 'dead' | 'frozen';
    radius: number;
}

interface RankingEntry {
    code: string;
    name: string;
    wins: number;
}

export default function Game() {
    const containerRef = useRef<HTMLDivElement>(null);
    const arenaBgRef = useRef<HTMLDivElement>(null);
    const flagsContainerRef = useRef<HTMLDivElement>(null);

    // Game State
    const [gameStatus, setGameStatus] = useState<'menu' | 'spawning' | 'playing' | 'winner' | 'champion'>('menu');
    const [winner, setWinner] = useState<FlagEntity | null>(null);
    const [champion, setChampion] = useState<RankingEntry | null>(null);
    const [selectedContinent, setSelectedContinent] = useState<string>('Todos');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [ranking, setRanking] = useState<RankingEntry[]>([]);
    const [pointsToWin, setPointsToWin] = useState<number>(5);
    const [tempPoints, setTempPoints] = useState<number>(5);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Flags State
    const [flags, setFlags] = useState<FlagEntity[]>([]);

    // Physics Refs
    const flagsRef = useRef<FlagEntity[]>([]);
    const animationFrameRef = useRef<number>(0);
    const spawnTimerRef = useRef<NodeJS.Timeout | null>(null);
    const gameBoundsRef = useRef({ width: 0, height: 0, centerX: 0, centerY: 0 });
    const hudRef = useRef<HTMLSpanElement>(null);
    const gameStatusRef = useRef(gameStatus);
    const rankingRef = useRef<RankingEntry[]>([]);

    // Arena Constants
    const initialRadiusRef = useRef(300);
    const arenaRadiusRef = useRef(300);
    const minArenaRadius = 100;
    const shrinkRate = 0.08;
    const FLAG_RADIUS = 25;

    // Sync Game Status to Ref
    useEffect(() => {
        gameStatusRef.current = gameStatus;
        if (gameStatus === 'playing' || gameStatus === 'spawning') {
            if (!animationFrameRef.current) startLoop();
        }
    }, [gameStatus]);

    // Resize Handler
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                gameBoundsRef.current = {
                    width: clientWidth,
                    height: clientHeight,
                    centerX: clientWidth / 2,
                    centerY: clientHeight / 2
                };
                const maxSize = Math.min(clientWidth, clientHeight) * 0.45;
                initialRadiusRef.current = maxSize;
                updateArenaVisual();
            }
        };
        window.addEventListener('resize', handleResize);
        setTimeout(handleResize, 100);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Flag Cycling
    useEffect(() => {
        const interval = setInterval(() => {
            // Removed cycling flag logic
        }, 800);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        return () => stopLoop();
    }, []);

    // Atualizar ranking quando há um vencedor
    useEffect(() => {
        if (gameStatus === 'winner' && winner) {
            const existingIndex = rankingRef.current.findIndex(r => r.code === winner.code);
            let newRanking: RankingEntry[];

            if (existingIndex !== -1) {
                newRanking = [...rankingRef.current];
                newRanking[existingIndex].wins += 1;
            } else {
                newRanking = [...rankingRef.current, { code: winner.code, name: winner.name, wins: 1 }];
            }

            newRanking = newRanking
                .sort((a, b) => {
                    if (b.wins !== a.wins) {
                        return b.wins - a.wins;
                    }
                    return a.name.localeCompare(b.name);
                })
                .slice(0, 5);

            rankingRef.current = newRanking;
            setRanking(newRanking);

            const championFound = newRanking.find(entry => entry.wins >= pointsToWin);
            if (championFound) {
                setChampion(championFound);
                setGameStatus('champion');
            }
            // REMOVE o setTimeout aqui!
        }
    }, [gameStatus, winner, pointsToWin]);

    const updateArenaVisual = () => {
        if (arenaBgRef.current) {
            const size = arenaRadiusRef.current * 2;
            arenaBgRef.current.style.width = `${size}px`;
            arenaBgRef.current.style.height = `${size}px`;
        }
    };

    const updateHud = (count: number) => {
        if (hudRef.current) {
            hudRef.current.innerText = count.toString();
        }
    };

    const initGame = () => {
        if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);

        if (!containerRef.current || containerRef.current.clientWidth < 100) {
            console.log('Waiting for layout...');
            setTimeout(initGame, 100);
            return;
        }

        // Limpar tudo PRIMEIRO
        flagsRef.current = [];
        setFlags([]);
        setWinner(null);
        updateHud(0);

        const { clientWidth, clientHeight } = containerRef.current;
        gameBoundsRef.current = {
            width: clientWidth,
            height: clientHeight,
            centerX: clientWidth / 2,
            centerY: clientHeight / 2
        };

        arenaRadiusRef.current = initialRadiusRef.current;
        updateArenaVisual();

        const availableFlags = selectedContinent === 'Todos'
            ? WORLD_FLAGS
            : WORLD_FLAGS.filter(f => f.continent === selectedContinent);

        let spawnCount = selectedContinent === 'Todos' ? 120 : availableFlags.length;
        spawnCount = Math.min(spawnCount, availableFlags.length);

        const shuffled = [...availableFlags].sort(() => Math.random() - 0.5).slice(0, spawnCount);
        let spawnedNum = 0;

        setGameStatus('spawning');

        spawnTimerRef.current = setInterval(() => {
            if (spawnedNum >= shuffled.length) {
                if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
                setGameStatus('playing');
                return;
            }

            const data = shuffled[spawnedNum];
            const startX = gameBoundsRef.current.centerX;
            const startY = gameBoundsRef.current.centerY;

            if (gameBoundsRef.current.width < 100 || startX < 50) return;

            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 2;

            const newFlag: FlagEntity = {
                id: spawnedNum,
                code: data.code,
                name: data.name,
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                status: 'live',
                radius: FLAG_RADIUS
            };

            flagsRef.current.push(newFlag);
            setFlags(prev => [...prev, newFlag]);

            spawnedNum++;
            updateHud(spawnedNum);
        }, 150);

        startLoop();
    };

    const resetGame = () => {
        rankingRef.current = [];
        setRanking([]);
        setChampion(null);
        setTempPoints(pointsToWin);
        setGameStatus('menu');
    };

    const startLoop = () => {
        const loop = () => {
            updatePhysics();
            animationFrameRef.current = requestAnimationFrame(loop);
        };
        animationFrameRef.current = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
        cancelAnimationFrame(animationFrameRef.current);
        if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    };

    const updatePhysics = () => {
        const flags = flagsRef.current;
        const centerX = gameBoundsRef.current.centerX;
        const centerY = gameBoundsRef.current.centerY;
        const status = gameStatusRef.current;

        let currentLiveCount = 0;
        let lastLiveFlag: FlagEntity | null = null;

        if (status === 'playing') {
            const count = flags.filter(f => f.status === 'live').length;
            if (count > 1) {
                arenaRadiusRef.current -= shrinkRate;
                if (arenaRadiusRef.current < minArenaRadius) arenaRadiusRef.current = minArenaRadius;
                updateArenaVisual();
            }
        }

        for (let i = 0; i < flags.length; i++) {
            const f = flags[i];

            const el = document.getElementById(`flag-${f.id}`);
            if (!el) continue;

            // Se está frozen, pula a física
            if (f.status === 'frozen') {
                el.style.transform = `translate(${f.x - f.radius}px, ${f.y - f.radius}px)`;
                continue;
            }

            if (f.status === 'live') {
                currentLiveCount++;
                lastLiveFlag = f;

                f.x += f.vx;
                f.y += f.vy;

                const dx = f.x - centerX;
                const dy = f.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxD = arenaRadiusRef.current - f.radius;

                if (dist > maxD) {
                    const nx = dx / dist;
                    const ny = dy / dist;
                    const dot = f.vx * nx + f.vy * ny;
                    f.vx = f.vx - 2 * dot * nx;
                    f.vy = f.vy - 2 * dot * ny;
                    const overlap = dist - maxD;
                    f.x -= nx * (overlap + 1);
                    f.y -= ny * (overlap + 1);
                    f.vx *= 0.97;
                    f.vy *= 0.97;
                }

                for (let j = i + 1; j < flags.length; j++) {
                    const other = flags[j];
                    if (other.status !== 'live') continue;

                    const dx2 = other.x - f.x;
                    const dy2 = other.y - f.y;
                    const distSq = dx2 * dx2 + dy2 * dy2;
                    const minDist = f.radius + other.radius;

                    if (distSq < minDist * minDist) {
                        const d = Math.sqrt(distSq);
                        const nx = dx2 / d;
                        const ny = dy2 / d;
                        const overlap = minDist - d;

                        // Separar as bandeiras de forma suave
                        f.x -= nx * overlap * 0.3;
                        f.y -= ny * overlap * 0.3;
                        other.x += nx * overlap * 0.3;
                        other.y += ny * overlap * 0.3;

                        if (status === 'playing') {
                            const fWins = Math.random() > 0.5;
                            eliminateFlag(fWins ? other : f, fWins ? f : other);
                        } else {
                            // Colisão suave no menu
                            f.vx -= nx * 2;
                            f.vy -= ny * 2;
                            other.vx += nx * 2;
                            other.vy += ny * 2;
                        }
                    }
                }
            } else if (f.status === 'dead') {
                f.vy += 0.8; f.vx *= 0.99;
                f.x += f.vx; f.y += f.vy;
                const floorY = gameBoundsRef.current.height;
                if (f.y + f.radius > floorY) {
                    f.y = floorY - f.radius;
                    f.vy *= -0.4; f.vx *= 0.8;
                }
                if (f.x - f.radius < 0) { f.x = f.radius; f.vx *= -0.5; }
                else if (f.x + f.radius > gameBoundsRef.current.width) { f.x = gameBoundsRef.current.width - f.radius; f.vx *= -0.5; }
            }

            el.style.transform = `translate(${f.x - f.radius}px, ${f.y - f.radius}px)`;
        }

        updateHud(currentLiveCount);
        if (currentLiveCount <= 1 && flags.length > 1 && status === 'playing') {
            setGameStatus('winner');
            setWinner(lastLiveFlag);
            // Congelar a bandeira vencedora
            if (lastLiveFlag) {
                lastLiveFlag.status = 'frozen';
                lastLiveFlag.vx = 0;
                lastLiveFlag.vy = 0;
            }
        }
    };

    const eliminateFlag = (loser: FlagEntity, winner: FlagEntity) => {
        loser.status = 'dead';
        const el = document.getElementById(`flag-${loser.id}`);
        if (el) el.classList.add('dead');

        const dx = loser.x - winner.x;
        const dy = loser.y - winner.y;
        const angle = Math.atan2(dy, dx);
        loser.vx = Math.cos(angle) * 8;
        loser.vy = Math.sin(angle) * 8 - 10;

        createExplosion(loser.x, loser.y);
    };

    const createExplosion = (x: number, y: number) => {
        const arena = flagsContainerRef.current;
        if (!arena) return;
        const el = document.createElement('div');
        el.className = 'absolute w-12 h-12 bg-red-500 rounded-full opacity-70 pointer-events-none z-0';
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.transform = 'translate(-50%, -50%) scale(0)';
        el.style.transition = 'all 0.4s ease-out';
        arena.appendChild(el);
        requestAnimationFrame(() => {
            el.style.transform = 'translate(-50%, -50%) scale(3)';
            el.style.opacity = '0';
        });
        setTimeout(() => el.remove(), 400);
    };

    const continents = ['Todos', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    // Adicione este useEffect para sincronizar o tema com o documento
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div ref={containerRef} className={`relative w-full h-screen overflow-hidden flex items-center justify-center font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>

            {/* Ranking Panel */}
            <div className="absolute top-6 left-24 z-[90] flex flex-col space-y-2 pointer-events-none">
                <h3 className={`text-xl font-black italic tracking-tighter drop-shadow-md ml-4 mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ranking</h3>
                <div className={`backdrop-blur-xl border rounded-[2.5rem] p-6 pr-12 min-w-[200px] shadow-2xl transition-colors ${isDarkMode ? 'bg-slate-900/40 border-white/10' : 'bg-white/60 border-slate-300/30'}`}>
                    <div className="space-y-3">
                        {ranking.length === 0 && <p className={`text-sm italic ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>Waiting for battle...</p>}
                        {ranking.map((entry, i) => (
                            <div key={`${entry.code}-${entry.wins}`} className="flex items-center space-x-3 group">
                                <span className={`font-bold text-lg w-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{i + 1}.</span>
                                <span className={`font-black text-sm tracking-tight drop-shadow-sm truncate max-w-[120px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{entry.name}</span>
                                <span className={`font-bold text-sm ml-auto ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{entry.wins}/{pointsToWin}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* HUD */}
            <div className="absolute top-6 right-6 z-[110] flex flex-col items-end space-y-4">
                <div className="flex flex-row items-center space-x-4">
                    {/* Botão de Tema - Ao lado esquerdo do Menu */}
                    <button 
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-4 rounded-3xl border shadow-xl backdrop-blur-md transition-all active:scale-95 ${isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-white border-white/10' : 'bg-white/80 hover:bg-white text-slate-900 border-slate-300/30'}`}
                        title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                    >
                        {isDarkMode ? (
                            // Ícone do Sol (Modo Claro)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1m-16 0H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            // Ícone da Lua (Modo Escuro)
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>

                    {/* Botão de Menu */}
                    <button onClick={() => setIsSidebarOpen(true)} className={`p-4 rounded-3xl border shadow-xl backdrop-blur-md transition-all active:scale-95 ${isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-white border-white/10' : 'bg-white/80 hover:bg-white text-slate-900 border-slate-300/30'}`}>
                        <div className="flex flex-col space-y-1.5 w-6">
                            <span className={`block h-0.5 w-full rounded-full ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
                            <span className={`block h-0.5 w-full rounded-full ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
                            <span className={`block h-0.5 w-full rounded-full ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Círculo com Bandeira - Embaixo do Menu */}
                <div className={`rounded-full border-[6px] flex items-center justify-center overflow-hidden transition-colors ${isDarkMode ? 'border-white/20 bg-slate-800/60' : 'border-slate-400/20 bg-slate-200/60'} shadow-2xl backdrop-blur-md`} style={{ width: '80px', height: '80px' }}>
                    {ranking.length > 0 ? (
                        <img src={`https://flagcdn.com/w160/${ranking[0].code}.png`} className="w-full h-full object-cover" alt={ranking[0].name} />
                    ) : (
                        <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>--</div>
                    )}
                </div>

                {/* Alive - Embaixo do Círculo */}
                <div className={`backdrop-blur-xl px-6 py-2 rounded-xl border flex items-center space-x-3 shadow-2xl transition-colors ${isDarkMode ? 'bg-black/60 border-white/5' : 'bg-white/60 border-slate-300/30'}`}>
                    <span className={`font-black text-2xl tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Alive:</span>
                    <span ref={hudRef} className="font-black text-3xl tabular-nums drop-shadow-[0_0_10px_rgba(74,222,128,0.4)] text-green-400">0</span>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`absolute inset-0 z-[120] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} p-10 flex flex-col`}>
                    <h2 className="text-3xl font-black text-white tracking-tighter mb-12">AJUSTES</h2>
                    
                    {/* Points to Win Input */}
                    <div className="mb-8">
                        <label className="text-white font-bold text-sm block mb-3">Pontos para Vencer</label>
                        <input 
                            type="number" 
                            min="1" 
                            max="20"
                            value={tempPoints}
                            onChange={(e) => setTempPoints(parseInt(e.target.value) || 1)}
                            className="w-full px-4 py-3 bg-slate-800 border border-white/20 rounded-lg text-white font-bold text-center text-xl focus:outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={() => {
                                setPointsToWin(tempPoints);
                                setIsSidebarOpen(false);
                            }}
                            className="w-full mt-3 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all"
                        >
                            Aplicar
                        </button>
                    </div>

                    <div className="space-y-8">
                        {continents.map(cont => (
                            <button key={cont} onClick={() => { setSelectedContinent(cont); setIsSidebarOpen(false); }} className={`w-full py-5 px-8 rounded-[1.5rem] font-black text-left flex justify-between items-center ${selectedContinent === cont ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400'}`}>
                                <span>{cont}</span>
                            </button>
                        ))}
                    </div>
                    <button onClick={() => { setIsSidebarOpen(false); initGame(); }} className="mt-auto w-full py-6 bg-blue-600 text-white font-black rounded-3xl shadow-2xl">RECOLOCAR PAÍSES</button>
                </div>
            </div>

            {/* Arena */}
            <div ref={arenaBgRef} className={`absolute rounded-full border-[6px] transition-all duration-75 ease-linear pointer-events-none ${isDarkMode ? 'border-indigo-500/50 bg-slate-800/50 shadow-[0_0_100px_rgba(99,102,241,0.2)]' : 'border-indigo-400/50 bg-slate-200/50 shadow-[0_0_100px_rgba(99,102,241,0.1)]'}`} style={{ width: '600px', height: '600px' }}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-black border-4 border-slate-500 shadow-[inset_0_10px_20px_rgba(0,0,0,0.8)]"></div>
            </div>

            {/* Flags Managed by React */}
            <div ref={flagsContainerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {flags.map((f) => (
                    <div
                        key={f.id}
                        id={`flag-${f.id}`}
                        className={`flag-entity shadow-lg text-center ${f.status === 'dead' ? 'dead' : ''}`}
                        style={{
                            width: '50px',
                            height: '50px',
                            position: 'absolute',
                            animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            willChange: 'transform',
                            display: f.x < 10 || f.y < 10 ? 'none' : 'block'
                        }}
                    >
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white relative z-10 box-border">
                            <img src={`https://flagcdn.com/w160/${f.code}.png`} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm name-label z-20 opacity-100">
                            {f.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* Menus */}
            {gameStatus !== 'playing' && gameStatus !== 'spawning' && (
                <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div className="text-center bg-slate-800 p-8 rounded-[2.5rem] border border-slate-600 shadow-2xl w-full max-w-sm">
                        {gameStatus === 'menu' && (
                            <div className="flex flex-col items-center">
                                <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-emerald-400 mb-2 leading-tight">FLAG<br />ROYALE</h1>
                                <p className="text-slate-400 text-sm mb-6">Pontos para vencer: <span className="text-yellow-400 font-bold">{pointsToWin}</span></p>
                                <button onClick={initGame} className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl text-2xl mt-8">PLAY</button>
                            </div>
                        )}
                        {gameStatus === 'winner' && (
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-8 border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.6)] bg-white">
                                    {winner && <img src={`https://flagcdn.com/w320/${winner.code}.png`} className="w-full h-full object-cover" alt={winner.name} />}
                                </div>
                                <h2 className="text-2xl text-yellow-400 font-extrabold mb-1">ROUND CHAMPION</h2>
                                <h1 className="text-5xl text-white font-black mb-10">{winner?.name}</h1>
                                <button onClick={() => {
                                    setWinner(null);
                                    flagsRef.current = [];
                                    setFlags([]);
                                    arenaRadiusRef.current = initialRadiusRef.current;
                                    updateArenaVisual();
                                    initGame();
                                }} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-xl">Play Again</button>
                            </div>
                        )}
                        {gameStatus === 'champion' && champion && (
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-8 border-green-400 shadow-[0_0_50px_rgba(34,197,94,0.6)] bg-white">
                                    <img src={`https://flagcdn.com/w320/${champion.code}.png`} className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-2xl text-green-400 font-extrabold mb-1">GRAND CHAMPION</h2>
                                <h1 className="text-5xl text-white font-black mb-2">{champion.name}</h1>
                                <p className="text-xl text-green-400 font-bold mb-10">{champion.wins} Vitórias</p>
                                <button onClick={resetGame} className="w-full py-4 bg-green-600 text-white font-bold rounded-2xl text-xl">Nova Competição</button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* <style jsx global>{`
                @keyframes popIn {
                    0% { transform: scale(0); }
                    100% { transform: scale(1); }
                }
                .flag-entity.dead {
                    filter: grayscale(100%) brightness(0.5);
                    z-index: 5;
                }
            `}</style> */}
        </div>
    );
}
