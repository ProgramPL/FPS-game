//Create the game
let game = {
    map: {
        size: 10,
        walls: [],
        objectives: []
    },
    teams: {
        team1: {
            players: [],
            score: 0,
            objectives: []
        },
        team2: {
            players: [],
            score: 0,
            objectives: []
        }
    },
    players: [],
    weapons: [],
    items: [],
    effects: [],
    round: {
        number: 0,
        state: 'idle',
        startTime: 0
    },
    gameModes: [
        {
            name: 'standard',
            type: 'team-deathmatch',
            winCondition: 'first-team-to-x-kills'
        },
        {
            name: 'spike-rush',
            type: 'objective',
            winCondition: 'plant-the-spike'
        },
        {
            name: 'horde',
            type: 'survival',
            winCondition: 'survive-all-waves'
        }
    ],
    maps: [
        {
            name: 'Icebox',
            type: 'snow',
            size: 10
        },
        {
            name: 'Bind',
            type: 'desert',
            size: 10
        },
        {
            name: 'Split',
            type: 'urban',
            size: 10
        }
    ]
};

//Function to create a new player
function createPlayer(name, team, position) {
    let player = {
        name: name,
        team: team,
        position: position,
        stats: {
            kills: 0,
            deaths: 0
        },
        weapons: [],
        items: [],
        effects: []
    };
    game.players.push(player);
    game.teams[team].players.push(player);
}

//Function to start a new game
function startGame(mode, map) {
    if (game.gameModes.includes(mode) && game.maps.includes(map)) {
        game.round.state = 'in-progress';
        game.round.startTime = Date.now();
    }
}

//Function to end a game
function endGame() {
    game.round.state = 'idle';
    game.round.number++;
}
