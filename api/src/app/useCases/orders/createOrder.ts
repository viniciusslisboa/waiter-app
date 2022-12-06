import { Request, Response } from 'express';
import { io } from '../../../index';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;
    const order = await Order.create({ table, products });

    const orderDetails = await order.populate('products.product');

    if(!table || table == 'undefined'|| table == '') {
      return res.status(400).json({
        err: 'Table is required.'
      });
    }

    if(!products || products == 'undefined'|| products == '') {
      return res.status(400).json({
        err: 'Product is required.'
      });
    }
    io.emit('orders@new', orderDetails);
    res.status(201).json(order);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
