import { prisma } from "../generated/prisma-client";
import { success, error } from "../returnFunc";
import { getOrderWithUser, getOrderByUser } from "../Queries/GraphQLQueries";
import Stripe from "stripe";

const stripe = Stripe("sk_test_FFo2d2NIa2uOtzD2k88dDrYm00iLED5prj");

class OrderController {
  proccessPaiement(charge) {
    stripe.charges.create(
      {
        amount: charge.amount,
        currency: "eur",
        source: "tok_mastercard",
        description: "Commande pizza",
        customer: charge.customer,
      },
      function(err, charge) {
        // asynchronously called
      }
    );
  }

  async checkId(param) {
    let check = false;
    await this.getOrderById(param).then((resp) => {
      switch (resp.status) {
        case "success":
          check = true;
          break;
        case "error":
          check = false;
          break;
        default:
          check = false;
          break;
      }
    });
    return check;
  }

  getAllOrder() {
    return new Promise(async (next) => {
      const Orders = await prisma.orders().$fragment(getOrderWithUser);
      if (Orders.length > 0) {
        next(success(Orders));
      } else {
        next(success("no Order"));
      }
    });
  }

  getOrderByUser(userId) {
    return new Promise(async (next) => {
      const Orders = await prisma.$graphql(getOrderByUser(userId));
      if (Orders.orders.length > 0) {
        next(success(Orders));
      } else {
        next(error("This user doesnt have order"));
      }
    });
  }

  getOrderById(id) {
    return new Promise(async (next) => {
      const Order = await prisma.order(id).$fragment(getOrderWithUser);
      if (Order) {
        next(success(Order));
      } else {
        next(error("No Order found for this id"));
      }
    });
  }

  addOrder(param) {
    return new Promise(async (next) => {
      if (param.price && param.status && param.user && param.content) {
        const Orders = await prisma.createOrder(param);
        //this.proccessPaiement(param.charge);
        next(success(Orders));
      } else {
        next(success("Empty fields"));
      }
    });
  }

  async deleteOrder(param) {
    let check = this.checkId(param);

    return new Promise(async (next) => {
      if (await check) {
        const Order = await prisma.deleteOrder(param);
        next(success("The Order has beed deleted"));
      } else {
        next(error("No Order with this id"));
      }
    });
  }

  async updateOrder(param) {
    return new Promise(async (next) => {
      if (
        param.where.id &&
        param.data.price &&
        param.data.status &&
        param.data.user &&
        param.data.content &&
        param.data.promo
      ) {
        const Orders = await prisma.updateOrder(param);
        next(success(Orders));
      } else {
        next(error("Empty fields. Please check all fields."));
      }
    });
  }
}

export default new OrderController();
