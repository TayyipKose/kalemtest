import { Request, Response } from 'express';
import { ITEMS } from './db-data';

export function getAllItems(req: Request, res: Response) {
  console.log('Retrieving items data ...');

  setTimeout(() => {
    res.status(200).json({ data: Object.values(ITEMS) });
  }, 1000);
}


export function getItemBIyId(req: Request, res: Response) {
  const params = req.params;
  let item;
  if (params['id']) {
    item = ITEMS[params['id']];
  }
  setTimeout(() => {
    res.status(200).json({ data: item });
  }, 1000);
}