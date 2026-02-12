export interface VictoryTheme {
    code: string;
    symbol: string;      // Emoji or Icon name
    landscape: string;   // Representative landscape description
    action: string;      // Cultural action (e.g. "Dancing Samba", "Playing Football")
    colors: string[];    // Flag colors for gradients
    celebration: string; // Special celebration phrase
    backgroundImage?: string; // Full-screen background image URL
}

export const VICTORY_THEMES: Record<string, VictoryTheme> = {
    // Africa
    'dz': { code: 'dz', symbol: '🕌', landscape: 'Sahara Desert & Atlas Mountains', action: 'Desert Safari', colors: ['#006233', '#ffffff', '#d21034'], celebration: 'Desert King!' },
    'ao': { code: 'ao', symbol: '⚙️', landscape: 'Kalandula Falls', action: 'Kizomba Dance', colors: ['#000000', '#ff0000', '#ffff00'], celebration: 'Força Angola!' },
    'bj': { code: 'bj', symbol: '🛶', landscape: 'Ganvie Lake Village', action: 'Traditional Ceremony', colors: ['#008751', '#fcd116', '#e8112d'], celebration: 'Benin Pride!' },
    'bw': { code: 'bw', symbol: '🦓', landscape: 'Okavango Delta', action: 'Wildlife Spotting', colors: ['#000000', '#ffffff', '#6da9d2'], celebration: 'Nature\'s Winner!' },
    'bf': { code: 'bf', symbol: '🛖', landscape: 'Sindou Peaks', action: 'Mossi Dance', colors: ['#ef3340', '#009a44', '#fcd116'], celebration: 'Savannah Star!' },
    'bi': { code: 'bi', symbol: '🥁', landscape: 'Royal Drummers of Gitega', action: 'Sacred Drumming', colors: ['#ce1126', '#1eb53a', '#ffffff'], celebration: 'Heart of Africa!' },
    'cm': { code: 'cm', symbol: '🦁', landscape: 'Mount Cameroon', action: 'Makossa Dance', colors: ['#007a5e', '#ce1126', '#fcd116'], celebration: 'Indomitable Lion!' },
    'cv': { code: 'cv', symbol: '🌊', landscape: 'Santo Antão Mountains', action: 'Morna Performance', colors: ['#003893', '#ffffff', '#ff0000'], celebration: 'Atlantic Gem!' },
    'td': { code: 'td', symbol: '🏜️', landscape: 'Ennedi Plateau', action: 'Nomadic Celebration', colors: ['#002664', '#fecb00', '#c60c30'], celebration: 'Sahara Strong!' },
    'km': { code: 'km', symbol: '🌙', landscape: 'Mount Karthala Volcano', action: 'Flavor Island Fest', colors: ['#ffff00', '#ffffff', '#ff0000', '#0000ff', '#3d8e33'], celebration: 'Moon & Star!' },
    'cd': { code: 'cd', symbol: '🐆', landscape: 'Congo River', action: 'Rumba Celebration', colors: ['#007fff', '#f7d618', '#ce1126'], celebration: 'Congolese Soul!' },
    'eg': { code: 'eg', symbol: '📐', landscape: 'Pyramids of Giza', action: 'Pharaonic Festivities', colors: ['#ce1126', '#ffffff', '#000000'], celebration: 'Eternal Glory!' },
    'et': { code: 'et', symbol: '☕', landscape: 'Simien Mountains', action: 'Coffee Ceremony', colors: ['#009a44', '#fed141', '#ef3340'], celebration: 'African Soul!' },
    'gh': { code: 'gh', symbol: '🥁', landscape: 'Cape Coast Castle backdrop', action: 'Adowa Dance', colors: ['#ce1126', '#fcd116', '#006b3f'], celebration: 'Black Stars Shine!' },
    'ke': { code: 'ke', symbol: '🏃‍♂️', landscape: 'Masai Mara Savannah', action: 'Marathon Run', colors: ['#000000', '#bb0000', '#006600'], celebration: 'The Runner\'s Wind!' },
    'ma': { code: 'ma', symbol: '🏺', landscape: 'Blue City of Chefchaouen', action: 'Tea Celebration', colors: ['#c1272d', '#006233'], celebration: 'Atlas Lion!' },
    'mz': { code: 'mz', symbol: '🦐', landscape: 'Bazaruto Archipelago', action: 'Marrabenta Dance', colors: ['#009739', '#ffffff', '#ff0000', '#000000', '#ffff00'], celebration: 'Viva Moçambique!' },
    'ng': { code: 'ng', symbol: '🦅', landscape: 'Zuma Rock', action: 'Nollywood Fest', colors: ['#008751', '#ffffff'], celebration: 'Super Eagles Soar!' },
    'za': { code: 'za', symbol: '⛰️', landscape: 'Table Mountain', action: 'Rugby Tackle', colors: ['#e03c31', '#007749', '#001489', '#ffb81c', '#000000'], celebration: 'Rainbow Nation!' },

    // Americas
    'ar': { code: 'ar', symbol: '🥩', landscape: 'Iguazu Falls', action: 'Tango Passion', colors: ['#74acdf', '#ffffff', '#f6b40e'], celebration: 'Eternal Tango!' },
    'bo': { code: 'bo', symbol: '🧂', landscape: 'Salar de Uyuni', action: 'Andean Parade', colors: ['#d52b1e', '#f9e300', '#007934'], celebration: 'High Plateau Hero!' },
    'br': {
        code: 'br',
        symbol: '🎊',
        landscape: 'Christ the Redeemer & Sugarloaf Mountain',
        action: 'Samba Carnival & Football Victory',
        colors: ['#009c3b', '#ffdf00', '#002776'],
        celebration: 'O HEXA VEM! 🇧🇷',
        backgroundImage: 'https://images.unsplash.com/photo-1599341624645-662fd997972b?q=80&w=1920&auto=format&fit=crop'
    },
    'ca': { code: 'ca', symbol: '🍁', landscape: 'Niagara Falls & Rocky Mountains', action: 'Ice Hockey Goal', colors: ['#ff0000', '#ffffff'], celebration: 'Maple Leaf Might!' },
    'cl': { code: 'cl', symbol: '🗿', landscape: 'Torres del Paine & Atacama', action: 'Andean Hike', colors: ['#0039a6', '#ffffff', '#d52b1e'], celebration: 'Andean Peak!' },
    'co': { code: 'co', symbol: '💃', landscape: 'Coffee Axis Hills', action: 'Cumbia Celebration', colors: ['#ffcd00', '#003087', '#ce1126'], celebration: 'Coffee Gold!' },
    'cr': { code: 'cr', symbol: '🦜', landscape: 'Cloud Forests of Monteverde', action: 'Pura Vida Relax', colors: ['#002b7f', '#ffffff', '#ce1126'], celebration: 'Pura Vida!' },
    'cu': { code: 'cu', symbol: '🎷', landscape: 'Old Havana Streets', action: 'Salsa Night', colors: ['#cf142b', '#ffffff', '#002a8f'], celebration: 'Caribbean Soul!' },
    'do': { code: 'do', symbol: '⚾', landscape: 'Punta Cana Beaches', action: 'Merengue Beat', colors: ['#002d62', '#ffffff', '#ce1126'], celebration: 'Quisqueya!' },
    'ec': { code: 'ec', symbol: '🐢', landscape: 'Galapagos Islands', action: 'Equator Jump', colors: ['#ffcd00', '#003087', '#ce1126'], celebration: 'Middle of the World!' },
    'gt': { code: 'gt', symbol: '🐦', landscape: 'Tikal Mayan Ruins', action: 'Ancient Ceremony', colors: ['#4997d0', '#ffffff'], celebration: 'Mayan Spirit!' },
    'jm': { code: 'jm', symbol: '⚡', landscape: 'Blue Mountains Coast', action: 'Reggae Jam', colors: ['#000000', '#fdb913', '#009b3a'], celebration: 'One Love Victory!' },
    'mx': { code: 'mx', symbol: '🌮', landscape: 'Chichen Itza Pyramid', action: 'Mariachi Serenade', colors: ['#006341', '#ffffff', '#c8102e'], celebration: '¡Viva México!' },
    'pa': { code: 'pa', symbol: '🚢', landscape: 'Panama Canal & Skylines', action: 'Global Bridge Walk', colors: ['#ffffff', '#005293', '#da121a'], celebration: 'Canal King!' },
    'pe': { code: 'pe', symbol: '🦙', landscape: 'Machu Picchu', action: 'Inca Celebration', colors: ['#d91023', '#ffffff'], celebration: 'Inca Legacy!' },
    'us': {
        code: 'us',
        symbol: '🏈',
        landscape: 'NYC Skyline & Stadium Lights',
        action: 'Touchdown Celebration & Slam Dunk',
        colors: ['#3c3b6e', '#b22234', '#ffffff'],
        celebration: 'USA PRIDE! 🇺🇸',
        backgroundImage: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1920&auto=format&fit=crop'
    },
    'uy': { code: 'uy', symbol: '🧉', landscape: 'Punta del Este Coast', action: 'Mate Sharing', colors: ['#0081c8', '#ffffff', '#f1b401'], celebration: 'Garra Charrúa!' },
    've': { code: 've', symbol: '🏔️', landscape: 'Angel Falls (Kerepakupai Merú)', action: 'Joropo Dance', colors: ['#ffcc00', '#0000ff', '#cf142b'], celebration: 'Salto Angel!' },

    // Asia
    'af': { code: 'af', symbol: '🪁', landscape: 'Hindu Kush Mountains', action: 'Kite Flying Competition', colors: ['#000000', '#ff0000', '#009900'], celebration: 'Afghan Wind!' },
    'cn': { code: 'cn', symbol: '🐉', landscape: 'The Great Wall', action: 'Kung Fu Move', colors: ['#ee1c25', '#ffff00'], celebration: 'Dragon\'s Roar!' },
    'in': { code: 'in', symbol: '🕌', landscape: 'Taj Mahal', action: 'Bollywood Dance', colors: ['#ff9933', '#ffffff', '#128807'], celebration: 'Namaste Victory!' },
    'id': { code: 'id', symbol: '🌋', landscape: 'Mount Bromo & Borobudur', action: 'Wayang Puppetry', colors: ['#ff0000', '#ffffff'], celebration: 'Nusantara Star!' },
    'ir': { code: 'ir', symbol: '🦁', landscape: 'Persepolis Ruins', action: 'Persian Poetry', colors: ['#239e46', '#ffffff', '#da0000'], celebration: 'Persian Might!' },
    'iq': { code: 'iq', symbol: '🏺', landscape: 'Ancient Babylon', action: 'Mesopotamian Fest', colors: ['#ce1126', '#ffffff', '#000000', '#007a3d'], celebration: 'Cradle of Civilization!' },
    'il': { code: 'il', symbol: '🏛️', landscape: 'Old City Jerusalem & Dead Sea', action: 'Hora Dance', colors: ['#0038b8', '#ffffff'], celebration: 'Desert Bloom!' },
    'jp': { code: 'jp', symbol: '⛩️', landscape: 'Mount Fuji & Sakura Gardens', action: 'Katana Slice / Sumo Stomp', colors: ['#bc002d', '#ffffff'], celebration: 'Bushido Spirit!' },
    'kr': { code: 'kr', symbol: '🏢', landscape: 'Seoul Cityscape & Gyeongbokgung', action: 'K-Pop Performance', colors: ['#ffffff', '#cd2e3a', '#0047a0', '#000000'], celebration: 'K-Star Power!' },
    'kw': { code: 'kw', symbol: '🏙️', landscape: 'Kuwait Towers', action: 'Desert Hospitality', colors: ['#007a3d', '#ffffff', '#ce1126', '#000000'], celebration: 'Gulf Pride!' },
    'my': { code: 'my', symbol: '🏢', landscape: 'Petronas Towers', action: 'Silat Move', colors: ['#010066', '#ffffff', '#cc0000', '#ffff00'], celebration: 'Asian Tiger!' },
    'pk': { code: 'pk', symbol: '🏏', landscape: 'K2 Mountain', action: 'Cricket Smash', colors: ['#006600', '#ffffff'], celebration: 'Shaheen Flight!' },
    'ps': { code: 'ps', symbol: '🕊️', landscape: 'Olive Groves of West Bank', action: 'Dabke Dance', colors: ['#000000', '#ffffff', '#007a3d', '#ce1126'], celebration: 'Resilience Shout!' },
    'ph': { code: 'ph', symbol: '🌴', landscape: 'Mayon Volcano', action: 'Island Fiesta', colors: ['#0038a8', '#ce1126', '#ffffff', '#fcd116'], celebration: 'Pearl of the Orient!' },
    'sa': { code: 'sa', symbol: '🌴', landscape: 'AlUla Desert', action: 'Sword Dance (Ardha)', colors: ['#006c35', '#ffffff'], celebration: 'Desert Falcon!' },
    'sg': { code: 'sg', symbol: '🦁', landscape: 'Marina Bay Sands & Gardens', action: 'Merlion Toast', colors: ['#ed2939', '#ffffff'], celebration: 'Lion City Glory!' },
    'th': { code: 'th', symbol: '🐘', landscape: 'Wat Arun Temple', action: 'Muay Thai Kick', colors: ['#a51931', '#ffffff', '#2d2e71'], celebration: 'Siam Strength!' },
    'tr': { code: 'tr', symbol: '🎈', landscape: 'Cappadocia Balloons', action: 'Whirling Dervish', colors: ['#e30a17', '#ffffff'], celebration: 'Ottoman Echo!' },
    'vn': { code: 'vn', symbol: '🛶', landscape: 'Ha Long Bay', action: 'Dragon Boat Race', colors: ['#da251d', '#ffff00'], celebration: 'Indochina Star!' },

    // Europe
    'at': { code: 'at', symbol: '🎻', landscape: 'Alps & Vienna Opera', action: 'Classical Waltz', colors: ['#ed2939', '#ffffff'], celebration: 'Alpine Sound!' },
    'be': { code: 'be', symbol: '🍫', landscape: 'Grand Place Brussels', action: 'Chocolate Feast', colors: ['#000000', '#ffff00', '#ff0000'], celebration: 'Heart of Europe!' },
    'hr': { code: 'hr', symbol: '⚽', landscape: 'Dubrovnik Old Town', action: 'Football Dribble', colors: ['#ff0000', '#ffffff', '#171796'], celebration: 'Adriatic Fire!' },
    'cz': { code: 'cz', symbol: '🏰', landscape: 'Prague Castle & Bridges', action: 'Cheers with Beer', colors: ['#ffffff', '#d7141a', '#11457e'], celebration: 'Bohemian Magic!' },
    'dk': { code: 'dk', symbol: '🧜‍♀️', landscape: 'Nyhavn Canal', action: 'Viking Roar', colors: ['#c60c30', '#ffffff'], celebration: 'Nordic Light!' },
    'fi': { code: 'fi', symbol: '🧖', landscape: 'Lapland Northern Lights', action: 'Sauna Relax', colors: ['#ffffff', '#003580'], celebration: 'Sisu Spirit!' },
    'fr': { code: 'fr', symbol: '🗼', landscape: 'Eiffel Tower & Louvre', action: 'Cannes Film Bow', colors: ['#002395', '#ffffff', '#ed2939'], celebration: 'Liberté, Égalité!' },
    'de': { code: 'de', symbol: '🍺', landscape: 'Neuschwanstein Castle', action: 'Oktoberfest Cheer', colors: ['#000000', '#ff0000', '#ffcc00'], celebration: 'Deutsche Kraft!' },
    'gr': { code: 'gr', symbol: '🏛️', landscape: 'The Acropolis & Santorini', action: 'Sirtaki Dance', colors: ['#005bae', '#ffffff'], celebration: 'Olympic Legend!' },
    'is': { code: 'is', symbol: '🔥', landscape: 'Geysers & Volcanoes', action: 'Viking Clap', colors: ['#003897', '#ffffff', '#d72828'], celebration: 'Fire and Ice!' },
    'ie': { code: 'ie', symbol: '🍀', landscape: 'Cliffs of Moher', action: 'Irish Step Dance', colors: ['#169b62', '#ffffff', '#ff883e'], celebration: 'Lucky Green Victory!' },
    'it': { code: 'it', symbol: '🍕', landscape: 'Colosseum & Venice Canals', action: 'Opera High Note', colors: ['#009246', '#ffffff', '#ce2b37'], celebration: 'La Dolce Vita!' },
    'nl': { code: 'nl', symbol: '🌷', landscape: 'Windmills & Tulip Fields', action: 'Cycling Pride', colors: ['#ae1c28', '#ffffff', '#21468b', '#ff4f00'], celebration: 'Orange Crush!' },
    'no': { code: 'no', symbol: '🚢', landscape: 'Fjord Cliffs', action: 'Viking Sailing', colors: ['#ba0c2f', '#ffffff', '#00205b'], celebration: 'Fjord Force!' },
    'pl': { code: 'pl', symbol: '🥟', landscape: 'Old Town Warsaw', action: 'Polonaise Dance', colors: ['#ffffff', '#dc143c'], celebration: 'Eagle\'s Pride!' },
    'pt': { code: 'pt', symbol: '⛵', landscape: 'Belem Tower & Algarve', action: 'Fado Performance', colors: ['#006600', '#ff0000', '#ffff00'], celebration: 'Navegadores!' },
    'ro': { code: 'ro', symbol: '🧛', landscape: 'Bran Castle (Transylvania)', action: 'Doina Performance', colors: ['#002b7f', '#fcd116', '#ce1126'], celebration: 'Carpathian Might!' },
    'ru': { code: 'ru', symbol: '🏰', landscape: 'Red Square & Aurora', action: 'Ballet Leap', colors: ['#ffffff', '#0039a6', '#d52b1e'], celebration: 'Iron Will!' },
    'es': { code: 'es', symbol: '🐂', landscape: 'Sagrada Familia & Alhambra', action: 'Flamenco Stomp', colors: ['#aa151b', '#ffb500'], celebration: '¡Olé!' },
    'se': { code: 'se', symbol: '🇸🇪', landscape: 'Stockholm Archipelago', action: 'Midsommar Dance', colors: ['#006aa7', '#fecc00'], celebration: 'Swedish Steel!' },
    'ae': {
        code: 'ae',
        symbol: '🏙️',
        landscape: 'Burj Khalifa & Desert Dunes',
        action: 'Dune Bashing & Falconry',
        colors: ['#ff0000', '#ffffff', '#007a3d', '#000000'],
        celebration: 'Skyline Majesty! 🇦🇪',
        backgroundImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop'
    },
    'ch': { code: 'ch', symbol: '🏔️', landscape: 'Matterhorn Peak', action: 'Alpine Horn', colors: ['#ff0000', '#ffffff'], celebration: 'Swiss Precision!' },
    'ua': { code: 'ua', symbol: '🌻', landscape: 'Sunflower Fields', action: 'Hopak Dance', colors: ['#ffd700', '#0057b7'], celebration: 'Freedom Glory!' },
    'gb': { code: 'gb', symbol: '💂', landscape: 'Big Ben & Stonehenge', action: 'Royal Salute', colors: ['#012169', '#ffffff', '#c8102e'], celebration: 'Rule Britannia!' },

    // Oceania
    'au': { code: 'au', symbol: '🦘', landscape: 'Opera House & Uluru', action: 'Surfing the Wave', colors: ['#012169', '#ffffff', '#c8102e', '#ffcd00'], celebration: 'Aussie Pride!' },
    'fj': { code: 'fj', symbol: '🥥', landscape: 'Tropical Coral Reefs', action: 'Cibi Dance', colors: ['#62b5e5', '#ffffff', '#012169'], celebration: 'Pacific Paradise!' },
    'nz': { code: 'nz', symbol: '🥝', landscape: 'Milford Sound', action: 'Haka Performance', colors: ['#012169', '#ffffff', '#c8102e', '#000000'], celebration: 'All Blacks Spirit!' },
    'ws': { code: 'ws', symbol: '🥥', landscape: 'Samoan Fales & Lagoons', action: 'Siva Tau Dance', colors: ['#ce1126', '#ffffff', '#002664'], celebration: 'Samoan Warrior!' },
};

