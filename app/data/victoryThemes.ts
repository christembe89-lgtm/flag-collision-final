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
    'cf': { code: 'cf', symbol: '🐘', landscape: 'Dzanga-Sangha Forest', action: 'Forest Tracking', colors: ['#003082', '#ffffff', '#009a44', '#ffcd00'], celebration: 'Unity Dignity Work!' },
    'cm': { code: 'cm', symbol: '🦁', landscape: 'Mount Cameroon', action: 'Makossa Dance', colors: ['#007a5e', '#ce1126', '#fcd116'], celebration: 'Indomitable Lion!' },
    'cg': { code: 'cg', symbol: '🦍', landscape: 'Odzala-Kokoua Rainforest', action: 'Sapeur Stride', colors: ['#009543', '#fcd116', '#fbde4a', '#d21034'], celebration: 'Unity Work Progress!' },
    'cv': { code: 'cv', symbol: '🌊', landscape: 'Santo Antão Mountains', action: 'Morna Performance', colors: ['#003893', '#ffffff', '#ff0000'], celebration: 'Atlantic Gem!' },
    'td': { code: 'td', symbol: '🏜️', landscape: 'Ennedi Plateau', action: 'Nomadic Celebration', colors: ['#002664', '#fecb00', '#c60c30'], celebration: 'Sahara Strong!' },
    'dj': { code: 'dj', symbol: '🦈', landscape: 'Lake Assal Salt Flats', action: 'Afar Dance', colors: ['#6ab2e7', '#12ad2b', '#ffffff'], celebration: 'Land of Encounter!' },
    'km': { code: 'km', symbol: '🌙', landscape: 'Mount Karthala Volcano', action: 'Flavor Island Fest', colors: ['#ffff00', '#ffffff', '#ff0000', '#0000ff', '#3d8e33'], celebration: 'Moon & Star!' },
    'cd': { code: 'cd', symbol: '🐆', landscape: 'Congo River', action: 'Rumba Celebration', colors: ['#007fff', '#f7d618', '#ce1126'], celebration: 'Congolese Soul!' },
    'eg': { code: 'eg', symbol: '📐', landscape: 'Pyramids of Giza', action: 'Pharaonic Festivities', colors: ['#ce1126', '#ffffff', '#000000'], celebration: 'Eternal Glory!' },
    'er': { code: 'er', symbol: '🐪', landscape: 'Red Sea Coast', action: 'Tigrinya Dance', colors: ['#00a95c', '#3c8bcd', '#e4002b'], celebration: 'Red Sea Pearl!' },
    'sz': { code: 'sz', symbol: '🦁', landscape: 'Ezulwini Valley', action: 'Reed Dance', colors: ['#4169e1', '#ffd700', '#b22222'], celebration: 'Kingdom Spirit!' },
    'et': { code: 'et', symbol: '☕', landscape: 'Simien Mountains', action: 'Coffee Ceremony', colors: ['#009a44', '#fed141', '#ef3340'], celebration: 'African Soul!' },
    'ga': { code: 'ga', symbol: '🦍', landscape: 'Loango National Park', action: 'Forest Walk', colors: ['#009e60', '#fcd116', '#3a75c4'], celebration: 'Union Work Justice!' },
    'gm': { code: 'gm', symbol: '🐊', landscape: 'River Gambia', action: 'Kora Music', colors: ['#ce1126', '#003580', '#009460'], celebration: 'Smiling Coast!' },
    'gh': { code: 'gh', symbol: '🥁', landscape: 'Cape Coast Castle backdrop', action: 'Adowa Dance', colors: ['#ce1126', '#fcd116', '#006b3f'], celebration: 'Black Stars Shine!' },
    'gn': { code: 'gn', symbol: '🏔️', landscape: 'Mount Nimba', action: 'Djembe Drumming', colors: ['#ce1126', '#fcd116', '#009460'], celebration: 'Work, Justice, Solidarity!' },
    'gq': { code: 'gq', symbol: '🦍', landscape: 'Bioko Island Rainforests', action: 'Balele Dance', colors: ['#3e9a44', '#ffffff', '#e30a17', '#0072ce'], celebration: 'Africa\'s Jewel!' },
    'gw': { code: 'gw', symbol: '🏝️', landscape: 'Bijagós Archipelago', action: 'Carnival Mask Dance', colors: ['#ce1126', '#fcd116', '#009460', '#000000'], celebration: 'Unidade, Luta, Progresso!' },
    'ci': { code: 'ci', symbol: '🐘', landscape: 'Basilica of Yamoussoukro', action: 'Zaouli Dance', colors: ['#ff8200', '#ffffff', '#009a44'], celebration: 'Elephants of Africa!', backgroundImage: 'https://images.unsplash.com/photo-1543799651-78712f861502?q=80&w=1920&auto=format&fit=crop' },
    'ke': { code: 'ke', symbol: '🏃‍♂️', landscape: 'Masai Mara Savannah', action: 'Marathon Run', colors: ['#000000', '#bb0000', '#006600'], celebration: 'The Runner\'s Wind!' },
    'ls': { code: 'ls', symbol: '🏔️', landscape: 'Maloti Mountains', action: 'Basotho Blanket Wrap', colors: ['#00205b', '#ffffff', '#009543'], celebration: 'Kingdom in the Sky!' },
    'lr': { code: 'lr', symbol: '⭐', landscape: 'Sapo National Park', action: 'Rice Harvest', colors: ['#bf0a30', '#ffffff', '#002868'], celebration: 'Lone Star!' },
    'ly': { code: 'ly', symbol: '🏛️', landscape: 'Leptis Magna Ruins', action: 'Mediterranean Breeze', colors: ['#000000', '#239e46', '#e70013'], celebration: 'Sahara Gateway!' },
    'mg': { code: 'mg', symbol: '🐒', landscape: 'Avenue of the Baobabs', action: 'Lemur Leap', colors: ['#ffffff', '#fc3d32', '#007e3a'], celebration: 'Island Spirit!', backgroundImage: 'https://images.unsplash.com/photo-1550992336-6202521c7849?q=80&w=1920&auto=format&fit=crop' },
    'ma': { code: 'ma', symbol: '🏺', landscape: 'Blue City of Chefchaouen', action: 'Tea Celebration', colors: ['#c1272d', '#006233'], celebration: 'Atlas Lion!' },
    'ml': { code: 'ml', symbol: '🕌', landscape: 'Great Mosque of Djenne', action: 'Desert Blues', colors: ['#14b53a', '#fcd116', '#ce1126'], celebration: 'Mali Empire!' },
    'mr': { code: 'mr', symbol: '🏜️', landscape: 'Banc d\'Arguin', action: 'Desert Tea', colors: ['#006233', '#d01c1f', '#ffc400'], celebration: 'Sahara Spirit!' },
    'mu': { code: 'mu', symbol: '🏝️', landscape: 'Le Morne Brabant', action: 'Sega Dance', colors: ['#ea2839', '#1a206d', '#ffd500', '#00a551'], celebration: 'Paradise Island!' },
    'mw': { code: 'mw', symbol: '🐟', landscape: 'Lake Malawi', action: 'Fisherman\'s Dance', colors: ['#000000', '#ce1126', '#007a5e'], celebration: 'Warm Heart of Africa!', backgroundImage: 'https://images.unsplash.com/photo-1577908581335-a65c9540eede?q=80&w=1920&auto=format&fit=crop' },
    'mz': { code: 'mz', symbol: '🦐', landscape: 'Bazaruto Archipelago', action: 'Marrabenta Dance', colors: ['#009739', '#ffffff', '#ff0000', '#000000', '#ffff00'], celebration: 'Viva Moçambique!' },
    'na': { code: 'na', symbol: '🏜️', landscape: 'Sossusvlei Dunes', action: 'Desert Trek', colors: ['#003580', '#ce1126', '#009543', '#ffffff', '#ffce00'], celebration: 'Land of the Brave!', backgroundImage: 'https://images.unsplash.com/photo-1526493130424-df3c94297371?q=80&w=1920&auto=format&fit=crop' },
    'ne': { code: 'ne', symbol: '🦒', landscape: 'Tenere Desert', action: 'Tuareg Camel Ride', colors: ['#e05206', '#ffffff', '#0db02b'], celebration: 'Sahel Sun!' },
    'ng': { code: 'ng', symbol: '🦅', landscape: 'Zuma Rock', action: 'Nollywood Fest', colors: ['#008751', '#ffffff'], celebration: 'Super Eagles Soar!' },
    'rw': { code: 'rw', symbol: '🦍', landscape: 'Volcanoes National Park', action: 'Gorilla Trek', colors: ['#00a1de', '#fcd116', '#20603d'], celebration: 'Land of a Thousand Hills!', backgroundImage: 'https://images.unsplash.com/photo-1548685913-feaa12913e61?q=80&w=1920&auto=format&fit=crop' },
    'sn': { code: 'sn', symbol: '🦁', landscape: 'Lake Retba (Pink Lake)', action: 'Sabar Drumming', colors: ['#00853f', '#fdef42', '#e31b23'], celebration: 'Lions of Teranga!', backgroundImage: 'https://images.unsplash.com/photo-1579207032483-200903337a6b?q=80&w=1920&auto=format&fit=crop' },
    'st': { code: 'st', symbol: '🍫', landscape: 'Pico Cão Grande', action: 'Cocoa Harvest', colors: ['#12ad2b', '#ffce00', '#d21034'], celebration: 'Chocolate Island!' },
    'sc': { code: 'sc', symbol: '🐢', landscape: 'La Digue Granite Rocks', action: 'Beach Relax', colors: ['#003f87', '#fcd856', '#d6262e', '#ffffff', '#007a3d'], celebration: 'Paradise Found!' },
    'sl': { code: 'sl', symbol: '🦁', landscape: 'Freetown Peninsula', action: 'Cotton Tree Gathering', colors: ['#1eb53a', '#ffffff', '#0072c6'], celebration: 'Lion Mountain!' },
    'so': { code: 'so', symbol: '🐪', landscape: 'Laas Geel Rock Art', action: 'Poetry Recital', colors: ['#4189dd', '#ffffff'], celebration: 'Horn of Africa!' },
    'ss': { code: 'ss', symbol: '🦅', landscape: 'Sudd Wetlands', action: 'Nile Flow', colors: ['#000000', '#da121a', '#009a44', '#00205b', '#fcd116', '#ffffff'], celebration: 'Youngest Nation!' },
    'sd': { code: 'sd', symbol: '🏛️', landscape: 'Meroe Pyramids', action: 'Nile Sailing', colors: ['#d21034', '#ffffff', '#000000', '#007229'], celebration: 'Nubian Gold!' },
    'tn': { code: 'tn', symbol: '🏛️', landscape: 'Carthage Ruins & Sidi Bou Said', action: 'Desert Rose', colors: ['#e70013', '#ffffff'], celebration: 'Carthage Glory!', backgroundImage: 'https://images.unsplash.com/photo-1549141065-22e6b77207c4?q=80&w=1920&auto=format&fit=crop' },
    'tg': { code: 'tg', symbol: '🐯', landscape: 'Koutammakou Mud Houses', action: 'Traditional Dance', colors: ['#006a4e', '#fcd116', '#d21034', '#ffffff'], celebration: 'Togo Power!' },
    'ug': { code: 'ug', symbol: '🦍', landscape: 'Bwindi Impenetrable Forest', action: 'Crested Crane Dance', colors: ['#000000', '#fcd116', '#d21034'], celebration: 'Pearl of Africa!' },
    'tz': { code: 'tz', symbol: '🏔️', landscape: 'Mount Kilimanjaro', action: 'Safari Guide', colors: ['#1eb53a', '#fcd116', '#00a3dd', '#000000'], celebration: 'Uhuru Torch!', backgroundImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1920&auto=format&fit=crop' },
    'za': { code: 'za', symbol: '⛰️', landscape: 'Table Mountain', action: 'Rugby Tackle', colors: ['#e03c31', '#007749', '#001489', '#ffb81c', '#000000'], celebration: 'Rainbow Nation!', backgroundImage: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=1920&auto=format&fit=crop' },
    'zm': { code: 'zm', symbol: '🦅', landscape: 'Victoria Falls (Mosi-oa-Tunya)', action: 'Safari Adventure', colors: ['#009e49', '#ffffff', '#000000', '#ef3340', '#ef7d00'], celebration: 'One Zambia, One Nation!', backgroundImage: 'https://images.unsplash.com/photo-1627916606828-e49053229b35?q=80&w=1920&auto=format&fit=crop' },
    'zw': { code: 'zw', symbol: '🏺', landscape: 'Great Zimbabwe Ruins', action: 'Mbira Music', colors: ['#009739', '#ffd200', '#d40000', '#000000', '#ffffff'], celebration: 'Great Zimbabwe!', backgroundImage: 'https://images.unsplash.com/photo-1582299837943-7f2a1b15e216?q=80&w=1920&auto=format&fit=crop' },

    // Americas
    'ag': { code: 'ag', symbol: '🏖️', landscape: 'Half Moon Bay', action: 'Sailing Regatta', colors: ['#ce1126', '#ffffff', '#000000', '#fcd116', '#0072c6'], celebration: '365 Beaches!' },
    'ar': { code: 'ar', symbol: '🥩', landscape: 'Iguazu Falls', action: 'Tango Passion', colors: ['#74acdf', '#ffffff', '#f6b40e'], celebration: 'Eternal Tango!' },
    'bs': { code: 'bs', symbol: '🏝️', landscape: 'Exuma Cays', action: 'Junkanoo Parade', colors: ['#00778b', '#fcd116', '#000000'], celebration: 'Island Treasure!' },
    'bb': { code: 'bb', symbol: '🐟', landscape: 'Harrison\'s Cave', action: 'Cricket Match', colors: ['#00267f', '#fcd116', '#000000'], celebration: 'Bajan Pride!' },
    'bz': { code: 'bz', symbol: '🐠', landscape: 'Blue Hole', action: 'Reef Dive', colors: ['#003f87', '#ce1126', '#ffffff'], celebration: 'Jewel of the Caribbean!' },
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
    'dm': { code: 'dm', symbol: '🦜', landscape: 'Boiling Lake', action: 'Creole Festival', colors: ['#009a44', '#fcd116', '#000000', '#ffffff'], celebration: 'Nature Island!' },
    'do': { code: 'do', symbol: '⚾', landscape: 'Punta Cana Beaches', action: 'Merengue Beat', colors: ['#002d62', '#ffffff', '#ce1126'], celebration: 'Quisqueya!' },
    'ec': { code: 'ec', symbol: '🐢', landscape: 'Galapagos Islands', action: 'Equator Jump', colors: ['#ffcd00', '#003087', '#ce1126'], celebration: 'Middle of the World!' },
    'sv': { code: 'sv', symbol: '🌋', landscape: 'Santa Ana Volcano', action: 'Pupusa Feast', colors: ['#0055aa', '#ffffff'], celebration: 'Land of Volcanoes!' },
    'gd': { code: 'gd', symbol: '🧂', landscape: 'Grand Anse Beach', action: 'Spice Market', colors: ['#ce1126', '#fcd116', '#007a5e'], celebration: 'Spice Isle!' },
    'gt': { code: 'gt', symbol: '🐦', landscape: 'Tikal Mayan Ruins', action: 'Ancient Ceremony', colors: ['#4997d0', '#ffffff'], celebration: 'Mayan Spirit!' },
    'gy': { code: 'gy', symbol: '💧', landscape: 'Kaieteur Falls', action: 'Rainforest Trek', colors: ['#000000', '#ce1126', '#fcd116', '#009a44', '#ffffff'], celebration: 'Land of Many Waters!' },
    'ht': { code: 'ht', symbol: '🏰', landscape: 'Citadelle Laferrière', action: 'Rara Festival', colors: ['#00205b', '#ce1126'], celebration: 'Caribbean Pearl!' },
    'hn': { code: 'hn', symbol: '🏝️', landscape: 'Roatan Reefs', action: 'Garifuna Drumming', colors: ['#00bce4', '#ffffff'], celebration: 'Catracho Pride!' },
    'jm': { code: 'jm', symbol: '⚡', landscape: 'Blue Mountains Coast', action: 'Reggae Jam', colors: ['#000000', '#fdb913', '#009b3a'], celebration: 'One Love Victory!' },
    'mx': { code: 'mx', symbol: '🌮', landscape: 'Chichen Itza Pyramid', action: 'Mariachi Serenade', colors: ['#006341', '#ffffff', '#c8102e'], celebration: '¡Viva México!' },
    'ni': { code: 'ni', symbol: '🦈', landscape: 'Lake Nicaragua', action: 'Poetry Recital', colors: ['#0067c6', '#ffffff'], celebration: 'Land of Lakes & Volcanoes!' },
    'pa': { code: 'pa', symbol: '🚢', landscape: 'Panama Canal & Skylines', action: 'Global Bridge Walk', colors: ['#ffffff', '#005293', '#da121a'], celebration: 'Canal King!' },
    'py': { code: 'py', symbol: '🐆', landscape: 'Itaipu Dam', action: 'Harp Music', colors: ['#ce1126', '#ffffff', '#0038a8'], celebration: 'Guarani Heart!' },
    'pe': { code: 'pe', symbol: '🦙', landscape: 'Machu Picchu', action: 'Inca Celebration', colors: ['#d91023', '#ffffff'], celebration: 'Inca Legacy!' },
    'kn': { code: 'kn', symbol: '🌋', landscape: 'Brimstone Hill Fortress', action: 'Carnival Jump', colors: ['#009a44', '#ce1126', '#000000', '#fcd116', '#ffffff'], celebration: 'Sugar City!' },
    'lc': { code: 'lc', symbol: '⛰️', landscape: 'The Pitons', action: 'Jazz Festival', colors: ['#66ccff', '#fcd116', '#000000', '#ffffff'], celebration: 'Helen of the West!' },
    'vc': { code: 'vc', symbol: '🦜', landscape: 'La Soufrière', action: 'Vincy Mas', colors: ['#0072c6', '#fcd116', '#009a44'], celebration: 'Hairouna!' },
    'sr': { code: 'sr', symbol: '🌳', landscape: 'Central Suriname Nature Reserve', action: 'Kaseko Music', colors: ['#007a3d', '#ffffff', '#ce1126', '#fcd116'], celebration: 'Amazonia Spirit!' },
    'tt': { code: 'tt', symbol: '🥁', landscape: 'Maracas Beach', action: 'Steel Pan Symphony', colors: ['#ce1126', '#ffffff', '#000000'], celebration: 'Trini to de Bone!' },
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
    'am': { code: 'am', symbol: '🍇', landscape: 'Mount Ararat view', action: 'Kochari Dance', colors: ['#d90012', '#0033a0', '#f2a800'], celebration: 'Highland Spirit!' },
    'az': { code: 'az', symbol: '🔥', landscape: 'Flame Towers Baku', action: 'Yalli Dance', colors: ['#00b5e2', '#ef3340', '#509e2f'], celebration: 'Land of Fire!' },
    'bh': { code: 'bh', symbol: '🏎️', landscape: 'Bahrain Fort', action: 'Pearl Diving', colors: ['#ce1126', '#ffffff'], celebration: 'Pearl of the Gulf!' },
    'bt': { code: 'bt', symbol: '🐉', landscape: 'Tiger\'s Nest Monastery', action: 'Archery Match', colors: ['#ffcd00', '#ff4e00'], celebration: 'Thunder Dragon!' },
    'bn': { code: 'bn', symbol: '🕌', landscape: 'Kampong Ayer', action: 'Royal Regatta', colors: ['#f7e017', '#ffffff', '#000000'], celebration: 'Abode of Peace!' },
    'kh': { code: 'kh', symbol: '🛕', landscape: 'Angkor Wat', action: 'Apsara Dance', colors: ['#032ea1', '#e00025', '#ffffff'], celebration: 'Kingdom of Wonder!' },
    'bd': { code: 'bd', symbol: '🐅', landscape: 'Sundarbans Mangroves', action: 'River Boat Ride', colors: ['#006a4e', '#f42a41'], celebration: 'Bengal Tiger Roar!', backgroundImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1920&auto=format&fit=crop' },
    'cn': { code: 'cn', symbol: '🐉', landscape: 'The Great Wall', action: 'Kung Fu Move', colors: ['#ee1c25', '#ffff00'], celebration: 'Dragon\'s Roar!' },
    'cy': { code: 'cy', symbol: '🕊️', landscape: 'Petra tou Romiou', action: 'Sirtaki Circle', colors: ['#d47600', '#ffffff', '#4e5b31'], celebration: 'Island of Aphrodite!' },
    'ge': { code: 'ge', symbol: '🍷', landscape: 'Caucasus Mountains', action: 'Kartuli Dance', colors: ['#ffffff', '#ff0000'], celebration: 'Sakartvelo!' },
    'in': { code: 'in', symbol: '🕌', landscape: 'Taj Mahal', action: 'Bollywood Dance', colors: ['#ff9933', '#ffffff', '#128807'], celebration: 'Namaste Victory!' },
    'id': { code: 'id', symbol: '🌋', landscape: 'Mount Bromo & Borobudur', action: 'Wayang Puppetry', colors: ['#ff0000', '#ffffff'], celebration: 'Nusantara Star!' },
    'ir': { code: 'ir', symbol: '🦁', landscape: 'Persepolis Ruins', action: 'Persian Poetry', colors: ['#239e46', '#ffffff', '#da0000'], celebration: 'Persian Might!' },
    'iq': { code: 'iq', symbol: '🏺', landscape: 'Ancient Babylon', action: 'Mesopotamian Fest', colors: ['#ce1126', '#ffffff', '#000000', '#007a3d'], celebration: 'Cradle of Civilization!' },
    'il': { code: 'il', symbol: '🏛️', landscape: 'Old City Jerusalem & Dead Sea', action: 'Hora Dance', colors: ['#0038b8', '#ffffff'], celebration: 'Desert Bloom!' },
    'jp': { code: 'jp', symbol: '⛩️', landscape: 'Mount Fuji & Sakura Gardens', action: 'Katana Slice / Sumo Stomp', colors: ['#bc002d', '#ffffff'], celebration: 'Bushido Spirit!' },
    'jo': { code: 'jo', symbol: '🏛️', landscape: 'Petra Treasury', action: 'Bedouin Tea', colors: ['#000000', '#ffffff', '#007a3d', '#ce1126'], celebration: 'Rose City Glory!' },
    'kz': { code: 'kz', symbol: '🦅', landscape: 'Steppe & Yurts', action: 'Eagle Hunting', colors: ['#00afca', '#fec50c'], celebration: 'Great Steppe!' },
    'kg': { code: 'kg', symbol: '🏔️', landscape: 'Tian Shan Mountains', action: 'Kok-Boru Game', colors: ['#e4002b', '#ffef00'], celebration: 'Celestial Mountains!' },
    'kr': { code: 'kr', symbol: '🏢', landscape: 'Seoul Cityscape & Gyeongbokgung', action: 'K-Pop Performance', colors: ['#ffffff', '#cd2e3a', '#0047a0', '#000000'], celebration: 'K-Star Power!' },
    'kw': { code: 'kw', symbol: '🏙️', landscape: 'Kuwait Towers', action: 'Desert Hospitality', colors: ['#007a3d', '#ffffff', '#ce1126', '#000000'], celebration: 'Gulf Pride!' },
    'la': { code: 'la', symbol: '🐘', landscape: 'Luang Prabang Temples', action: 'Alms Giving', colors: ['#ce1126', '#002868', '#ffffff'], celebration: 'Land of a Million Elephants!' },
    'lb': { code: 'lb', symbol: '🌲', landscape: 'Cedars of God', action: 'Dabke Line', colors: ['#ce1126', '#ffffff', '#00a651'], celebration: 'Cedar Pride!' },
    'my': { code: 'my', symbol: '🏢', landscape: 'Petronas Towers', action: 'Silat Move', colors: ['#010066', '#ffffff', '#cc0000', '#ffff00'], celebration: 'Asian Tiger!' },
    'mv': { code: 'mv', symbol: '🏝️', landscape: 'Overwater Bungalows', action: 'Dhivehi Music', colors: ['#d21034', '#007e3a', '#ffffff'], celebration: 'Sunny Side of Life!' },
    'mn': { code: 'mn', symbol: '🐎', landscape: 'Gobi Desert', action: 'Horse Archery', colors: ['#ce1126', '#0066ff', '#fcd116'], celebration: 'Blue Sky Land!' },
    'mm': { code: 'mm', symbol: '🛕', landscape: 'Bagan Pagodas', action: 'Chinlon Game', colors: ['#fecb00', '#34b233', '#ea2839'], celebration: 'Golden Land!' },
    'np': { code: 'np', symbol: '🏔️', landscape: 'Mount Everest & Temples', action: 'Prayer Flag Planting', colors: ['#dc143c', '#003893', '#ffffff'], celebration: 'Top of the World!', backgroundImage: 'https://images.unsplash.com/photo-1540206395-688085723adb?q=80&w=1920&auto=format&fit=crop' },
    'om': { code: 'om', symbol: '🗡️', landscape: 'Mutrah Corniche', action: 'Khanjar Dance', colors: ['#ffffff', '#db161b', '#008000'], celebration: 'Jewel of Arabia!' },
    'pk': { code: 'pk', symbol: '🏏', landscape: 'K2 Mountain', action: 'Cricket Smash', colors: ['#006600', '#ffffff'], celebration: 'Shaheen Flight!' },
    'ps': { code: 'ps', symbol: '🕊️', landscape: 'Olive Groves of West Bank', action: 'Dabke Dance', colors: ['#000000', '#ffffff', '#007a3d', '#ce1126'], celebration: 'Resilience Shout!' },
    'ph': { code: 'ph', symbol: '🌴', landscape: 'Mayon Volcano', action: 'Island Fiesta', colors: ['#0038a8', '#ce1126', '#ffffff', '#fcd116'], celebration: 'Pearl of the Orient!' },
    'qa': { code: 'qa', symbol: '🏙️', landscape: 'Doha Skyline & The Pearl', action: 'Dhow Cruise', colors: ['#8d1b3d', '#ffffff'], celebration: 'Pearl of the Gulf!', backgroundImage: 'https://images.unsplash.com/photo-1589139252329-373302381282?q=80&w=1920&auto=format&fit=crop' },
    'sa': { code: 'sa', symbol: '🌴', landscape: 'AlUla Desert', action: 'Sword Dance (Ardha)', colors: ['#006c35', '#ffffff'], celebration: 'Desert Falcon!' },
    'sg': { code: 'sg', symbol: '🦁', landscape: 'Marina Bay Sands & Gardens', action: 'Merlion Toast', colors: ['#ed2939', '#ffffff'], celebration: 'Lion City Glory!' },
    'lk': { code: 'lk', symbol: '🦁', landscape: 'Sigiriya Rock', action: 'Kandyan Dance', colors: ['#ffbe29', '#8d153a', '#eb7400', '#00534e'], celebration: 'Pearl of the Indian Ocean!' },
    'sy': { code: 'sy', symbol: '🏰', landscape: 'Krak des Chevaliers', action: 'Dabke', colors: ['#ce1126', '#ffffff', '#000000', '#007a3d'], celebration: 'Levantine Spirit!' },
    'tw': { code: 'tw', symbol: '🏮', landscape: 'Taipei 101 & Mountains', action: 'Night Market Feast', colors: ['#000095', '#ffffff', '#fe0000'], celebration: 'Island Vitality!', backgroundImage: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?q=80&w=1920&auto=format&fit=crop' },
    'tj': { code: 'tj', symbol: '🏔️', landscape: 'Pamir Highway', action: 'Pamiri Dance', colors: ['#ce1126', '#ffffff', '#006600', '#fcd116'], celebration: 'Roof of the World!' },
    'th': { code: 'th', symbol: '🐘', landscape: 'Wat Arun Temple', action: 'Muay Thai Kick', colors: ['#a51931', '#ffffff', '#2d2e71'], celebration: 'Siam Strength!' },
    'tl': { code: 'tl', symbol: '🐊', landscape: 'Cristo Rei of Dili', action: 'Tebe Dance', colors: ['#ce1126', '#ffc400', '#000000', '#ffffff'], celebration: 'Timor Rising!' },
    'tr': { code: 'tr', symbol: '🎈', landscape: 'Cappadocia Balloons', action: 'Whirling Dervish', colors: ['#e30a17', '#ffffff'], celebration: 'Ottoman Echo!' },
    'tm': { code: 'tm', symbol: '🐎', landscape: 'Darvaza Gas Crater', action: 'Akhal-Teke Ride', colors: ['#009a44', '#ffffff', '#d21034'], celebration: 'Karakum Star!' },
    'uz': { code: 'uz', symbol: '🕌', landscape: 'Registan Square', action: 'Silk Road Caravan', colors: ['#0099b5', '#ffffff', '#1eb53a', '#ce1126'], celebration: 'Silk Road Jewel!' },
    'vn': { code: 'vn', symbol: '🛶', landscape: 'Ha Long Bay', action: 'Dragon Boat Race', colors: ['#da251d', '#ffff00'], celebration: 'Indochina Star!' },
    'ye': { code: 'ye', symbol: '🏙️', landscape: 'Shibam Mud Skyscrapers', action: 'Jambiya Dance', colors: ['#ce1126', '#ffffff', '#000000'], celebration: 'Happy Arabia!' },

    // Europe
    'at': { code: 'at', symbol: '🎻', landscape: 'Alps & Vienna Opera', action: 'Classical Waltz', colors: ['#ed2939', '#ffffff'], celebration: 'Alpine Sound!' },
    'be': { code: 'be', symbol: '🍫', landscape: 'Grand Place Brussels', action: 'Chocolate Feast', colors: ['#000000', '#ffff00', '#ff0000'], celebration: 'Heart of Europe!' },
    'hu': { code: 'hu', symbol: '🌉', landscape: 'Budapest Parliament', action: 'Thermal Bath Relax', colors: ['#ce2939', '#ffffff', '#477050'], celebration: 'Magyar Pride!', backgroundImage: 'https://images.unsplash.com/photo-1496436818536-e239845d339c?q=80&w=1920&auto=format&fit=crop' },
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
    'pt': { code: 'pt', symbol: '⛵', landscape: 'Belem Tower & Algarve', action: 'Fado Performance', colors: ['#006600', '#ff0000', '#ffff00'], celebration: 'Navegadores!', backgroundImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd81?q=80&w=1920&auto=format&fit=crop' },
    'rs': { code: 'rs', symbol: '🏰', landscape: 'Belgrade Fortress', action: 'Kolo Dance', colors: ['#c6363c', '#0c4076', '#ffffff'], celebration: 'Balkan Strength!', backgroundImage: 'https://images.unsplash.com/photo-1528659556826-6b22300b904d?q=80&w=1920&auto=format&fit=crop' },
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
    'fj': { code: 'fj', symbol: '🥥', landscape: 'Tropical Coral Reefs', action: 'Cibi Dance', colors: ['#62b5e5', '#ffffff', '#012169'], celebration: 'Bula Vinaka!' },
    'ki': { code: 'ki', symbol: '🌅', landscape: 'Phoenix Islands', action: 'Maneaba Meeting', colors: ['#ce1126', '#ffcd00', '#003087', '#ffffff'], celebration: 'Pacific Sunrise!' },
    'mh': { code: 'mh', symbol: '⛵', landscape: 'Bikini Atoll', action: 'Canoe Navigation', colors: ['#003893', '#dd7500', '#ffffff'], celebration: 'Navigator\'s Spirit!' },
    'fm': { code: 'fm', symbol: '🏝️', landscape: 'Chuuk Lagoon', action: 'Stick Dance', colors: ['#62b5e5', '#ffffff'], celebration: 'Island Unity!' },
    'nr': { code: 'nr', symbol: '⭐', landscape: 'Anibare Bay', action: 'Phosphate Mining', colors: ['#012169', '#ffc61e', '#ffffff'], celebration: 'Small Island Big Heart!' },
    'nz': { code: 'nz', symbol: '🥝', landscape: 'Milford Sound', action: 'Haka Performance', colors: ['#012169', '#ffffff', '#c8102e', '#000000'], celebration: 'All Blacks Spirit!' },
    'pw': { code: 'pw', symbol: '🪼', landscape: 'Jellyfish Lake', action: 'Traditional Chants', colors: ['#0099ff', '#ffcd00'], celebration: 'Pritistine Paradise!' },
    'pg': { code: 'pg', symbol: '🦜', landscape: 'Highlands & Sepik River', action: 'Sing-Sing Festival', colors: ['#ce1126', '#000000', '#fcd116', '#ffffff'], celebration: 'Bird of Paradise!' },
    'ws': { code: 'ws', symbol: '🥥', landscape: 'Samoan Fales & Lagoons', action: 'Siva Tau Dance', colors: ['#ce1126', '#ffffff', '#002664'], celebration: 'Samoan Warrior!' },
    'sb': { code: 'sb', symbol: '🐢', landscape: 'Marovo Lagoon', action: 'Panpipe Music', colors: ['#0051ba', '#fcd116', '#215b33', '#ffffff'], celebration: 'Isles of Solomon!' },
    'to': { code: 'to', symbol: '🐋', landscape: 'Ha\'apai Islands', action: 'Lakalaka Dance', colors: ['#c10015', '#ffffff'], celebration: 'Friendly Islands!' },
    'tv': { code: 'tv', symbol: '🌊', landscape: 'Funafuti Atoll', action: 'Fateiple Song', colors: ['#5b97b1', '#ffffff', '#ce1126', '#fcd116'], celebration: 'Rising Tides!' },
    'vu': { code: 'vu', symbol: '🌋', landscape: 'Mount Yasur Volcano', action: 'Land Diving (Naghol)', colors: ['#d21034', '#009543', '#000000', '#fcd116'], celebration: 'Pacific Fire!' },
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
