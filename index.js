import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";
const app = express();

// middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


// Routes
app.use("/api/products", productRoute);


// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://Donie:Donie%40011@backenddb.vay9q.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("listening on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