export const DEFAULT_THEME: VictoryTheme = {
    code: 'intl',
    symbol: '🏆',
    landscape: 'Global Celebration',
    action: 'Standing Ovation',
    colors: ['#4f46e5', '#10b981', '#f59e0b'],
    celebration: 'World Champion!',
    backgroundImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop'
};

const CONTINENT_FALLBACKS: Record<string, Partial<VictoryTheme>> = {
    'Africa': {
        symbol: '🌍',
        landscape: 'Vibrant Savannah',
        action: 'Traditional Rhythms dance',
        celebration: 'Strength of Africa!',
        backgroundImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1920&auto=format&fit=crop'
    },
    'Americas': {
        symbol: '🌎',
        landscape: 'Lush Rainforests',
        action: 'Carnival Rhythms dance',
        celebration: 'Spirit of the Americas!',
        backgroundImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop'
    },
    'Asia': {
        symbol: '🌏',
        landscape: 'Vast Landscapes & Diverse Cultures',
        action: 'Continental Celebration',
        celebration: 'Spirit of Asia!',
        backgroundImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop'
    },
    'Europe': {
        symbol: '🏰',
        landscape: 'Historic Castle backdrop',
        action: 'Folk Celebration dance',
        celebration: 'European Legacy!',
        backgroundImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1920&auto=format&fit=crop'
    },
    'Oceania': {
        symbol: '🏝️',
        landscape: 'Turquoise Island waters',
        action: 'Ocean Voyager ritual',
        celebration: 'Pacific Soul!',
        backgroundImage: 'https://images.unsplash.com/photo-1506929113675-9e67c9c05acc?q=80&w=1920&auto=format&fit=crop'
    }
};

export function getVictoryTheme(code: string, continent?: string): VictoryTheme {
    const fallback = CONTINENT_FALLBACKS[continent || ''] || DEFAULT_THEME;
    const staticTheme = VICTORY_THEMES[code];

    if (staticTheme) {
        return {
            ...staticTheme,
            backgroundImage: staticTheme.backgroundImage || fallback.backgroundImage
        };
    }

    return {
        code,
        symbol: fallback.symbol || '🏆',
        landscape: fallback.landscape || 'Global Celebration',
        action: fallback.action || 'Standing Ovation',
        colors: ['#4f46e5', '#34d399', '#f59e0b'],
        celebration: fallback.celebration || 'Victory!',
        backgroundImage: fallback.backgroundImage
    };
}
