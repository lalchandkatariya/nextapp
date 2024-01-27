import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  console.log("calles for get method");

  return NextResponse.json({ message: "Hello - GET" });
}

export async function POST(res) {
  NextRequest.cookies.set({
    name: "vercel",
    value: "fast",
    path: "/",
  });
  const allCookies = res.cookies.get("name");
  console.log("allCookies", allCookies);
  console.log("this is responsible for Post request ", res);
  return NextResponse.json({ message: "Hello - POST" });
}

export async function PUT() {
  return NextResponse.json({ message: "Hello - PUT" });
}

export async function DELETE() {
  return NextResponse.json({ message: "Hello - DELETE" });
}
