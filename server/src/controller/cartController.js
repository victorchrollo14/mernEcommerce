import Cart from "../models/cartModel.js";

const addItem = async (req, res) => {
  const { userID, productID, quantity, size } = req.body;
  console.log(req.body);

  try {
    const cart = await Cart.findOne({ userID: userID });

    const newItem = {
      productID: productID,
      quantity: quantity,
      size: size,
    };
    if (!cart) {
      const newCart = await Cart.create({
        userID: userID,
        items: [newItem],
      });
      await newCart.save();
      return res.status(200).json({ message: "added to cart" });
    }

    const cartItems = cart.items;

    const itemExists = await Cart.findOne({
      $and: [{ "items.productID": productID }, { "items.size": size }],
    });
    if (itemExists) {
      return res.status(409).json({ message: "item already added" });
    }

    cartItems.push(newItem);
    await cart.save();

    res.status(200).json({ message: "Added to Cart" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCart = async (req, res) => {
  const { userID } = req.params;

  try {
    const cart = await Cart.findOne({ userID: userID });

    if (!cart)
      return res.status(200).json({ message: "Your Shopping Cart Is empty" });

    const data = {
      userID: cart.userID,
      items: cart.items,
    };

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const removeItem = async (req, res) => {};

const updateItem = async (req, res) => {};

export { addItem, getCart, removeItem, updateItem };
