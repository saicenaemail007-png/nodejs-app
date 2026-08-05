const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Node.js CI/CD Dashboard</title>
<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}
body{
    background:linear-gradient(135deg,#0f172a,#1e293b);
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}
.container{
    width:700px;
    background:#ffffff10;
    backdrop-filter:blur(10px);
    border-radius:15px;
    padding:40px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.4);
}
h1{
    color:#38bdf8;
    margin-bottom:15px;
}
.status{
    display:inline-block;
    background:#22c55e;
    padding:10px 20px;
    border-radius:30px;
    margin:20px 0;
    font-weight:bold;
}
.info{
    margin-top:25px;
    text-align:left;
    line-height:2;
    font-size:18px;
}
.footer{
    margin-top:30px;
    color:#cbd5e1;
}
</style>
</head>

<body>

<div class="container">

<h1>🚀 Node.js CI/CD Deployment</h1>

<div class="status">
✅ Application Running Successfully
</div>

<div class="info">

<p><strong>Server :</strong> Node.js + Express</p>

<p><strong>Deployment :</strong> Jenkins CI/CD</p>

<p><strong>Status :</strong> Healthy</p>

<p><strong>Environment :</strong> Production</p>

<p><strong>Current Time :</strong> ${new Date().toLocaleString()}</p>

<p><strong>Hostname :</strong> ${require("os").hostname()}</p>

<p><strong>Platform :</strong> ${process.platform}</p>

<p><strong>Node Version :</strong> ${process.version}</p>

</div>

<div class="footer">

Made with ❤️ using Node.js, Express & Jenkins

</div>

</div>

</body>
</html>
`);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "Node.js Express",
        server: require("os").hostname(),
        node: process.version,
        timestamp: new Date()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});