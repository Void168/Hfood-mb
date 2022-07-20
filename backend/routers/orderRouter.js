import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import { isAuth, isAdmin } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = req.query.user || '';
    const userFilter = user ? { user } : {};

    const orders = await Order.find({ ...userFilter }).populate(
      'name'
    );
    res.send(orders);
  })
);

orderRouter.get('/mine', isAuth, expressAsyncHandler(async (req, res) =>{
    const orders = await Order.find({
        user: req.user._id
    });
    res.send(orders)
}))

orderRouter.post('/',isAuth,
    expressAsyncHandler(async (req, res) =>{
    if(req.body.orderItems.length === 0){
        res.status(400).send({
            message: 'Giỏ hàng trống'
        });
    }else{
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
            });
        const createdOrder = await order.save();
        res.status(201).send({
            message: 'Tạo đơn hàng mới', order: createdOrder
        });
        }
    })
);

orderRouter.get('/:id', isAuth, expressAsyncHandler(async (req, res) =>{
    const order = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }else{
        res.status(404).send({
            message: 'Không tìm thấy đơn hàng'
        })
    }
}));

orderRouter.put('/:id/pay', isAuth, expressAsyncHandler(async (req, res) =>{
    const order = await Order.findById(req.params.id);
    if(order){
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult ={
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address,
        };
        const updatedOrder = await order.save();
        res.send({
            message: 'Đơn hàng đã thanh toán', order: updatedOrder
        });
    }else{
        res.status(404).send({
            message: 'Không tìm thấy đơn hàng'
        })
    }
}))

orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deleteOrder = await order.remove();
      res.send({ message: 'Đã xóa đơn hàng', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Không tìm thấy đơn hàng' });
    }
  })
);

orderRouter.get(
    '/summary',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const orders = await Order.aggregate([
        {
          $group: {
            _id: null,
            numOrders: { $sum: 1 },
            totalSales: { $sum: '$totalPrice' },
          },
        },
      ]);
      const users = await User.aggregate([
        {
          $group: {
            _id: null,
            numUsers: { $sum: 1 },
          },
        },
      ]);
      const dailyOrders = await Order.aggregate([
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
            orders: { $sum: 1 },
            sales: { $sum: '$totalPrice' },
          },
        },
        { $sort: { _id: 1 } },
      ]);
      res.send({ users, orders, dailyOrders });
    })
  );

export default orderRouter