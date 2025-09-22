export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { username, password } = req.body;

  if (username === "admin" && password === "secret123") {
    res.setHeader("Set-Cookie", "session=secret123; Path=/; HttpOnly");
    return res.redirect("/secret123");
  } else {
    return res.status(401).send("Invalid credentials");
  }
}
