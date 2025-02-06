"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const val = yield prisma.user.findMany({
        take: 10,
    });
    res.json({
        user: val,
    });
}));
app.get("*", (req, res) => {
    res.json({
        message: "success",
        env: process.env.DATABASE_URL,
    });
});
const server = app.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("http://localhost:3000");
}));
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
