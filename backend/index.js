
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from "cors";
dotenv.config()
const app = express();
import { PositionModel } from "./models/PositionsModel.js"
import { HoldingsModel } from "./models/HoldingsModel.js"
import { OrderModel } from './models/OrdersModel.js';
import { Signup, VerifyUser, Login } from './controllers/AuthController.js';




app.use(express.json());



app.use(bodyParser.json());
app.use(cors())

const port = process.env.PORT || 8080
const url = process.env.MONGO_URL;



app.get("/allholdings", async (req, res) => {
    let allholdings = await HoldingsModel.find({});
    res.json(allholdings)
})

app.get("/allpositions", async (req, res) => {
    let allpositions = await PositionModel.find({});
    res.json(allpositions)
})

app.post("/neworder", async (req, res) => {
    let { name, qty, price, mode, user_id } = req.body
    let neworder = await new OrderModel({
        name: name,
        qty: qty,
        price: price,
        mode: mode,
        user_id:user_id
    })
    await neworder.save();
    res.json({message:"New Order Created Successfully"})
})

app.get("/getorders", async (req, res) => {
  const { id } = req.query; // ✅ query instead of body
  try {
    const orders = await OrderModel.find({ user_id: id });
    res.json({ success: true, orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.get("/holdings", async (req, res) => {
  const { id } = req.query;

  try {
    const orders = await OrderModel.find({ user_id: id });

    const holdings = {};

    orders.forEach((order) => {
      const { name, qty, price, mode } = order;
      if (!holdings[name]) {
        holdings[name] = { totalQty: 0, totalCost: 0 };
      }

      if (mode === "buy") {
        holdings[name].totalQty += qty;
        holdings[name].totalCost += price * qty;
      } else if (mode === "sell") {
        holdings[name].totalQty -= qty;
        holdings[name].totalCost -= price * qty; // optional adjustment
      }
    });

    const result = Object.entries(holdings)
      .filter(([_, h]) => h.totalQty > 0)
      .map(([name, h]) => ({
        name,
        qty: h.totalQty,
        avgPrice: h.totalCost / h.totalQty,
      }));

    res.json({ success: true, holdings: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching holdings" });
  }
});



app.post("/signup", Signup)
app.post("/login", Login)
app.get("/verify", VerifyUser)


app.listen(port, () => {
    console.log(`Server is listining on port ${port}`)
    mongoose.connect(url);
    console.log("db connected")
})