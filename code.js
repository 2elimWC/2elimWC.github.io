const pot1 = [
    { code: 'USA', elo: 1726, flagCode: 'us', GD: 0 },
    { code: 'MEX', elo: 1875, flagCode: 'mx', GD: 0 },
    { code: 'CAN', elo: 1788, flagCode: 'ca', GD: 0 },
    { code: 'ESP', elo: 2157, flagCode: 'es', GD: 0 },
    { code: 'ARG', elo: 2115, flagCode: 'ar', GD: 0 },
    { code: 'FRA', elo: 2063, flagCode: 'fr', GD: 0 },
    { code: 'ENG', elo: 2024, flagCode: 'gb-eng', GD: 0 },
    { code: 'BRA', elo: 1991, flagCode: 'br', GD: 0 },
    { code: 'POR', elo: 1989, flagCode: 'pt', GD: 0 },
    { code: 'NED', elo: 1948, flagCode: 'nl', GD: 0 },
    { code: 'BEL', elo: 1894, flagCode: 'be', GD: 0 },
    { code: 'GER', elo: 1932, flagCode: 'de', GD: 0 }
];
const pot2 = [
    { code: 'CRO', elo: 1912, flagCode: 'hr', GD: 0 },
    { code: 'MAR', elo: 1827, flagCode: 'ma', GD: 0 },
    { code: 'COL', elo: 1982, flagCode: 'co', GD: 0 },
    { code: 'URU', elo: 1892, flagCode: 'uy', GD: 0 },
    { code: 'SUI', elo: 1891, flagCode: 'ch', GD: 0 },
    { code: 'JPN', elo: 1906, flagCode: 'jp', GD: 0 },
    { code: 'SEN', elo: 1860, flagCode: 'sn', GD: 0 },
    { code: 'IRN', elo: 1772, flagCode: 'ir', GD: 0 },
    { code: 'KOR', elo: 1758, flagCode: 'kr', GD: 0 },
    { code: 'ECU', elo: 1938, flagCode: 'ec', GD: 0 },
    { code: 'AUT', elo: 1830, flagCode: 'at', GD: 0 },
    { code: 'AUS', elo: 1777, flagCode: 'au', GD: 0 }
];
const pot3 = [
    { code: 'NOR', elo: 1914, flagCode: 'no', GD: 0 },
    { code: 'PAN', elo: 1730, flagCode: 'pa', GD: 0 },
    { code: 'EGY', elo: 1696, flagCode: 'eg', GD: 0 },
    { code: 'ALG', elo: 1772, flagCode: 'dz', GD: 0 },
    { code: 'SCO', elo: 1782, flagCode: 'gb-sct', GD: 0 },
    { code: 'PAR', elo: 1834, flagCode: 'py', GD: 0 },
    { code: 'TUN', elo: 1628, flagCode: 'tn', GD: 0 },
    { code: 'CIV', elo: 1695, flagCode: 'ci', GD: 0 },
    { code: 'UZB', elo: 1714, flagCode: 'uz', GD: 0 },
    { code: 'QAT', elo: 1421, flagCode: 'qa', GD: 0 },
    { code: 'KSA', elo: 1576, flagCode: 'sa', GD: 0 },
    { code: 'RSA', elo: 1517, flagCode: 'za', GD: 0 },
];
const pot4 = [
    { code: 'JOR', elo: 1680, flagCode: 'jo', GD: 0 },
    { code: 'CPV', elo: 1578, flagCode: 'cv', GD: 0 },
    { code: 'GHA', elo: 1510, flagCode: 'gh', GD: 0 },
    { code: 'CUW', elo: 1434, flagCode: 'cw', GD: 0 },
    { code: 'HAI', elo: 1548, flagCode: 'ht', GD: 0 },
    { code: 'NZL', elo: 1562, flagCode: 'nz', GD: 0 },
    { code: 'BIH', elo: 1595, flagCode: 'ba', GD: 0 },
    { code: 'SWE', elo: 1712, flagCode: 'se', GD: 0 },
    { code: 'TUR', elo: 1911, flagCode: 'tr', GD: 0 },
    { code: 'CZE', elo: 1740, flagCode: 'cz', GD: 0 },
    { code: 'COD', elo: 1652, flagCode: 'cd', GD: 0 },
    { code: 'IRQ', elo: 1607, flagCode: 'iq', GD: 0 },
];
var teamlist = pot1.concat(pot2, pot3, pot4);
var newTeamlist = teamlist.slice();

var pot1custom = [];
var pot2custom = [];
var pot3custom = [];
var pot4custom = [];

const mainBracketConfig = {
    id: 'main-bracket',
    rounds: [
        { name: 'Round 1', teams: 48 },
        { name: 'Round 2', teams: 24 },
        { name: 'Round 3', teams: 12 },
        { name: 'Round 4', teams: 8 },
        { name: 'Round 5', teams: 4 },
        { name: 'Round 6', teams: 0 },
        { name: 'Round 7', teams: 0 },
        { name: 'Semi-Final', teams: 4 },
        { name: 'Final', teams: 2 }
    ]
};

const repechageBracketConfig = {
    id: 'repechage-bracket',
    rounds: [
        { name: 'Round 1', teams: 0 },
        { name: 'Round 2', teams: 24 },
        { name: 'Round 3', teams: 24 },
        { name: 'Round 4', teams: 16 },
        { name: 'Round 5', teams: 12 },
        { name: 'Round 6', teams: 8 },
        { name: 'Round 7', teams: 4 },
        { name: 'Semi-Final', teams: 0 },
        { name: 'Third Place Match', teams: 2 }
    ]
};

