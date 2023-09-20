import Product from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      res
        .status(404)
        .json({ error: "unable to fetch products, wait for some time" });
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export { getAllProducts };
