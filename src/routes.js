import express from "express";
import auth from "./middlewares/auth.js";
import {
  updateStockProduct,
  listAllProducts,
  storeProduct,
} from "./controllers/product.controller.js";

const routes = express.Router();

routes.post("/product/new", auth, storeProduct);
routes.get("/product/all", auth, listAllProducts);
routes.put("/product/:id", auth, updateStockProduct);

export default routes;