
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const body = await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(new URLSearchParams(data)));
    req.on('error', reject);
  });

  const username = body.get("username");
  const password = body.get("password");

  if (username === "admin" && password === "secret123") {
    res.setHeader("Set-Cookie", "session=secret123; Path=/; HttpOnly");
    return res.redirect("/secret123");
  } else {
    return res.status(401).send("Invalid credentials");
  }
}
