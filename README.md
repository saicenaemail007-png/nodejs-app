# nodejs-app
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>🚀 Node.js CI/CD Pipeline Successfully Deployed using Jenkins!</h1>");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "NodeJS App",
        time: new Date()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application is running on port ${PORT}`);
});

