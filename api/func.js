const text = 'Hello World!!! ;)';

export default function handler(_req, res) {
  res.status(200).json({ text });
}
