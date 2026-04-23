// Login Function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
    } else {
        document.getElementById("loginMsg").innerText = "❌ Invalid Credentials";
    }
}


// Add Event
function addEvent() {
    let date = document.getElementById("eventDate").value;
    let text = document.getElementById("eventText").value;

    let event = { date, text };

    let data = JSON.parse(localStorage.getItem("events")) || [];
    data.push(event);
    localStorage.setItem("events", JSON.stringify(data));

    displayEvents();
}


// Display Events
function displayEvents() {
    let list = document.getElementById("eventList");
    let data = JSON.parse(localStorage.getItem("events")) || [];

    list.innerHTML = "";

    data.forEach((e, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p><b>${e.date}</b> - ${e.text}</p>
            <button onclick="deleteEvent(${index})">Delete</button>
            <hr>
        `;
        list.appendChild(div);
    });
}


// Delete Event
function deleteEvent(index) {
    let data = JSON.parse(localStorage.getItem("events")) || [];
    data.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(data));

    displayEvents();
}


// Load on start
displayEvents();
// Add Live Update
function addLiveUpdate() {
    let text = document.getElementById("liveInput").value;

    let updates = JSON.parse(localStorage.getItem("liveUpdates")) || [];
    updates.push(text);

    localStorage.setItem("liveUpdates", JSON.stringify(updates));

    alert("✅ Live update added!");
}