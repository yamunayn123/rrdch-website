// Scroll to form
function scrollToForm() {
    document.getElementById("appointment").scrollIntoView();
}

// Appointment Booking
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let dept = document.getElementById("department").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    // Generate unique Patient ID
    let patientId = "RRDCH" + Math.floor(Math.random() * 10000);

    // Create object
    let appointment = {
        id: patientId,
        name: name,
        phone: phone,
        department: dept,
        date: date,
        time: time,
        status: "Confirmed"
    };

    // Store in localStorage
    let data = JSON.parse(localStorage.getItem("appointments")) || [];
    data.push(appointment);
    localStorage.setItem("appointments", JSON.stringify(data));

    // Show message
    document.getElementById("message").innerText = 
        "✅ Appointment Booked! Your Patient ID: " + patientId;

    document.getElementById("appointmentForm").reset();
});


// Track Appointment
function trackAppointment() {
    let id = document.getElementById("trackId").value;
    let result = document.getElementById("trackResult");

    let data = JSON.parse(localStorage.getItem("appointments")) || [];

    let found = data.find(app => app.id === id);

    if(found) {
        result.innerText = 
            `🟢 Name: ${found.name} | Dept: ${found.department} | Date: ${found.date} | Time: ${found.time} | Status: ${found.status}`;
    } else {
        result.innerText = "🔴 No record found";
    }
    // Complaint Form Submit
document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("cname").value;
    let room = document.getElementById("room").value;
    let issue = document.getElementById("issue").value;

    let complaint = {
        name: name,
        room: room,
        issue: issue
    };

    // Store in localStorage
    let data = JSON.parse(localStorage.getItem("complaints")) || [];
    data.push(complaint);
    localStorage.setItem("complaints", JSON.stringify(data));

    // Message
    document.getElementById("cmessage").innerText = "✅ Complaint Submitted!";

    document.getElementById("complaintForm").reset();

    displayComplaints();
});


// Display Complaints
function displayComplaints() {
    let list = document.getElementById("complaintList");
    let data = JSON.parse(localStorage.getItem("complaints")) || [];

    list.innerHTML = "";

    data.forEach(function(c) {
        let div = document.createElement("div");
        div.innerHTML = `
            <p><strong>Name:</strong> ${c.name}</p>
            <p><strong>Room:</strong> ${c.room}</p>
            <p><strong>Issue:</strong> ${c.issue}</p>
            <hr>
        `;
        list.appendChild(div);
    });
}

// Load complaints on page load
displayComplaints();

}
// Language data
const translations = {
    en: {
        welcome: "Welcome to Rajarajeswari Dental College",
        home: "Home",
        about: "About",
        contact: "Contact",
        appointment: "Book Appointment"
    },
    kn: {
        welcome: "ರಾಜರಾಜೇಶ್ವರಿ ದಂತ ಕಾಲೇಜಿಗೆ ಸ್ವಾಗತ",
        home: "ಮುಖಪುಟ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        contact: "ಸಂಪರ್ಕ",
        appointment: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"
    }
};

// Apply language
function setLanguage(lang) {
    let elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
        let key = el.getAttribute("data-key");
        el.innerText = translations[lang][key];
    });

    // Save language
    localStorage.setItem("language", lang);
}

// Toggle button
function toggleLanguage() {
    let current = localStorage.getItem("language") || "en";
    let newLang = current === "en" ? "kn" : "en";
    setLanguage(newLang);
}

// Load saved language on page load
window.onload = function() {
    let savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
};
// Display Live Updates
function loadLiveUpdates() {
    let container = document.getElementById("liveUpdates");
    let updates = JSON.parse(localStorage.getItem("liveUpdates")) || [];

    container.innerHTML = "";

    updates.reverse().forEach(u => {
        let div = document.createElement("div");
        div.innerHTML = `
            <p>🔴 ${u}</p>
            <hr>
        `;
        container.appendChild(div);
    });
}

// Load on page start
loadLiveUpdates();
function scrollToForm() {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}