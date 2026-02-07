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
    const [gameSpeed, setGameSpeed] = useState<number>(1.0);

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
    const gameSpeedRef = useRef(gameSpeed);

    // Arena Constants
    const initialRadiusRef = useRef(300);
    const arenaRadiusRef = useRef(300);
    const minArenaRadius = 100;
    const shrinkRate = 0.08;
    const FLAG_RADIUS = 18; // 75% of original 25
    const GAP_SIZE = 0.15; // 15% of circle
    const gapRotationRef = useRef(0);
    const gapRotationSpeed = 0.01; // Radians per frame

    // Sync Game Status to Ref
    useEffect(() => {
        gameStatusRef.current = gameStatus;
        if (gameStatus === 'playing' || gameStatus === 'spawning') {
            if (!animationFrameRef.current) startLoop();
        }
    }, [gameStatus]);

    useEffect(() => {
        gameSpeedRef.current = gameSpeed;
    }, [gameSpeed]);

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

            // Ordena, mas NÃO faz slice aqui!
            newRanking = newRanking
                .sort((a, b) => {
                    if (b.wins !== a.wins) {
                        return b.wins - a.wins;
                    }
                    return a.name.localeCompare(b.name);
                });

            rankingRef.current = newRanking;
            setRanking(newRanking); // ranking agora é o array completo

            const championFound = newRanking.find(entry => entry.wins >= pointsToWin);
            if (championFound) {
                setChampion(championFound);
                setGameStatus('champion');
            }
        }
    }, [gameStatus, winner, pointsToWin]);

    const updateArenaVisual = () => {
        if (arenaBgRef.current) {
            const size = arenaRadiusRef.current * 2;
            arenaBgRef.current.style.width = `${size}px`;
            arenaBgRef.current.style.height = `${size}px`;

            // Sync the visual gap on the wall element
            const wallEl = arenaBgRef.current.querySelector('.arena-wall') as HTMLDivElement;
            if (wallEl) {
                // gapRotationRef is in radians. CSS conic-gradient 'from' is in degrees.
                const gapRotationDeg = (gapRotationRef.current * 180 / Math.PI) % 360;
                const gapSizeDeg = GAP_SIZE * 360;

                wallEl.style.webkitMaskImage = `conic-gradient(from ${gapRotationDeg}deg, transparent 0deg ${gapSizeDeg}deg, black ${gapSizeDeg}deg 360deg)`;
                wallEl.style.maskImage = `conic-gradient(from ${gapRotationDeg}deg, transparent 0deg ${gapSizeDeg}deg, black ${gapSizeDeg}deg 360deg)`;
            }
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
        gapRotationRef.current = 0; // Reset to vertical start
        updateArenaVisual();

        const availableFlags = selectedContinent === 'Todos'
            ? WORLD_FLAGS
            : WORLD_FLAGS.filter(f => f.continent === selectedContinent);

        let spawnCount = selectedContinent === 'Todos' ? 120 : availableFlags.length;
        spawnCount = Math.min(spawnCount, availableFlags.length);

        const shuffled = [...availableFlags].sort(() => Math.random() - 0.5).slice(0, spawnCount);
        const newFlags: FlagEntity[] = [];

        shuffled.forEach((data, i) => {
            // Spawn clustered in the middle
            const startX = gameBoundsRef.current.centerX + (Math.random() - 0.5) * 100;
            const startY = gameBoundsRef.current.centerY + (Math.random() - 0.5) * 100;

            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 2;

            const newFlag: FlagEntity = {
                id: i,
                code: data.code,
                name: data.name,
                x: startX,
                y: startY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                status: 'live',
                radius: FLAG_RADIUS
            };
            newFlags.push(newFlag);
        });

        flagsRef.current = newFlags;
        setFlags(newFlags);
        updateHud(newFlags.length);

        setGameStatus('spawning'); // Transition status names to match logic

        // Vibration phase length (2 seconds)
        setTimeout(() => {
            setGameStatus('playing');
        }, 2500);

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
        const speedMult = gameSpeedRef.current;

        let currentLiveCount = 0;
        let lastLiveFlag: FlagEntity | null = null;

        if (status === 'playing' || status === 'spawning') {
            const liveFlags = flags.filter(f => f.status === 'live');
            const count = liveFlags.length;

            // Arena Shrink (only if playing)
            if (status === 'playing' && count > 1) {
                arenaRadiusRef.current -= shrinkRate * speedMult;
                if (arenaRadiusRef.current < minArenaRadius) arenaRadiusRef.current = minArenaRadius;
            }

            // Continuous Rotation
            gapRotationRef.current = (gapRotationRef.current + gapRotationSpeed * speedMult) % (Math.PI * 2);
            updateArenaVisual();
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

                f.x += f.vx * speedMult;
                f.y += f.vy * speedMult;

                // Add vibration jitter during spawning phase
                if (status === 'spawning') {
                    f.vx += (Math.random() - 0.5) * 2 * speedMult;
                    f.vy += (Math.random() - 0.5) * 2 * speedMult;
                    // Attract to center slightly to keep cluster tight
                    const toCenterX = centerX - f.x;
                    const toCenterY = centerY - f.y;
                    f.vx += toCenterX * 0.05;
                    f.vy += toCenterY * 0.05;
                }

                const dx = f.x - centerX;
                const dy = f.y - centerY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxD = arenaRadiusRef.current - f.radius;

                if (dist > maxD) {
                    // Normalize and Sync with CSS (CSS 0deg is UP)
                    const physAngle = Math.atan2(dy, dx);
                    const syncedAngle = (physAngle + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);

                    const normalizedGapStart = (gapRotationRef.current + Math.PI * 2) % (Math.PI * 2);
                    const normalizedGapEnd = (normalizedGapStart + GAP_SIZE * Math.PI * 2) % (Math.PI * 2);

                    let inGap = false;
                    if (normalizedGapStart < normalizedGapEnd) {
                        inGap = syncedAngle >= normalizedGapStart && syncedAngle <= normalizedGapEnd;
                    } else {
                        inGap = syncedAngle >= normalizedGapStart || syncedAngle <= normalizedGapEnd;
                    }

                    // During spawning, NO ONE exits. Everyone bounces.
                    const isSpawning = status === 'spawning';

                    if (inGap && !isSpawning && status === 'playing') {
                        // EXIT: No reflection, eliminate when fully out
                        if (dist > arenaRadiusRef.current + f.radius) {
                            eliminateFlag(f, f);
                        }
                    } else if (!inGap || isSpawning) {
                        // REFLECT: Always reflect if NOT in gap OR if we are still spawning
                        const nx = dx / dist;
                        const ny = dy / dist;
                        const dot = f.vx * nx + f.vy * ny;

                        if (dot > 0) {
                            f.vx = f.vx - 2 * dot * nx;
                            f.vy = f.vy - 2 * dot * ny;
                        }

                        const overlap = dist - maxD;
                        f.x -= nx * (overlap + 1);
                        f.y -= ny * (overlap + 1);
                        f.vx *= 0.99;
                        f.vy *= 0.99;
                    }
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

                        // STONGER COLLISIONS: Higher impulse and larger overlap correction
                        f.x -= nx * overlap * 0.8;
                        f.y -= ny * overlap * 0.8;
                        other.x += nx * overlap * 0.8;
                        other.y += ny * overlap * 0.8;

                        if (status === 'playing' || status === 'spawning') {
                            // BALANCED IMPULSE: Satisfying but not chaotic
                            const impulse = 15;

                            f.vx -= nx * impulse;
                            f.vy -= ny * impulse;
                            other.vx += nx * impulse;
                            other.vy += ny * impulse;

                            // Prevent sticking with moderate repulsion
                            const pushForce = 2;
                            f.x -= nx * pushForce;
                            f.y -= ny * pushForce;
                            other.x += nx * pushForce;
                            other.y += ny * pushForce;

                            // Visual feedback (Stain effect commented out)
                            // if (status === 'playing') createExplosion((f.x + other.x) / 2, (f.y + other.y) / 2);
                        } else {
                            // Menu collisions
                            f.vx -= nx * 4;
                            f.vy -= ny * 4;
                            other.vx += nx * 4;
                            other.vy += ny * 4;
                        }
                    }
                }
            } else if (f.status === 'dead') {
                f.vy += 0.8 * speedMult;
                f.vx *= Math.pow(0.99, speedMult);
                f.x += f.vx * speedMult;
                f.y += f.vy * speedMult;
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

    const eliminateFlag = (loser: FlagEntity, assailant: FlagEntity) => {
        loser.status = 'dead';
        const el = document.getElementById(`flag-${loser.id}`);
        if (el) el.classList.add('dead');

        // If it's a gap exit (assailant is itself), reduce momentum
        if (loser.id === assailant.id) {
            loser.vx *= 0.4; // Lose force (slow down)
            loser.vy *= 0.4;
            loser.vy -= 2;   // Light pop up
        } else {
            // Normal collision expulsion
            const dx = loser.x - assailant.x;
            const dy = loser.y - assailant.y;
            const angle = Math.atan2(dy, dx);
            loser.vx = Math.cos(angle) * 12;
            loser.vy = Math.sin(angle) * 12 - 5;
        }

        // createExplosion(loser.x, loser.y);
    };

    /*
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
    */

    const continents = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

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
            <div className={`absolute top-6 left-6 z-[130] flex flex-col space-y-2 pointer-events-none transition-opacity duration-300 ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className={`text-xl font-black italic tracking-tighter drop-shadow-md ml-4 mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Ranking</h3>
                <div className={`backdrop-blur-xl border rounded-[2.5rem] p-6 pr-12 min-w-[200px] shadow-2xl transition-colors ${isDarkMode ? 'bg-slate-900/40 border-white/10' : 'bg-white/60 border-slate-300/30'}`}>
                    <div className="space-y-3">
                        {ranking.length === 0 && <p className={`text-sm italic ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>Waiting for battle...</p>}
                        {ranking.slice(0, 5).map((entry, i) => (
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
            <div className="absolute top-6 right-6 z-[131] flex flex-col items-end space-y-4">
                <div className="flex flex-row items-center space-x-4">
                    {/* Botão de Tema - Escondido quando sidebar está aberta */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`p-4 rounded-3xl border shadow-xl backdrop-blur-md transition-all active:scale-95 ${isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-white border-white/10' : 'bg-white/80 hover:bg-white text-slate-900 border-slate-300/30'}`}
                        title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                    >
                        {isDarkMode ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1m-16 0H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                    </button>

                    {/* Botão de Menu - Sempre Visível, agora Toggles */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`p-4 rounded-3xl border shadow-xl backdrop-blur-md transition-all active:scale-95 z-[140] ${isDarkMode ? 'bg-slate-800/80 hover:bg-slate-700 text-white border-white/10' : 'bg-white/80 hover:bg-white text-slate-900 border-slate-300/30'}`}
                    >
                        <div className="flex flex-col space-y-1.5 w-6">
                            <span className={`block h-0.5 w-full rounded-full transition-transform ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''} ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
                            <span className={`block h-0.5 w-full rounded-full transition-opacity ${isSidebarOpen ? 'opacity-0' : ''} ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
                            <span className={`block h-0.5 w-full rounded-full transition-transform ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''} ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Círculo com Bandeira - Escondido quando sidebar está aberta */}
                <div className={`rounded-full border-[6px] flex items-center justify-center overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'} ${isDarkMode ? 'border-white/20 bg-slate-800/60' : 'border-slate-400/20 bg-slate-200/60'} shadow-2xl backdrop-blur-md`} style={{ width: '80px', height: '80px' }}>
                    {ranking.length > 0 ? (
                        <img src={`https://flagcdn.com/w160/${ranking[0].code}.png`} className="w-full h-full object-cover" alt={ranking[0].name} />
                    ) : (
                        <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>--</div>
                    )}
                </div>

                {/* Alive - Escondido quando sidebar está aberta */}
                <div className={`flex items-center space-x-3 mt-2 transition-all duration-300 ${isSidebarOpen ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
                    <svg className="w-8 h-8 animate-pulse" viewBox="0 0 24 24" fill="red" style={{ background: 'none' }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span ref={hudRef} className="font-black text-3xl tabular-nums text-green-400">{flags.filter(f => f.status === 'live').length}</span>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`absolute inset-0 z-[120] transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={() => setIsSidebarOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-80 ${isDarkMode ? 'bg-slate-900/90 border-white/10 text-white' : 'bg-white/90 border-slate-200 text-slate-900'} backdrop-blur-md border-l shadow-2xl transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} p-10 flex flex-col`}>
                    <h2 className="text-3xl font-black tracking-tighter mb-12">AJUSTES</h2>

                    {/* Points to Win Input */}
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-medium opacity-70">Pontos para Ganhar: {tempPoints}</span>
                        <input
                            type="range"
                            min="1"
                            max="20"
                            value={tempPoints}
                            onChange={(e) => {
                                const val = parseInt(e.target.value);
                                setTempPoints(val);
                                setPointsToWin(val);
                            }}
                            className="w-24 h-1.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <span className="text-sm font-medium opacity-70">Velocidade: {gameSpeed.toFixed(1)}x</span>
                        <input
                            type="range"
                            min="0.1"
                            max="2.0"
                            step="0.1"
                            value={gameSpeed}
                            onChange={(e) => setGameSpeed(parseFloat(e.target.value))}
                            className="w-24 h-1.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>
                    <button
                        onClick={() => {
                            setPointsToWin(tempPoints);
                            setIsSidebarOpen(false);
                        }}
                        className="w-full mt-3 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all"
                    >
                        Aplicar
                    </button>

                    <div className="mt-10 space-y-4">
                        {continents.map(cont => (
                            <button key={cont} onClick={() => { setSelectedContinent(cont); setIsSidebarOpen(false); }} className={`w-full py-4 px-6 rounded-2xl font-bold text-left flex justify-between items-center transition-all ${selectedContinent === cont ? 'bg-indigo-600 text-white' : (isDarkMode ? 'bg-white/5 text-slate-400 hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}`}>
                                <span>{cont}</span>
                            </button>
                        ))}
                    </div>

                    <button onClick={() => { setIsSidebarOpen(false); initGame(); }} className="mt-auto w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-xl transition-all">RECOLOCAR PAÍSES</button>
                </div>
            </div>

            {/* Arena */}
            <div ref={arenaBgRef} className="absolute rounded-full transition-all duration-75 ease-linear pointer-events-none" style={{ width: '600px', height: '600px' }}>
                {/* Visual Wall with Opening (High contrast, no shadows) */}
                <div className={`arena-wall absolute inset-0 rounded-full border-[10px] transition-colors duration-300 ${isDarkMode ? 'border-indigo-500' : 'border-indigo-400'}`}></div>
            </div>

            {/* Flags Container */}
            <div ref={flagsContainerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {flags.map((f) => (
                    <div
                        key={f.id}
                        id={`flag-${f.id}`}
                        className={`flag-entity shadow-lg text-center ${f.status === 'dead' ? 'dead' : ''}`}
                        style={{
                            width: '25px',
                            height: '25px',
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
            {
                gameStatus !== 'playing' && gameStatus !== 'spawning' && (
                    <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                        <div className={`text-center p-8 rounded-[2.5rem] border shadow-2xl w-full max-w-sm transform scale-[0.9] ${isDarkMode ? 'bg-slate-800 border-slate-600' : 'bg-white border-slate-200'}`}>
                            {gameStatus === 'menu' && (
                                <div className="flex flex-col items-center">
                                    <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-emerald-400 mb-2 leading-tight">FLAG<br />ROYALE</h1>
                                    <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-500'} text-sm mb-6}`}>Points to Win: <span className="text-yellow-500 font-bold">{pointsToWin}</span></p>
                                    <button onClick={initGame} className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl text-2xl mt-8 hover:bg-indigo-700 transition-colors">PLAY</button>
                                </div>
                            )}
                            {gameStatus === 'winner' && (
                                <div className="flex flex-col items-center">
                                    <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-8 border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.4)] bg-white">
                                        {winner && <img src={`https://flagcdn.com/w320/${winner.code}.png`} className="w-full h-full object-cover" alt={winner.name} />}
                                    </div>
                                    <h2 className="text-2xl text-yellow-500 font-extrabold mb-1">ROUND CHAMPION</h2>
                                    <h1 className={`text-5xl font-black mb-10 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{winner?.name}</h1>
                                    <button onClick={() => {
                                        setWinner(null);
                                        flagsRef.current = [];
                                        setFlags([]);
                                        arenaRadiusRef.current = initialRadiusRef.current;
                                        updateArenaVisual();
                                        initGame();
                                    }} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl text-xl transition-colors">Play Again</button>
                                </div>
                            )}
                            {gameStatus === 'champion' && champion && (
                                <div className="flex flex-col items-center">
                                    <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-8 border-green-400 shadow-[0_0_50px_rgba(34,197,94,0.4)] bg-white">
                                        <img src={`https://flagcdn.com/w320/${champion.code}.png`} className="w-full h-full object-cover" />
                                    </div>
                                    <h2 className="text-2xl text-green-500 font-extrabold mb-1">GRAND CHAMPION</h2>
                                    <h1 className={`text-5xl font-black mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{champion.name}</h1>
                                    <p className="text-xl text-green-500 font-bold mb-10">{champion.wins} Vitórias</p>
                                    <button onClick={resetGame} className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl text-xl transition-colors">Nova Competição</button>
                                </div>
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    );
}
