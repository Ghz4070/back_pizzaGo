import express from "express";
import Order from "../Controllers/OrderController";
import OrderController from "../Controllers/OrderController";

export const anonymeRouteOrder = express.Router();
export const adminRouteOrder = express.Router();

adminRouteOrder.route("/").get(async (req, res) => {
  const Orders = await Order.getAllOrder();
  res.json(Orders);
});

anonymeRouteOrder.route("/add").post(async (req, res) => {
  const param = {
    price: req.body.price,
    status: req.body.status,
    user: {
      connect: {
        id: req.body.userId,
      },
    },
    content: req.body.content,
    /* promo: {
      connect: {
        id: req.body.promoId,
      },
    }, */
  };
  const Orders = await Order.addOrder(param);
  res.json(Orders);
});

anonymeRouteOrder.route("/user/:id").get(async (req, res) => {
  const Order = await OrderController.getOrderByUser(req.params.id);
  res.json(Order);
});

adminRouteOrder.route("/delete/:id").delete(async (req, res) => {
  const param = {
    id: req.params.id,
  };
  const Orders = await Order.deleteOrder(param);
  res.json(Orders);
});

anonymeRouteOrder.route("/:id").get(async (req, res) => {
  const param = {
    id: req.params.id,
  };
  const Orders = await Order.getOrderById(param);
  res.json(Orders);
});

adminRouteOrder.route("/update").put(async (req, res) => {
  const param = {
    where: { id: req.body.id },
    data: {
      price: req.body.price,
      status: req.body.status,
      user: {
        connect: {
          id: req.body.userId,
        },
      },
      content: req.body.content,
      promo: {
        connect: {
          id: req.body.promoId,
        },
      },
    },
  };
  const Orders = await Order.updateOrder(param);
  res.json(Orders);
});
