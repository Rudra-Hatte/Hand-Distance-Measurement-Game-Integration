let username = '';
let players = [];
let measurements = [];

function login() {
    const input = document.getElementById('username');
    username = input.value.trim();
    if (!username) {
        alert("Please enter a username.");
        return;
    }
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    document.getElementById('display-username').textContent = username;
    addPlayer(username);
    updatePlayerList();
}

// Simulate starting a game or measurement
function startGame() {
    document.getElementById('measurement-placeholder').textContent =
        "Measure your hand distance and press 'Send Measurement'.";
}

// Simulate measurement and sending to server
function sendMeasurement() {
    // In real use, replace with actual measurement logic
    const randomDistance = (Math.random() * 40 + 10).toFixed(2); // e.g., 10-50 cm
    const measurement = {
        user: username,
        value: randomDistance,
        time: new Date().toLocaleTimeString()
    };
    measurements.push(measurement);
    updateMeasurementsList();
    document.getElementById('measurement-placeholder').textContent =
        `Last measured: ${randomDistance} cm`;
}

function addPlayer(name) {
    if (!players.includes(name)) {
        players.push(name);
    }
}

function updatePlayerList() {
    const list = document.getElementById('player-list');
    list.innerHTML = '';
    players.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p;
        list.appendChild(li);
    });
}

function updateMeasurementsList() {
    const list = document.getElementById('measurements-list');
    list.innerHTML = '';
    measurements.forEach(m => {
        const li = document.createElement('li');
        li.textContent = `${m.user}: ${m.value} cm (${m.time})`;
        list.appendChild(li);
    });
}

function logout() {
    username = '';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('username').value = '';
}

// For demo: pre-populate with some users (remove in production)
players = ['Alice', 'Bob'];
updatePlayerList();