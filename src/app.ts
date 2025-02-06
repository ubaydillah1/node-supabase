import express from "express";

const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
  const val = await prisma.user.findMany({
    take: 10,
  });

  res.json({
    user: val,
  });
});

app.get("*", (req, res) => {
  res.json({
    message: "success",
  });
});

const server = app.listen(3000, async () => {
  console.log("http://localhost:3000");
});

// process.on("SIGINT", async () => {
//   console.log("Shutting down server...");
//   await prisma.$disconnect();
//   server.close(() => {
//     console.log("Server closed.");
//     process.exit(0);
//   });
// });

// process.on("SIGTERM", async () => {
//   console.log("Shutting down server...");
//   await prisma.$disconnect();
//   server.close(() => {
//     console.log("Server closed.");
//     process.exit(0);
//   });
// });
