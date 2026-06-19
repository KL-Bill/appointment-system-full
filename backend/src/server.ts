import "dotenv/config";
import cors from "cors";
import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    success: true,
    message: "Backend is running.",
  });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});