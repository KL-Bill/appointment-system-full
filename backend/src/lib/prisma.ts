import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

function requireEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

const adapter = new PrismaMariaDb({
  host: requireEnvironmentVariable("DATABASE_HOST"),
  port: Number(process.env.DATABASE_PORT ?? 3306),
  user: requireEnvironmentVariable("DATABASE_USER"),
  password: requireEnvironmentVariable("DATABASE_PASSWORD"),
  database: requireEnvironmentVariable("DATABASE_NAME"),
  connectionLimit: 5,
});

export const prisma = new PrismaClient({
  adapter,
});