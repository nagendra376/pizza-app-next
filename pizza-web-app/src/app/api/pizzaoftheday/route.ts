// It creates a backend API endpoint inside current Next.js app.

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const orders = data.pizzas;

  return NextResponse.json({
    data: orders,
  });
}
