// startServer.js
const { exec } = require("child_process");

// Start json-server
const jsonServer = exec("npm run json-server");

jsonServer.stdout.on("data", (data) => {
  console.log(`json-server: ${data}`);
});

jsonServer.stderr.on("data", (data) => {
  console.error(`json-server error: ${data}`);
});

jsonServer.on("close", (code) => {
  console.log(`json-server process exited with code ${code}`);
});

// Start Next.js server
const nextServer = exec("next dev --turbopack");

nextServer.stdout.on("data", (data) => {
  console.log(`Next.js server: ${data}`);
});

nextServer.stderr.on("data", (data) => {
  console.error(`Next.js server error: ${data}`);
});

nextServer.on("close", (code) => {
  console.log(`Next.js server process exited with code ${code}`);
});

// "json-server": "npx json-server -p 8082 -w dashboardData/db.json"
// "start": "node startServer.js",
