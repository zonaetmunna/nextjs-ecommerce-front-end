import { NextResponse } from "next/server";
import blogs from "./data.json";

export async function GET(request: Request) {
  return NextResponse.json(blogs);
}
