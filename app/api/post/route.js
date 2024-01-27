import { NextResponse } from "next/server";

export default function handler(req, res) {
  console.log(res);
  const { title, post } = JSON.parse(req.body);

  // Then save the post data to a database
  return NextResponse.json({ name: "lalchand" });
}

// const handler = () => {};
