const EventEmitter = require("events");

const tracker = new EventEmitter();

tracker.on("login", (name) => {
    console.log(name + " logged in.");
});

tracker.on("courseRegistration", (course) => {
    console.log("Course registered: " + course);
});

tracker.on("notification", (message) => {
    console.log("Notification: " + message);
});

tracker.on("logout", (name) => {
    console.log(name + " logged out.");
});

tracker.emit("login", "Rahul");
tracker.emit("courseRegistration", "Full Stack Development");
tracker.emit("notification", "Course registration successful.");
tracker.emit("logout", "Rahul");