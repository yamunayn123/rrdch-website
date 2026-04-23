// Student Login
function studentLogin() {
    let user = document.getElementById("studentUser").value;
    let pass = document.getElementById("studentPass").value;

    if(user === "student" && pass === "1234") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

        loadEvents();
        loadComplaints();
    } else {
        document.getElementById("loginMsg").innerText = "❌ Invalid Login";
    }
}


// Load Events
function loadEvents() {
    let list = document.getElementById("eventList");
    let data = JSON.parse(localStorage.getItem("events")) || [];

    list.innerHTML = "";

    data.forEach(e => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${e.date} - ${e.text}</p>`;
        list.appendChild(div);
    });
}


// Load Complaints
function loadComplaints() {
    let list = document.getElementById("complaintList");
    let data = JSON.parse(localStorage.getItem("complaints")) || [];

    list.innerHTML = "";

    data.forEach(c => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${c.name} (Room ${c.room}): ${c.issue}</p>`;
        list.appendChild(div);
    });
}
// Add Achievement
function addAchievement() {
    let name = document.getElementById("achName").value;
    let title = document.getElementById("achTitle").value;
    let desc = document.getElementById("achDesc").value;

    let achievement = { name, title, desc };

    let data = JSON.parse(localStorage.getItem("achievements")) || [];
    data.push(achievement);
    localStorage.setItem("achievements", JSON.stringify(data));

    displayAchievements();
}


// Display Achievements
function displayAchievements() {
    let list = document.getElementById("achievementList");
    let data = JSON.parse(localStorage.getItem("achievements")) || [];

    list.innerHTML = "";

    data.forEach(a => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p><b>${a.name}</b> - ${a.title}</p>
            <p>${a.desc}</p>
            <hr>
        `;
        list.appendChild(div);
    });
}


// Load on login
displayAchievements();