
export default function handler(req, res) {
  const auth = req.headers.cookie || '';
  if (auth.includes("session=secret123")) {
    return res.redirect('/secret123/index.html');
  }
  return res.redirect('/login.html');
}
