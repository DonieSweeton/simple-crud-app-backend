import Product from "../models/product.model.js";

const listProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleProduct = await Product.findById(id);
    res.status(200).json(getSingleProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProducts = async (req, res) => {
  try {
    const newProducts = await Product.create(req.body);
    res.status(201).json(newProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  listProducts,
  viewProduct,
  createProducts,
  updatedProduct,
  deleteProduct,
};
