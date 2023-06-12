import { Request, Response } from 'express';
import { authenticate } from './db-data';

export function loginUser(req: Request, res: Response) {
  console.log('User login attempt ...');

  const { username, password } = req.body;

  const user = authenticate(username, password);

  if (user) {
    res.status(200).json({ username: user.username, name: user.name, surname: user.surname, mobile: user.mobile });
  } else {
    res.sendStatus(403);
  }
}
