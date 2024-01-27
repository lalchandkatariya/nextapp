export default function handler(req, res) {
  console.log("api calles");
  res.status(200).json({ message: "Hello from Next.js!" });
}
