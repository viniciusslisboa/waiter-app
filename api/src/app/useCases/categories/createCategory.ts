import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;
    const category = await Category.create({ icon, name });

    if(!name || name == 'undefined'|| name == '') {
      return res.status(400).json({
        err: 'Name is required.'
      });
    }

    if(!icon || icon == 'undefined'|| icon == '') {
      return res.status(400).json({
        err: 'Icon is required.'
      });
    }

    res.status(201).json(category);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
