const io = require("socket.io-client");

const socket = io("ws://localhost:3001", {
    query: { userId: "8d9b307e-acad-4675-906f-0086a9a4d8dc" }
});

socket.on("connect", () => {
    console.log("✅ Connected to WebSocket server");
});

socket.on("disconnect", () => {
    console.log("❌ Disconnected from server");
});

socket.on("groupCreated", (data) => {
    console.log("📩 Group Created Event Received:", data);
});
