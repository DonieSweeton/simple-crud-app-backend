import express from "express";
import { listProducts, viewProduct, createProducts, updatedProduct, deleteProduct } from "../controllers/product.controller.js";
const router = express.Router();

router.get('/', listProducts);
router.get('/:id', viewProduct);
router.post('/', createProducts);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

export default router;