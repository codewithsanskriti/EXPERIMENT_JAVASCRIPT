const EventEmitter = require("events");

const studentSystem = new EventEmitter();

studentSystem.on("studentJoined", (name) => {
    console.log("Student " + name + " joined the session.");
});

studentSystem.on("courseSelected", (course) => {
    console.log("Course selected: " + course);
});

studentSystem.on("sessionEnded", (code) => {
    console.log("Session ended. Code: " + code);
});

studentSystem.emit("studentJoined", "Rahul");
studentSystem.emit("courseSelected", "Full Stack Development");
studentSystem.emit("sessionEnded", 0);