const GAME_SCHEDULE = {
    'main-bracket': {
        0: [
            { date: 'Jun 11', venue: 'Mexico City' },
            { date: 'Jun 11', venue: 'Zapopan' },
            { date: 'Jun 11', venue: 'Toronto' },
            { date: 'Jun 12', venue: 'Santa Clara' },
            { date: 'Jun 12', venue: 'East Rutherford' },
            { date: 'Jun 12', venue: 'Foxborough' },
            { date: 'Jun 11', venue: 'Inglewood' },
            { date: 'Jun 12', venue: 'Vancouver' },
            { date: 'Jun 13', venue: 'Houston' },
            { date: 'Jun 13', venue: 'Philadelphia' },
            { date: 'Jun 13', venue: 'Arlington' },
            { date: 'Jun 13', venue: 'Guadalupe' },
            { date: 'Jun 14', venue: 'Seattle' },
            { date: 'Jun 14', venue: 'Inglewood' },
            { date: 'Jun 14', venue: 'Atlanta' },
            { date: 'Jun 14', venue: 'Miami Gardens' },
            { date: 'Jun 15', venue: 'East Rutherford' },
            { date: 'Jun 15', venue: 'Foxborough' },
            { date: 'Jun 15', venue: 'Kansas City' },
            { date: 'Jun 15', venue: 'Santa Clara' },
            { date: 'Jun 16', venue: 'Houston' },
            { date: 'Jun 16', venue: 'Mexico City' },
            { date: 'Jun 16', venue: 'Arlington' },
            { date: 'Jun 16', venue: 'Toronto' }
        ],
        1: [
            { date: 'Jun 17', venue: 'Zapopan' },
            { date: 'Jun 17', venue: 'Vancouver' },
            { date: 'Jun 18', venue: 'Foxborough' },
            { date: 'Jun 18', venue: 'Seattle' },
            { date: 'Jun 19', venue: 'Toronto' },
            { date: 'Jun 19', venue: 'Houston' },
            { date: 'Jun 20', venue: 'Inglewood' },
            { date: 'Jun 20', venue: 'Atlanta' },
            { date: 'Jun 21', venue: 'Philadelphia' },
            { date: 'Jun 21', venue: 'Arlington' },
            { date: 'Jun 22', venue: 'Houston' },
            { date: 'Jun 22', venue: 'Foxborough' }
        ],
        2: [
            { date: 'Jun 23', venue: 'Inglewood' },
            { date: 'Jun 23', venue: 'Atlanta' },
            { date: 'Jun 24', venue: 'Philadelphia' },
            { date: 'Jun 25', venue: 'Zapopan' },
            { date: 'Jun 26', venue: 'Arlington' },
            { date: 'Jun 26', venue: 'East Rutherford' }
        ],
        3: [
            { date: 'Jun 29', venue: 'Mexico City' },
            { date: 'Jun 30', venue: 'East Rutherford' },
            { date: 'Jun 30', venue: 'Houston' },
            { date: 'Jul 1', venue: 'Miami Gardens' }
        ],
        4: [
            { date: 'Jul 4', venue: 'Foxborough' },
            { date: 'Jul 5', venue: 'Atlanta' }
        ],
        7: [
            { date: 'Jul 14', venue: 'Arlington' },
            { date: 'Jul 15', venue: 'Atlanta' }
        ],
        8: [
            { date: 'Jul 19', venue: 'East Rutherford' }
        ]
    },
    'repechage-bracket': {
        1: [
            { date: 'Jun 17', venue: 'Atlanta' },
            { date: 'Jun 17', venue: 'Inglewood' },
            { date: 'Jun 18', venue: 'Philadelphia' },
            { date: 'Jun 18', venue: 'Santa Clara' },
            { date: 'Jun 19', venue: 'Kansas City' },
            { date: 'Jun 19', venue: 'Guadalupe' },
            { date: 'Jun 20', venue: 'Vancouver' },
            { date: 'Jun 20', venue: 'Miami Gardens' },
            { date: 'Jun 21', venue: 'East Rutherford' },
            { date: 'Jun 21', venue: 'Santa Clara' },
            { date: 'Jun 22', venue: 'Zapopan' },
            { date: 'Jun 22', venue: 'Toronto' }
        ],
        2: [
            { date: 'Jun 23', venue: 'Mexico City' },
            { date: 'Jun 23', venue: 'Seattle' },
            { date: 'Jun 24', venue: 'Miami Gardens' },
            { date: 'Jun 24', venue: 'Santa Clara' },
            { date: 'Jun 24', venue: 'Guadalupe' },
            { date: 'Jun 25', venue: 'Kansas City' },
            { date: 'Jun 25', venue: 'Vancouver' },
            { date: 'Jun 25', venue: 'Houston' },
            { date: 'Jun 26', venue: 'Foxborough' },
            { date: 'Jun 26', venue: 'Inglewood' },
            { date: 'Jun 26', venue: 'Atlanta' },
            { date: 'Jun 26', venue: 'Philadelphia' }
        ],
        3: [
            { date: 'Jun 29', venue: 'Santa Clara' },
            { date: 'Jun 29', venue: 'Zapopan' },
            { date: 'Jun 29', venue: 'Atlanta' },
            { date: 'Jun 30', venue: 'Vancouver' },
            { date: 'Jun 30', venue: 'Arlington' },
            { date: 'Jul 1', venue: 'Kansas City' },
            { date: 'Jul 1', venue: 'Inglewood' },
            { date: 'Jul 1', venue: 'Toronto' }
        ],
        4: [
            { date: 'Jul 3', venue: 'Seattle' },
            { date: 'Jul 3', venue: 'Mexico City' },
            { date: 'Jul 4', venue: 'Vancouver' },
            { date: 'Jul 4', venue: 'Kansas City' },
            { date: 'Jul 4', venue: 'Arlington' },
            { date: 'Jul 5', venue: 'East Rutherford' }
        ],
        5: [
            { date: 'Jul 6', venue: 'Santa Clara' },
            { date: 'Jul 7', venue: 'Foxborough' },
            { date: 'Jul 7', venue: 'Houston' },
            { date: 'Jul 8', venue: 'Miami Gardens' }
        ],
        6: [
            { date: 'Jul 10', venue: 'Inglewood' },
            { date: 'Jul 11', venue: 'Kansas City' },
        ],
        8: [
            { date: 'Jul 18', venue: 'Miami Gardens' }
        ]
    }
};

const GAME_SCHEDULE_DEFAULT = {
    'main-bracket': {
        0: [
            { date: 'Day 1', venue: 'TBD' },
            { date: 'Day 1', venue: 'TBD' },
            { date: 'Day 1', venue: 'TBD' },
            { date: 'Day 2', venue: 'TBD' },
            { date: 'Day 2', venue: 'TBD' },
            { date: 'Day 2', venue: 'TBD' },
            { date: 'Day 1', venue: 'TBD' },
            { date: 'Day 2', venue: 'TBD' },
            { date: 'Day 3', venue: 'TBD' },
            { date: 'Day 3', venue: 'TBD' },
            { date: 'Day 3', venue: 'TBD' },
            { date: 'Day 3', venue: 'TBD' },
            { date: 'Day 4', venue: 'TBD' },
            { date: 'Day 4', venue: 'TBD' },
            { date: 'Day 4', venue: 'TBD' },
            { date: 'Day 4', venue: 'TBD' },
            { date: 'Day 5', venue: 'TBD' },
            { date: 'Day 5', venue: 'TBD' },
            { date: 'Day 5', venue: 'TBD' },
            { date: 'Day 5', venue: 'TBD' },
            { date: 'Day 6', venue: 'TBD' },
            { date: 'Day 6', venue: 'TBD' },
            { date: 'Day 6', venue: 'TBD' },
            { date: 'Day 6', venue: 'TBD' }
        ],
        1: [
            { date: 'Day 7', venue: 'TBD' },
            { date: 'Day 7', venue: 'TBD' },
            { date: 'Day 8', venue: 'TBD' },
            { date: 'Day 8', venue: 'TBD' },
            { date: 'Day 9', venue: 'TBD' },
            { date: 'Day 9', venue: 'TBD' },
            { date: 'Day 10', venue: 'TBD' },
            { date: 'Day 10', venue: 'TBD' },
            { date: 'Day 11', venue: 'TBD' },
            { date: 'Day 11', venue: 'TBD' },
            { date: 'Day 12', venue: 'TBD' },
            { date: 'Day 12', venue: 'TBD' }
        ],
        2: [
            { date: 'Day 13', venue: 'TBD' },
            { date: 'Day 13', venue: 'TBD' },
            { date: 'Day 14', venue: 'TBD' },
            { date: 'Day 15', venue: 'TBD' },
            { date: 'Day 16', venue: 'TBD' },
            { date: 'Day 16', venue: 'TBD' }
        ],
        3: [
            { date: 'Day 19', venue: 'TBD' },
            { date: 'Day 20', venue: 'TBD' },
            { date: 'Day 20', venue: 'TBD' },
            { date: 'Day 21', venue: 'TBD' }
        ],
        4: [
            { date: 'Day 24', venue: 'TBD' },
            { date: 'Day 25', venue: 'TBD' }
        ],
        7: [
            { date: 'Day 34', venue: 'TBD' },
            { date: 'Day 35', venue: 'TBD' }
        ],
        8: [
            { date: 'Day 39', venue: 'TBD' }
        ]
    },
    'repechage-bracket': {
        1: [
            { date: 'Day 7', venue: 'TBD' },
            { date: 'Day 7', venue: 'TBD' },
            { date: 'Day 8', venue: 'TBD' },
            { date: 'Day 8', venue: 'TBD' },
            { date: 'Day 9', venue: 'TBD' },
            { date: 'Day 9', venue: 'TBD' },
            { date: 'Day 10', venue: 'TBD' },
            { date: 'Day 10', venue: 'TBD' },
            { date: 'Day 11', venue: 'TBD' },
            { date: 'Day 11', venue: 'TBD' },
            { date: 'Day 12', venue: 'TBD' },
            { date: 'Day 12', venue: 'TBD' }
        ],
        2: [
            { date: 'Day 13', venue: 'TBD' },
            { date: 'Day 13', venue: 'TBD' },
            { date: 'Day 14', venue: 'TBD' },
            { date: 'Day 14', venue: 'TBD' },
            { date: 'Day 14', venue: 'TBD' },
            { date: 'Day 15', venue: 'TBD' },
            { date: 'Day 15', venue: 'TBD' },
            { date: 'Day 15', venue: 'TBD' },
            { date: 'Day 16', venue: 'TBD' },
            { date: 'Day 16', venue: 'TBD' },
            { date: 'Day 16', venue: 'TBD' },
            { date: 'Day 16', venue: 'TBD' }
        ],
        3: [
            { date: 'Day 19', venue: 'TBD' },
            { date: 'Day 19', venue: 'TBD' },
            { date: 'Day 19', venue: 'TBD' },
            { date: 'Day 20', venue: 'TBD' },
            { date: 'Day 20', venue: 'TBD' },
            { date: 'Day 21', venue: 'TBD' },
            { date: 'Day 21', venue: 'TBD' },
            { date: 'Day 21', venue: 'TBD' }
        ],
        4: [
            { date: 'Day 23', venue: 'TBD' },
            { date: 'Day 23', venue: 'TBD' },
            { date: 'Day 24', venue: 'TBD' },
            { date: 'Day 24', venue: 'TBD' },
            { date: 'Day 24', venue: 'TBD' },
            { date: 'Day 25', venue: 'TBD' }
        ],
        5: [
            { date: 'Day 26', venue: 'TBD' },
            { date: 'Day 27', venue: 'TBD' },
            { date: 'Day 27', venue: 'TBD' },
            { date: 'Day 28', venue: 'TBD' }
        ],
        6: [
            { date: 'Day 30', venue: 'TBD' },
            { date: 'Day 31', venue: 'TBD' },
        ],
        8: [
            { date: 'Day 38', venue: 'TBD' }
        ]
    }
};

