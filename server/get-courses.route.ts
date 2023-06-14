import { Request, Response } from 'express';
import { ITEMS } from './db-data';

export function getAllItems(req: Request, res: Response) {
  console.log('Retrieving items data ...');

  setTimeout(() => {
    res.status(200).json({ data: { data6: Object.values(ITEMS) } });
  }, 1000);
}
