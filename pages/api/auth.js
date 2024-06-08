// pages/api/auth.js

import { serialize } from 'cookie';

const { NEXT_PUBLIC_USERNAME, NEXT_PUBLIC_PASSWORD } = process.env;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (username === NEXT_PUBLIC_USERNAME && password === NEXT_PUBLIC_PASSWORD) {
      const authToken = 'authenticated'; 

      res.setHeader('Set-Cookie', serialize('auth', authToken, {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60, // 1 hour
      }));

      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', serialize('auth', '', {
      path: '/',
      httpOnly: true,
      maxAge: -1,
    }));

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