// Generates the raw HTML structure for a match
function createMatchHTML() {
    return `
        <div class="match">
            <div class="team">
                <div class="flag"></div>
                <div class="code">---</div>
                <div class="score">-</div>
            </div>
            <div class="team">
                <div class="flag"></div>
                <div class="code">---</div>
                <div class="score">-</div>
            </div>
            <div class="match-meta">
                <span class="date">[Date]</span> &bull; <span class="venue">[Venue]</span>
            </div>
        </div>
    `;
}

function drawMatch(matchElement, team1, team2) {
    const teams = matchElement.querySelectorAll('.team');
    
    // Set Team 1 data
    teams[0].querySelector('.code').innerText = team1.code || '---';
    teams[0].querySelector('.flag').style.backgroundImage = `url('https://flagcdn.com/w40/${team1.flagCode}.png')`;
    teams[0].querySelector('.flag').style.backgroundSize = 'cover';

    // Set Team 2 data
    teams[1].querySelector('.code').innerText = team2.code || '---';
    teams[1].querySelector('.flag').style.backgroundImage = `url('https://flagcdn.com/w40/${team2.flagCode}.png')`;
    teams[1].querySelector('.flag').style.backgroundSize = 'cover';

    // Clear previous highlights
    teams[0].classList.remove('winner');
    teams[1].classList.remove('winner');
    teams[0].classList.remove('advanced');
    teams[1].classList.remove('advanced');
    teams[0].classList.remove('demoted');
    teams[1].classList.remove('demoted');
    teams[0].classList.remove('eliminated');
    teams[1].classList.remove('eliminated');
    teams[0].classList.remove('promoted');
    teams[1].classList.remove('promoted');
}

function updateMatchData(matchElement, score1, score2) {
    const teams = matchElement.querySelectorAll('.team');

    teams[0].querySelector('.score').innerText = score1 !== undefined ? score1 : '-';
    teams[1].querySelector('.score').innerText = score2 !== undefined ? score2 : '-';

    if (score1 !== undefined && score2 !== undefined) {
        const s1 = parseFloat(score1);
        const s2 = parseFloat(score2);

        var team0code = teams[0].querySelector('.code').innerText;
        teamlist.find(team => team.code === team0code).GD += s1;
        teamlist.find(team => team.code === team0code).GD -= s2;
        var team1code = teams[1].querySelector('.code').innerText;
        teamlist.find(team => team.code === team1code).GD += s2;
        teamlist.find(team => team.code === team1code).GD -= s1;

        if (s1 > s2 || (s1==s2 && Math.random()<0.5)) {
            teams[0].classList.add('advanced');
            if (matchElement.getAttribute('data-bracket') === 'main-bracket') {
                if (round < 8) teams[1].classList.add('demoted');
                else teams[1].classList.add('eliminated');
            }
            else {
                teams[1].classList.add('eliminated');
                newTeamlist.splice(newTeamlist.indexOf(newTeamlist.find(team => team.code === teams[1].querySelector('.code').innerText)), 1);
            }
        } else {
            teams[1].classList.add('advanced');
            if (matchElement.getAttribute('data-bracket') === 'main-bracket') {
                if (round < 8) teams[0].classList.add('demoted');
                else teams[0].classList.add('eliminated');
            }
            else {
                teams[0].classList.add('eliminated');
                newTeamlist.splice(newTeamlist.indexOf(newTeamlist.find(team => team.code === teams[0].querySelector('.code').innerText)), 1);
            }
        }
    }
}

function injectMatchMeta() {
    const allMatches = document.querySelectorAll('.match');

    allMatches.forEach(matchEl => {
        const bracketId = matchEl.getAttribute('data-bracket');
        const roundIdx = parseInt(matchEl.getAttribute('data-round')) || 0;
        const matchIdx = parseInt(matchEl.getAttribute('data-match')) || 0;

        let metaText = '';

        if (document.getElementById('mode-2026').classList.contains('active')) {
            const info = GAME_SCHEDULE[bracketId][roundIdx][matchIdx];
            metaText = `${info.date} | ${info.venue}`;
        } else {
            const info = GAME_SCHEDULE_DEFAULT[bracketId][roundIdx][matchIdx];
            metaText = `${info.date} | ${info.venue}`;
        }

        // Find existing meta element or create one
        let metaEl = matchEl.querySelector('.match-meta');
        if (!metaEl) {
            metaEl = document.createElement('div');
            metaEl.className = 'match-meta';
            matchEl.appendChild(metaEl);
        }

        metaEl.innerText = metaText;
    });
}

function renderBracket(config) {
    const container = document.getElementById(config.id);
    container.innerHTML = ''; 

    // Use the second argument 'roundIndex' of forEach
    config.rounds.forEach((round, roundIndex) => {
        const matchCount = round.teams / 2;
        
        const roundDiv = document.createElement('div');
        roundDiv.className = 'round';
        
        const header = document.createElement('div');
        header.className = 'round-header';
        header.innerText = round.name;
        roundDiv.appendChild(header);

        const matchesContainer = document.createElement('div');
        matchesContainer.className = 'matches-container';

        for (let matchIndex = 0; matchIndex < matchCount; matchIndex++) {
            const temp = document.createElement('div');
            temp.innerHTML = createMatchHTML();
            const matchEl = temp.firstElementChild;
            
            // --- ADD THESE DATA ATTRIBUTES ---
            matchEl.setAttribute('data-bracket', config.id); // e.g., 'main-bracket'
            matchEl.setAttribute('data-round', roundIndex);   // e.g., 0, 1, 2...
            matchEl.setAttribute('data-match', matchIndex);   // e.g., 0, 1, 2...
            
            matchesContainer.appendChild(matchEl);
        }

        roundDiv.appendChild(matchesContainer);
        container.appendChild(roundDiv);
    });
}

function getMatchElement(bracketId, roundIndex, matchIndex) {
    // Looks for an element like: .match[data-bracket="main-bracket"][data-round="2"][data-match="4"]
    const selector = `.match[data-bracket="${bracketId}"][data-round="${roundIndex}"][data-match="${matchIndex}"]`;
    return document.querySelector(selector);
}

