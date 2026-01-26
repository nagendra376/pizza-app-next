// It creates a backend API endpoint inside current Next.js app.

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 10);

  const filePath = path.join(process.cwd(), "data", "db.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const orders = data.orders;
  const start = (page - 1) * limit;

  return NextResponse.json({
    data: orders.slice(start, start + limit),
    totalPages: Math.ceil(orders.length / limit),
  });
}