// --- DYNAMICALLY GENERATED CONNECTING LINES ---
function drawDynamicConnections() {
    const svg = document.getElementById('connections-svg');
    const scroller = document.getElementById('bracket-scroller');
    if (!svg || !scroller) return;

    svg.innerHTML = ''; // Clear existing lines

    // Expand SVG canvas to cover full scrollable area
    const fullWidth = Math.max(scroller.scrollWidth, scroller.clientWidth);
    const fullHeight = Math.max(scroller.scrollHeight, scroller.clientHeight);
    svg.setAttribute('width', fullWidth);
    svg.setAttribute('height', fullHeight);

    const scrollerRect = scroller.getBoundingClientRect();
    const allMatches = document.querySelectorAll('.match');

    allMatches.forEach(fromMatch => {
        const bracketId = fromMatch.getAttribute('data-bracket');
        const roundIdx = parseInt(fromMatch.getAttribute('data-round'));

        // --- 1. ADVANCING / PROMOTED TEAMS ---
        const advancingTeam = fromMatch.querySelector('.team.advanced, .team.promoted');
        if (advancingTeam) {
            const teamCode = advancingTeam.querySelector('.code')?.innerText;
            if (teamCode && teamCode !== '---') {
                let targetTeamEl = null;
                let targetMatchEl = null;

                // Search for team in future rounds
                for (let r = roundIdx + 1; r <= 8; r++) {
                    const candidateMatches = document.querySelectorAll(`.match[data-round="${r}"]`);
                    candidateMatches.forEach(candidate => {
                        const teams = candidate.querySelectorAll('.team');
                        teams.forEach(team => {
                            if (team.querySelector('.code')?.innerText === teamCode) {
                                targetTeamEl = team;
                                targetMatchEl = candidate;
                            }
                        });
                    });
                    if (targetMatchEl) break;
                }

                if (targetTeamEl && targetMatchEl) {
                    const targetBracketId = targetMatchEl.getAttribute('data-bracket');

                    const rFromTeam = advancingTeam.getBoundingClientRect();
                    const rToSlot = targetTeamEl.getBoundingClientRect();

                    const x1 = (rFromTeam.right - scrollerRect.left) + scroller.scrollLeft;
                    const y1 = (rFromTeam.top + rFromTeam.height / 2 - scrollerRect.top) + scroller.scrollTop;

                    const x2 = (rToSlot.left - scrollerRect.left) + scroller.scrollLeft;
                    const y2 = (rToSlot.top + rToSlot.height / 2 - scrollerRect.top) + scroller.scrollTop;

                    const isCrossBracket = bracketId !== targetBracketId;

                    if (isCrossBracket) {
                        const r = 10;
                        const lead = 5;

                        // Origin stub: Exits right and curves UPWARD fast
                        const path1Data = `M ${x1} ${y1} h ${lead} a ${r} ${r} 0 0 0 ${r} -${r}`;
                        
                        // Target stub: Comes from below and curves RIGHT into center of slot
                        const path2Data = `M ${x2 - (lead + r)} ${y2 + r} a ${r} ${r} 0 0 1 ${r} -${r} h ${lead}`;

                        svg.appendChild(createSvgPath(path1Data, '#0066ff'));
                        svg.appendChild(createSvgPath(path2Data, '#0066ff'));
                    } else {
                        // Standard cubic bezier curve within same bracket
                        const dx = Math.max((x2 - x1) / 2, 10);
                        const pathData = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
                        svg.appendChild(createSvgPath(pathData, '#2e7d32'));
                    }
                }
            }
        }

        // --- 2. DEMOTED TEAMS (MAIN & REPECHAGE BRACKETS) ---
        const demotedTeams = fromMatch.querySelectorAll('.team.demoted');
        demotedTeams.forEach(demotedTeam => {
            const teamCode = demotedTeam.querySelector('.code')?.innerText;
            if (!teamCode || teamCode === '---') return;

            const rDemoted = demotedTeam.getBoundingClientRect();

            // Origin coordinates (Center-right edge of demoted team slot)
            const x1 = (rDemoted.right - scrollerRect.left) + scroller.scrollLeft;
            const y1 = (rDemoted.top + rDemoted.height / 2 - scrollerRect.top) + scroller.scrollTop;

            const r = 10;
            const lead = 5;

            // Outgoing demotion stub: Exits right and curves DOWNWARD
            const outgoingDemotionPath = `M ${x1} ${y1} h ${lead} a ${r} ${r} 0 0 1 ${r} ${r}`;
            svg.appendChild(createSvgPath(outgoingDemotionPath, '#ff7b00'));

            // Search for where this demoted team lands in repechage
            let targetTeamEl = null;
            let targetMatchEl = null;

            for (let rIdx = roundIdx; rIdx <= 8; rIdx++) {
                const candidateMatches = document.querySelectorAll(`.match[data-round="${rIdx}"]`);
                candidateMatches.forEach(candidate => {
                    if (candidate === fromMatch) return; // Ignore origin match
                    const teams = candidate.querySelectorAll('.team');
                    teams.forEach(team => {
                        if (team.querySelector('.code')?.innerText === teamCode) {
                            targetTeamEl = team;
                            targetMatchEl = candidate;
                        }
                    });
                });
                if (targetMatchEl) break;
            }

            // Draw incoming demotion stub if destination slot exists
            if (targetTeamEl && targetMatchEl) {
                const rToSlot = targetTeamEl.getBoundingClientRect();
                const x2 = (rToSlot.left - scrollerRect.left) + scroller.scrollLeft;
                const y2 = (rToSlot.top + rToSlot.height / 2 - scrollerRect.top) + scroller.scrollTop;

                // Incoming demotion stub: Comes from ABOVE and curves RIGHT into team center
                const incomingDemotionPath = `M ${x2 - (lead + r)} ${y2 - r} a ${r} ${r} 0 0 0 ${r} ${r} h ${lead}`;
                svg.appendChild(createSvgPath(incomingDemotionPath, '#ff7b00'));
            }
        });
    });
}

// Helper to construct SVG paths
function createSvgPath(d, strokeColor) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', d);
    path.setAttribute('stroke', strokeColor);
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-dasharray', '4 2');
    return path;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function poisson(lambda) {
    const L = Math.exp(-lambda);
    let k = 0;
    let p = 1;

    do {
        k++;
        p *= Math.random();
    } while (p > L);

    return k - 1;
}

var round = 0;

function initGUI() {
    if (document.getElementById('mode-2026').classList.contains('active')) {
        teamlist = pot1.concat(pot2, pot3, pot4);
        newTeamlist = teamlist.slice();
    } else {
        teamlist = pot1custom.concat(pot2custom, pot3custom, pot4custom);
        newTeamlist = teamlist.slice();
    }
    renderBracket(mainBracketConfig);
    renderBracket(repechageBracketConfig);
    injectMatchMeta(); //add match info
    document.getElementById("btn-draw").disabled = false
    document.getElementById("btn-next").disabled = true
    document.getElementById("btn-simulate").disabled = true
    document.getElementById("btn-reset").disabled = true
    round = 0;
    
    // Clear lines on reset
    const svg = document.getElementById('connections-svg');
    if (svg) svg.innerHTML = '';
}

function nextRound() {
    //disable new draw
    document.getElementById("btn-draw").disabled = true

    // decide game results for both brackets
    for (let i=0; i<mainBracketConfig.rounds[round].teams/2; i++) {
        var match = getMatchElement('main-bracket', round, i);
        var teams = match.querySelectorAll('.team');
        var team1code = teams[0].querySelector('.code').innerText;
        var team1elo = teamlist.find(team => team.code === team1code).elo;
        var team2code = teams[1].querySelector('.code').innerText;
        var team2elo = teamlist.find(team => team.code === team2code).elo;

        var t1GoalsMean = poisson(1.3 * Math.exp((team1elo-team2elo)/400));
        var t2GoalsMean = poisson(1.3 * Math.exp((team2elo-team1elo)/400));
        // to avoid unrealistic landslides, any score difference above 4 is trimmed off
        var tooManyGoals = Math.abs(t1GoalsMean - t2GoalsMean) - 4;
        if (tooManyGoals > 0) {
            if (t1GoalsMean>t2GoalsMean) {
                t1GoalsMean = t2GoalsMean + 4;
                while (Math.random()>0.5 && tooManyGoals > 0) {
                    //console.log(team1code, t1GoalsMean, team2code, t2GoalsMean);
                    t1GoalsMean ++;
                    tooManyGoals --;
                }
            }
            else {
                t2GoalsMean = t1GoalsMean + 4;
                while (Math.random()>0.5 && tooManyGoals > 0) {
                    //console.log(team1code, t1GoalsMean, team2code, t2GoalsMean);
                    t2GoalsMean ++;
                    tooManyGoals --;
                }
            }
        }
        updateMatchData(match, t1GoalsMean, t2GoalsMean);
    }
    for (let i=0; i<repechageBracketConfig.rounds[round].teams/2; i++) {
        var match = getMatchElement('repechage-bracket', round, i);
        var teams = match.querySelectorAll('.team');
        var team1code = teams[0].querySelector('.code').innerText;
        var team1elo = teamlist.find(team => team.code === team1code).elo;
        var team2code = teams[1].querySelector('.code').innerText;
        var team2elo = teamlist.find(team => team.code === team2code).elo;

        var t1GoalsMean = 1.3 * Math.exp((team1elo-team2elo)/400);
        var t2GoalsMean = 1.3 * Math.exp((team2elo-team1elo)/400);
        updateMatchData(match, poisson(t1GoalsMean), poisson(t2GoalsMean));
    }

    //draw next round's matches
    if (round==0) { //48 teams in main
        for (let i=0; i<mainBracketConfig.rounds[round].teams/2; i+=2) {
            var match1 = getMatchElement('main-bracket', round, i);
            var match2 = getMatchElement('main-bracket', round, i+1);
            var winner1 = (match1.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner1data = { 
                code: winner1,
                flagCode: teamlist.find(team => team.code === winner1).flagCode
            };
            var winner2 = (match2.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner2data = { 
                code: winner2,
                flagCode: teamlist.find(team => team.code === winner2).flagCode
            };
            var loser1 = (match1.querySelector('.team.demoted')).querySelector('.code').innerText;
            var loser1data = { 
                code: loser1,
                flagCode: teamlist.find(team => team.code === loser1).flagCode
            };
            var loser2 = (match2.querySelector('.team.demoted')).querySelector('.code').innerText;
            var loser2data = { 
                code: loser2,
                flagCode: teamlist.find(team => team.code === loser2).flagCode
            };
            var nextMainMatch = getMatchElement('main-bracket', round+1, i/2);
            drawMatch(nextMainMatch, winner1data, winner2data);
            var nextRepechageMatch = getMatchElement('repechage-bracket', round+1, i/2);
            drawMatch(nextRepechageMatch, loser1data, loser2data);
        }
    } else if (round==1) { //24 teams in main, 24 teams in repechage
        for (let i=0; i<mainBracketConfig.rounds[round].teams/2; i+=2) {
            var match1 = getMatchElement('main-bracket', round, i);
            var match2 = getMatchElement('main-bracket', round, i+1);
            var match3 = getMatchElement('repechage-bracket', round, i);
            var match4 = getMatchElement('repechage-bracket', round, i+1);
            var winner1 = (match1.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner1data = { 
                code: winner1,
                flagCode: teamlist.find(team => team.code === winner1).flagCode
            };
            var winner2 = (match2.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner2data = { 
                code: winner2,
                flagCode: teamlist.find(team => team.code === winner2).flagCode
            };
            var winner3 = (match3.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner3data = { 
                code: winner3,
                flagCode: teamlist.find(team => team.code === winner3).flagCode
            };
            var winner4 = (match4.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner4data = { 
                code: winner4,
                flagCode: teamlist.find(team => team.code === winner4).flagCode
            };
            var loser1 = (match1.querySelector('.team.demoted')).querySelector('.code').innerText;
            var loser1data = { 
                code: loser1,
                flagCode: teamlist.find(team => team.code === loser1).flagCode
            };
            var loser2 = (match2.querySelector('.team.demoted')).querySelector('.code').innerText;
            var loser2data = { 
                code: loser2,
                flagCode: teamlist.find(team => team.code === loser2).flagCode
            };
            var nextMainMatch = getMatchElement('main-bracket', round+1, i/2);
            drawMatch(nextMainMatch, winner1data, winner2data);
            //criss-cross between the 'pseudo-groups' of 4 to prevent Round 1 rematches in Round 3
            var nextRepechageMatch1 = getMatchElement('repechage-bracket', round+1, i);
            drawMatch(nextRepechageMatch1, loser2data, winner3data);
            var nextRepechageMatch2 = getMatchElement('repechage-bracket', round+1, i+1);
            drawMatch(nextRepechageMatch2, loser1data, winner4data);
        }
    } else if (round==2) { //12 teams in main, 24 teams in repechage
        //find the two best teams with a loss
        var teamsByGD = teamlist.slice();
        teamsByGD.sort(function(a,b){return b.GD-a.GD});
        var promotedArr = [];
        while (promotedArr.length<2) {
            var promotedTeam = teamsByGD.shift();
            var promoteOrNot = false;
            for (let j=0; j<6; j++) {
                if ((getMatchElement('repechage-bracket', 2, j).querySelector('.team.advanced')).querySelector('.code').innerText === promotedTeam.code)
                    promoteOrNot = true;
            }
            if (promoteOrNot == true)
                promotedArr.push(promotedTeam);
        }

        var mainMatches = [];
        var mainWinnerData =[];
        var mainLoserData = [];
        for (let j=0; j<6; j++) {
            var match = getMatchElement('main-bracket', round, j);
            mainMatches.push(match);
            var winner = match.querySelector('.team.advanced').querySelector('.code').innerText;
            mainWinnerData.push(
                { code: winner, flagCode: teamlist.find(team => team.code === winner).flagCode }
            );
            var loser = match.querySelector('.team.demoted').querySelector('.code').innerText;
            mainLoserData.push(
                { code: loser, flagCode: teamlist.find(team => team.code === loser).flagCode }
            );
        }
        mainWinnerData.splice(3, 0, promotedArr[0]);
        mainWinnerData.splice(7, 0, promotedArr[1]);
        for (let j=0; j<4; j++) {
            var nextMainMatch = getMatchElement('main-bracket', round+1, j);
            drawMatch(nextMainMatch, mainWinnerData[2*j], mainWinnerData[2*j+1]);
        }

        var repechageMatches = [];
        var repechageWinnerData = [];
        for (let j=0; j<12; j++) {
            var match = getMatchElement('repechage-bracket', round, j);
            repechageMatches.push(match);
            var winner = match.querySelector('.team.advanced').querySelector('.code').innerText;
            if (!promotedArr.find(team => team.code === winner))
                repechageWinnerData.push(
                    { code: winner, flagCode: teamlist.find(team => team.code === winner).flagCode }
                );
        }
        repechageWinnerData.splice(2, 0, mainLoserData[0]);
        repechageWinnerData.splice(4, 0, mainLoserData[1]);
        repechageWinnerData.splice(6, 0, mainLoserData[2]);
        repechageWinnerData.splice(10, 0, mainLoserData[3]);
        repechageWinnerData.splice(12, 0, mainLoserData[4]);
        repechageWinnerData.splice(14, 0, mainLoserData[5]);
        for (let j=0; j<8; j++) {
            var nextRepechageMatch = getMatchElement('repechage-bracket', round+1, j);
            drawMatch(nextRepechageMatch, repechageWinnerData[2*j], repechageWinnerData[2*j+1]);
        }
        
        //show promotion for Round 4
        for (let i=0; i<2; i++) {
            for (let j=0; j<6; j++) {
                for (let k=0; k<2; k++) {
                    var match = getMatchElement('main-bracket', 2, j);
                    if ((match.querySelectorAll('.team'))[k].querySelector('.code').innerText === promotedArr[i].code) {
                        var teamPromoted = match.querySelectorAll('.team')[k];
                        teamPromoted.classList.remove('advanced');
                        teamPromoted.classList.remove('demoted');
                        teamPromoted.classList.remove('eliminated');
                        teamPromoted.classList.add('promoted');
                    }
                    match = getMatchElement('repechage-bracket', 2, 2*j);
                    if ((match.querySelectorAll('.team'))[k].querySelector('.code').innerText === promotedArr[i].code) {
                        var teamPromoted = match.querySelectorAll('.team')[k];
                        teamPromoted.classList.remove('advanced');
                        teamPromoted.classList.remove('demoted');
                        teamPromoted.classList.remove('eliminated');
                        teamPromoted.classList.add('promoted');
                    }
                    match = getMatchElement('repechage-bracket', 2, 2*j+1);
                    if ((match.querySelectorAll('.team'))[k].querySelector('.code').innerText === promotedArr[i].code) {
                        var teamPromoted = match.querySelectorAll('.team')[k];
                        teamPromoted.classList.remove('advanced');
                        teamPromoted.classList.remove('demoted');
                        teamPromoted.classList.remove('eliminated');
                        teamPromoted.classList.add('promoted');
                    }
                }
            }
        }
    } else if (round==3) {
        var repechageWinnerData = [];
        var mainLoserData = [];
        for (let i=0; i<mainBracketConfig.rounds[round].teams/2; i+=2) {
            var match1 = getMatchElement('main-bracket', round, i);
            var match2 = getMatchElement('main-bracket', round, i+1);
            var winner1 = (match1.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner1data = { 
                code: winner1,
                flagCode: teamlist.find(team => team.code === winner1).flagCode
            };
            var winner2 = (match2.querySelector('.team.advanced')).querySelector('.code').innerText;
            var winner2data = { 
                code: winner2,
                flagCode: teamlist.find(team => team.code === winner2).flagCode
            };
            var loser1 = (match1.querySelector('.team.demoted')).querySelector('.code').innerText;
            var loser1data = { 
                code: loser1,
                flagCode: teamlist.find(team => team.code === loser1).flagCode
            };
            var loser2 = (match2.querySelector('.team.demoted')).querySelector('.code').innerText;
            var loser2data = { 
                code: loser2,
                flagCode: teamlist.find(team => team.code === loser2).flagCode
            };
            var nextMainMatch = getMatchElement('main-bracket', round+1, i/2);
            drawMatch(nextMainMatch, winner1data, winner2data);
            mainLoserData.push(loser1data, loser2data);
        }

        for (let i=0; i<8; i++) {
            var match = getMatchElement('repechage-bracket', round, i);
            var winner = (match.querySelector('.team.advanced')).querySelector('.code').innerText;
            repechageWinnerData.push(
                { code: winner, flagCode: teamlist.find(team => team.code === winner).flagCode }
            );
        }
        repechageWinnerData.splice(0, 0, mainLoserData[0]);
        repechageWinnerData.splice(2, 0, mainLoserData[1]);
        repechageWinnerData.splice(6, 0, mainLoserData[2]);
        repechageWinnerData.splice(8, 0, mainLoserData[3]);
        for (let j=0; j<6; j++) {
            var nextRepechageMatch = getMatchElement('repechage-bracket', round+1, j);
            drawMatch(nextRepechageMatch, repechageWinnerData[2*j], repechageWinnerData[2*j+1]);
        }

    } else if (round==4) {
        var quarterfinal1 = getMatchElement('main-bracket', round, 0);
        var quarterfinalLoser1 = (quarterfinal1.querySelector('.team.demoted')).querySelector('.code').innerText;
        var quarterfinal2 = getMatchElement('main-bracket', round, 1);
        var quarterfinalLoser2 = (quarterfinal2.querySelector('.team.demoted')).querySelector('.code').innerText;

        var repechageWinnerData = [];
        for (let i=0; i<repechageBracketConfig.rounds[round].teams/2; i++) {
            var match = getMatchElement('repechage-bracket', round, i);
            var winner = (match.querySelector('.team.advanced')).querySelector('.code').innerText;
            repechageWinnerData.push(
                { code: winner, flagCode: teamlist.find(team => team.code === winner).flagCode }
            );
        }
        repechageWinnerData.splice(2, 0, { code: quarterfinalLoser1, flagCode: teamlist.find(team => team.code === quarterfinalLoser1).flagCode });
        repechageWinnerData.splice(6, 0, { code: quarterfinalLoser2, flagCode: teamlist.find(team => team.code === quarterfinalLoser2).flagCode });
        for (let i=0; i<4; i++) {
            var nextRepechageMatch = getMatchElement('repechage-bracket', round+1, i);
            drawMatch(nextRepechageMatch, repechageWinnerData[2*i], repechageWinnerData[2*i+1]);
        }
    } else if (round==5) {
        var repechageWinnerData =[];
        for (let i=0; i<4; i++) {
            var match = getMatchElement('repechage-bracket', round, i);
            var winner = (match.querySelector('.team.advanced')).querySelector('.code').innerText;
            repechageWinnerData.push(
                { code: winner, flagCode: teamlist.find(team => team.code === winner).flagCode }
            );
        }
        var nextRepechageMatch = getMatchElement('repechage-bracket', round+1, 0);
        drawMatch(nextRepechageMatch, repechageWinnerData[0], repechageWinnerData[1]);
        nextRepechageMatch = getMatchElement('repechage-bracket', round+1, 1);
        drawMatch(nextRepechageMatch, repechageWinnerData[2], repechageWinnerData[3]);
    } else if (round==6) {
        var quarterfinal1 = getMatchElement('main-bracket', round-2, 0);
        var quarterfinalWinner1 = (quarterfinal1.querySelector('.team.advanced')).querySelector('.code').innerText;
        var quarterfinal2 = getMatchElement('main-bracket', round-2, 1);
        var quarterfinalWinner2 = (quarterfinal2.querySelector('.team.advanced')).querySelector('.code').innerText;
        
        var repechageGame1 = getMatchElement('repechage-bracket', round, 0);
        var repechageWinner1 = (repechageGame1.querySelector('.team.advanced')).querySelector('.code').innerText;
        var repechageGame2 = getMatchElement('repechage-bracket', round, 1);
        var repechageWinner2 = (repechageGame2.querySelector('.team.advanced')).querySelector('.code').innerText;

        var semifinal1 = getMatchElement('main-bracket', round+1, 0);
        drawMatch(semifinal1,
            { code: quarterfinalWinner1, flagCode: teamlist.find(team => team.code === quarterfinalWinner1).flagCode },
            { code: repechageWinner2, flagCode: teamlist.find(team => team.code === repechageWinner2).flagCode });
        var semifinal2 = getMatchElement('main-bracket', round+1, 1);
        drawMatch(semifinal2,
            { code: quarterfinalWinner2, flagCode: teamlist.find(team => team.code === quarterfinalWinner2).flagCode },
            { code: repechageWinner1, flagCode: teamlist.find(team => team.code === repechageWinner1).flagCode });
        
        var teamPromoted = repechageGame1.querySelector('.team.advanced');
        teamPromoted.classList.remove('advanced');
        teamPromoted.classList.remove('demoted');
        teamPromoted.classList.remove('eliminated');
        teamPromoted.classList.add('promoted');
        teamPromoted = repechageGame2.querySelector('.team.advanced');
        teamPromoted.classList.remove('advanced');
        teamPromoted.classList.remove('demoted');
        teamPromoted.classList.remove('eliminated');
        teamPromoted.classList.add('promoted');
    } else if (round==7) {
        var semifinal1 = getMatchElement('main-bracket', round, 0);
        var semifinalWinner1 = (semifinal1.querySelector('.team.advanced')).querySelector('.code').innerText;
        var semifinalLoser1 = (semifinal1.querySelector('.team.demoted')).querySelector('.code').innerText;
        var semifinal2 = getMatchElement('main-bracket', round, 1);
        var semifinalWinner2 = (semifinal2.querySelector('.team.advanced')).querySelector('.code').innerText;
        var semifinalLoser2 = (semifinal2.querySelector('.team.demoted')).querySelector('.code').innerText;

        var final = getMatchElement('main-bracket', round+1, 0);
        drawMatch(final,
            { code: semifinalWinner1, flagCode: teamlist.find(team => team.code === semifinalWinner1).flagCode },
            { code: semifinalWinner2, flagCode: teamlist.find(team => team.code === semifinalWinner2).flagCode });
        var thirdPlace = getMatchElement('repechage-bracket', round+1, 0);
        drawMatch(thirdPlace,
            { code: semifinalLoser1, flagCode: teamlist.find(team => team.code === semifinalLoser1).flagCode },
            { code: semifinalLoser2, flagCode: teamlist.find(team => team.code === semifinalLoser2).flagCode });
    }

    teamlist = newTeamlist.slice();
    round += 1;

    // Draw lines dynamically for all advancing teams up to this point
    setTimeout(() => {
        drawDynamicConnections();
    }, 50);
}

// --- Event Listeners ---
document.getElementById('btn-draw').addEventListener('click', () => {
    console.log('Draw triggered');

    if (document.getElementById('mode-2026').classList.contains('active')) {
        var pot1fixed = pot1.slice();
        pot1fixed.splice(0,3); //remove USA, MEX, CAN
        shuffleArray(pot1fixed);
        pot1fixed.splice(0,0, pot1[1], pot1[2]); //re-add MEX, CAN
        pot1fixed.splice(3,0, pot1[0]); //re-add USA
        shuffleArray(pot2);
        shuffleArray(pot3);
        shuffleArray(pot4);
        for (let i=0; i<12; i++) {
            var matchDrawn1v4 = getMatchElement('main-bracket', 0, 2*i);
            drawMatch(matchDrawn1v4, { code: pot1fixed[i].code, flagCode: pot1fixed[i].flagCode }, { code: pot4[i].code, flagCode: pot4[i].flagCode });
            var matchDrawn2v3 = getMatchElement('main-bracket', 0, 2*i+1);
            drawMatch(matchDrawn2v3, { code: pot2[i].code, flagCode: pot2[i].flagCode }, { code: pot3[i].code, flagCode: pot3[i].flagCode });
        }
    } else {
        shuffleArray(pot1custom);
        shuffleArray(pot2custom);
        shuffleArray(pot3custom);
        shuffleArray(pot4custom);
        for (let i=0; i<12; i++) {
            var matchDrawn1v4 = getMatchElement('main-bracket', 0, 2*i);
            drawMatch(matchDrawn1v4, { code: pot1custom[i].code, flagCode: pot1custom[i].flagCode }, { code: pot4custom[i].code, flagCode: pot4custom[i].flagCode });
            var matchDrawn2v3 = getMatchElement('main-bracket', 0, 2*i+1);
            drawMatch(matchDrawn2v3, { code: pot2custom[i].code, flagCode: pot2custom[i].flagCode }, { code: pot3custom[i].code, flagCode: pot3custom[i].flagCode });
        }
    }

    document.getElementById("btn-next").disabled = false
    document.getElementById("btn-simulate").disabled = false
    document.getElementById("btn-reset").disabled = false
});

document.getElementById('btn-next').addEventListener('click', () => {
    console.log('Next Round triggered');
    nextRound();
});

document.getElementById('btn-simulate').addEventListener('click', () => {
    console.log('Simulate All triggered');
    for (let i=round; i<9; i++)
        nextRound();
});

document.getElementById('btn-reset').addEventListener('click', () => {
    console.log('Reset triggered');
    initGUI();
});

window.addEventListener('resize', () => {
    drawDynamicConnections();
});

// --- CONFEDERATION DEFINITIONS & QUOTAS ---
const CONFEDERATIONS = {
    UEFA: { name: 'UEFA', min: 15, max: 18 },
    CONMEBOL: { name: 'CONMEBOL', min: 6, max: 7 },
    CONCACAF: { name: 'CONCACAF', min: 5, max: 7 },
    CAF: { name: 'CAF', min: 9, max: 10 },
    AFC: { name: 'AFC', min: 8, max: 9 },
    OFC: { name: 'OFC', min: 1, max: 2 }
};

// Map team code to confederation
const TEAM_CONFEDERATIONS = {
    USA: 'CONCACAF', MEX: 'CONCACAF', CAN: 'CONCACAF', PAN: 'CONCACAF', CUW: 'CONCACAF', HAI: 'CONCACAF',
    CRC: 'CONCACAF', HON: 'CONCACAF', JAM: 'CONCACAF', GUA: 'CONCACAF',
    ESP: 'UEFA', FRA: 'UEFA', ENG: 'UEFA', POR: 'UEFA', NED: 'UEFA', BEL: 'UEFA', GER: 'UEFA', CRO: 'UEFA',
    SUI: 'UEFA', AUT: 'UEFA', NOR: 'UEFA', SCO: 'UEFA', SWE: 'UEFA', TUR: 'UEFA', DEN: 'UEFA', ITA: 'UEFA',
    UKR: 'UEFA', RUS: 'UEFA', GRE: 'UEFA', SRB: 'UEFA', KVX: 'UEFA', HUN: 'UEFA', POL: 'UEFA', IRL: 'UEFA',
    ARG: 'CONMEBOL', BRA: 'CONMEBOL', COL: 'CONMEBOL', URU: 'CONMEBOL', ECU: 'CONMEBOL', PAR: 'CONMEBOL',
    VEN: 'CONMEBOL', CHI: 'CONMEBOL', PER: 'CONMEBOL', BOL: 'CONMEBOL',
    MAR: 'CAF', SEN: 'CAF', EGY: 'CAF', ALG: 'CAF', TUN: 'CAF', CIV: 'CAF', RSA: 'CAF', CPV: 'CAF', GHA: 'CAF', COD: 'CAF',
    NGA: 'CAF', CMR: 'CAF', MLI: 'CAF', ANG: 'CAF',
    JPN: 'AFC', IRN: 'AFC', KOR: 'AFC', AUS: 'AFC', UZB: 'AFC', QAT: 'AFC', KSA: 'AFC', JOR: 'AFC', IRQ: 'AFC',
    UAE: 'AFC', SYR: 'AFC', OMA: 'AFC', PLE: 'AFC',
    NZL: 'OFC', NCL: 'OFC', TAH: 'OFC'
};

let selectedCustomTeams = [];

const countryPool = [
    { code: 'ESP', elo: 2259, ranking: 1, flagCode: 'es', GD: 0 },
    { code: 'ENG', elo: 2125, ranking: 4, flagCode: 'gb-eng', GD: 0 },
    { code: 'FRA', elo: 2070, ranking: 3, flagCode: 'fr', GD: 0 },
    { code: 'POR', elo: 1995, ranking: 7, flagCode: 'pt', GD: 0 },
    { code: 'NED', elo: 1970, ranking: 9, flagCode: 'nl', GD: 0 },
    { code: 'NOR', elo: 1952, ranking: 19, flagCode: 'no', GD: 0 },
    { code: 'BEL', elo: 1947, ranking: 8, flagCode: 'be', GD: 0 },
    { code: 'SUI', elo: 1928, ranking: 14, flagCode: 'ch', GD: 0 },
    { code: 'GER', elo: 1907, ranking: 12, flagCode: 'de', GD: 0 },
    { code: 'CRO', elo: 1881, ranking: 13, flagCode: 'hr', GD: 0 },
    { code: 'DEN', elo: 1869, ranking: 21, flagCode: 'dk', GD: 0 },
    { code: 'ITA', elo: 1869, ranking: 15, flagCode: 'it', GD: 0 },
    { code: 'TUR', elo: 1852, ranking: 27, flagCode: 'tr', GD: 0 },
    { code: 'AUT', elo: 1821, ranking: 23, flagCode: 'at', GD: 0 },
    { code: 'UKR', elo: 1780, ranking: 33, flagCode: 'ua', GD: 0 },
    { code: 'RUS', elo: 1772, ranking: 35, flagCode: 'ru', GD: 0 },
    
    { code: 'ARG', elo: 2173, ranking: 2, flagCode: 'ar', GD: 0 },
    { code: 'COL', elo: 2003, ranking: 11, flagCode: 'co', GD: 0 },
    { code: 'BRA', elo: 1993, ranking: 5, flagCode: 'br', GD: 0 },
    { code: 'ECU', elo: 1871, ranking: 25, flagCode: 'ec', GD: 0 },
    { code: 'URU', elo: 1841, ranking: 20, flagCode: 'uy', GD: 0 },
    { code: 'PAR', elo: 1814, ranking: 34, flagCode: 'py', GD: 0 },

    { code: 'MEX', elo: 1913, ranking: 10, flagCode: 'mx', GD: 0 },
    { code: 'USA', elo: 1746, ranking: 16, flagCode: 'us', GD: 0 },
    { code: 'CAN', elo: 1729, ranking: 30, flagCode: 'ca', GD: 0 },
    { code: 'PAN', elo: 1658, ranking: 44, flagCode: 'pa', GD: 0 },
    { code: 'CRC', elo: 1609, ranking: 51, flagCode: 'cr', GD: 0 },
    { code: 'HON', elo: 1570, ranking: 66, flagCode: 'hn', GD: 0 },

    { code: 'MAR', elo: 1901, ranking: 6, flagCode: 'ma', GD: 0 },
    { code: 'SEN', elo: 1816, ranking: 18, flagCode: 'sn', GD: 0 },
    { code: 'NGA', elo: 1767, ranking: 26, flagCode: 'ng', GD: 0 },
    { code: 'ALG', elo: 1756, ranking: 29, flagCode: 'dz', GD: 0 },
    { code: 'EGY', elo: 1742, ranking: 24, flagCode: 'eg', GD: 0 },
    { code: 'CIV', elo: 1728, ranking: 31, flagCode: 'ci', GD: 0 },
    { code: 'COD', elo: 1704, ranking: 41, flagCode: 'cd', GD: 0 },
    { code: 'CPV', elo: 1619, ranking: 64, flagCode: 'cv', GD: 0 },
    { code: 'CMR', elo: 1614, ranking: 43, flagCode: 'cm', GD: 0 },
    { code: 'MLI', elo: 1588, ranking: 53, flagCode: 'ml', GD: 0 },

    { code: 'JPN', elo: 1888, ranking: 17, flagCode: 'jp', GD: 0 },
    { code: 'AUS', elo: 1794, ranking: 28, flagCode: 'au', GD: 0 },
    { code: 'IRN', elo: 1764, ranking: 22, flagCode: 'ir', GD: 0 },
    { code: 'KOR', elo: 1723, ranking: 32, flagCode: 'kr', GD: 0 },
    { code: 'UZB', elo: 1631, ranking: 60, flagCode: 'uz', GD: 0 },
    { code: 'JOR', elo: 1628, ranking: 73, flagCode: 'jo', GD: 0 },
    { code: 'KSA', elo: 1596, ranking: 58, flagCode: 'sa', GD: 0 },
    { code: 'IRQ', elo: 1561, ranking: 63, flagCode: 'iq', GD: 0 },
    { code: 'UAE', elo: 1540, ranking: 68, flagCode: 'ae', GD: 0 },
    
    { code: 'NZL', elo: 1562, ranking: 86, flagCode: 'nz', GD: 0 },
    
    //not selected by default
    { code: 'SCO', elo: 1745, ranking: 42, flagCode: 'gb-sct', GD: 0 },
    { code: 'GRE', elo: 1744, ranking: 46, flagCode: 'gr', GD: 0 },
    { code: 'SRB', elo: 1734, ranking: 40, flagCode: 'rs', GD: 0 },
    { code: 'SWE', elo: 1731, ranking: 37, flagCode: 'se', GD: 0 },
    { code: 'KVX', elo: 1714, ranking: 78, flagCode: 'xk', GD: 0 },
    { code: 'HUN', elo: 1710, ranking: 39, flagCode: 'hu', GD: 0 },
    { code: 'POL', elo: 1710, ranking: 36, flagCode: 'pl', GD: 0 },
    { code: 'IRL', elo: 1699, ranking: 55, flagCode: 'ie', GD: 0 },
    
    { code: 'VEN', elo: 1733, ranking: 47, flagCode: 've', GD: 0 },
    { code: 'CHI', elo: 1717, ranking: 49, flagCode: 'cl', GD: 0 },
    { code: 'PER', elo: 1700, ranking: 50, flagCode: 'pe', GD: 0 },
    { code: 'BOL', elo: 1621, ranking: 77, flagCode: 'bo', GD: 0 },
    
    { code: 'JAM', elo: 1527, ranking: 71, flagCode: 'jm', GD: 0 },
    { code: 'HAI', elo: 1517, ranking: 88, flagCode: 'ht', GD: 0 },
    { code: 'GUA', elo: 1504, ranking: 97, flagCode: 'gt', GD: 0 },
    { code: 'CUW', elo: 1438, ranking: 82, flagCode: 'cw', GD: 0 },
    
    { code: 'GHA', elo: 1571, ranking: 65, flagCode: 'gh', GD: 0 },
    { code: 'TUN', elo: 1562, ranking: 57, flagCode: 'tn', GD: 0 },
    { code: 'RSA', elo: 1560, ranking: 54, flagCode: 'za', GD: 0 },
    { code: 'ANG', elo: 1543, ranking: 87, flagCode: 'ao', GD: 0 },
    
    { code: 'SYR', elo: 1479, ranking: 83, flagCode: 'sy', GD: 0 },
    { code: 'OMA', elo: 1479, ranking: 79, flagCode: 'om', GD: 0 },
    { code: 'PLE', elo: 1465, ranking: 95, flagCode: 'ps', GD: 0 },
    
    { code: 'NCL', elo: 1287, ranking: 151, flagCode: 'nc', GD: 0 },
    { code: 'TAH', elo: 1177, ranking: 157, flagCode: 'pf', GD: 0 },
];

// Get counts per confederation for selected teams
function getConfedCounts() {
    const counts = { UEFA: 0, CONMEBOL: 0, CONCACAF: 0, CAF: 0, AFC: 0, OFC: 0 };
    selectedCustomTeams.forEach(code => {
        const confed = TEAM_CONFEDERATIONS[code] || 'UEFA';
        counts[confed] = (counts[confed] || 0) + 1;
    });
    return counts;
}

// Build and open modal window
function openCustomModal() {
    const grid = document.getElementById('modal-country-grid');
    grid.innerHTML = '';
    selectedCustomTeams = countryPool.slice();
    selectedCustomTeams.splice(48,25);
    selectedCustomTeams = selectedCustomTeams.map(t => t.code);

    // Group teams by Confederation
    Object.keys(CONFEDERATIONS).forEach(confedKey => {
        const confedTeams = countryPool.filter(t => TEAM_CONFEDERATIONS[t.code] === confedKey);
        if (confedTeams.length === 0) return;

        // Group Header
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'confed-header';
        sectionHeader.setAttribute('data-confed', confedKey);
        grid.appendChild(sectionHeader);

        // Group Container
        const groupContainer = document.createElement('div');
        groupContainer.className = 'confed-group';

        confedTeams.forEach(team => {
            const chip = document.createElement('div');
            chip.className = `country-chip ${selectedCustomTeams.includes(team.code) ? 'selected' : ''}`;
            chip.setAttribute('data-code', team.code);
            chip.innerHTML = `
                <span class="flag" style="background-image: url('https://flagcdn.com/w40/${team.flagCode}.png'); background-size: cover;"></span>
                <span>${team.code}</span>
            `;

            // Freely toggle selection without blocking
            chip.addEventListener('click', () => {
                if (selectedCustomTeams.includes(team.code)) {
                    selectedCustomTeams = selectedCustomTeams.filter(c => c !== team.code);
                    chip.classList.remove('selected');
                } else {
                    selectedCustomTeams.push(team.code);
                    chip.classList.add('selected');
                }
                updateModalStatus();
            });

            groupContainer.appendChild(chip);
        });

        grid.appendChild(groupContainer);
    });

    updateModalStatus();
    document.getElementById('custom-modal').classList.add('open');
}

// Update counters, labels, and apply button state
function updateModalStatus() {
    const counts = getConfedCounts();
    const totalSelected = selectedCustomTeams.length;

    // Update Confederation section titles with quotas
    Object.keys(CONFEDERATIONS).forEach(confedKey => {
        const confedHeader = document.querySelector(`.confed-header[data-confed="${confedKey}"]`);
        if (confedHeader) {
            const conf = CONFEDERATIONS[confedKey];
            const current = counts[confedKey] || 0;
            const isValid = current >= conf.min && current <= conf.max;
            confedHeader.innerHTML = `
                <span>${conf.name}</span>
                <span class="confed-badge ${isValid ? 'valid' : 'invalid'}">${current} / [${conf.min}-${conf.max}]</span>
            `;
        }
    });

    // Update total counter
    const counterEl = document.getElementById('selected-count');
    if (counterEl) {
        counterEl.innerText = `${totalSelected} / 48`;
        counterEl.style.color = totalSelected === 48 ? '#16a34a' : '#dc2626';
    }

    // Enable Apply button ONLY if total is exactly 48
    const applyBtn = document.getElementById('btn-modal-apply');
    if (applyBtn) {
        applyBtn.disabled = totalSelected !== 48;
    }
}

function closeCustomModal() {
    document.getElementById('custom-modal').classList.remove('open');
}

// Event Listeners
document.getElementById('mode-2026').addEventListener('click', () => {
    document.getElementById('mode-2026').classList.add('active');
    document.getElementById('mode-custom').classList.remove('active');

    initGUI();
});

document.getElementById('mode-custom').addEventListener('click', () => {
    openCustomModal();
});

document.getElementById('btn-modal-cancel').addEventListener('click', () => {
    closeCustomModal();
});

document.getElementById('btn-modal-apply').addEventListener('click', () => {
    if (selectedCustomTeams.length !== 48) return;

    document.getElementById('mode-custom').classList.add('active');
    document.getElementById('mode-2026').classList.remove('active');

    var customTeamsObj = countryPool.filter(t => selectedCustomTeams.includes(t.code));
    customTeamsObj.sort(function(a,b){return a.ranking-b.ranking});

    const chunkSize = Math.ceil(customTeamsObj.length / 4);
    pot1custom.length = 0; pot1custom.push(...customTeamsObj.slice(0, chunkSize));
    pot2custom.length = 0; pot2custom.push(...customTeamsObj.slice(chunkSize, chunkSize * 2));
    pot3custom.length = 0; pot3custom.push(...customTeamsObj.slice(chunkSize * 2, chunkSize * 3));
    pot4custom.length = 0; pot4custom.push(...customTeamsObj.slice(chunkSize * 3));

    closeCustomModal();
    initGUI();
});

// Run on load
initGUI();