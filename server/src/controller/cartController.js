import Cart from "../models/cartModel.js";

const addItem = async (req, res) => {
  const { userID, productID, quantity, size } = req.body;

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

const deleteItem = async (req, res) => {
  const { itemID } = req.body;
  const { userID } = req.params;

  try {
    const deleteCartItem = await Cart.updateOne(
      { userID: userID },
      { $pull: { items: { _id: itemID } } }
    );

    if (deleteCartItem.modifiedCount !== 1) {
      return res
        .status(500)
        .json({ error: "Some error occured while Deleting the item" });
    }

    res.status(200).json({ message: "Item Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateItem = async (req, res) => {
  const { userID } = req.params;
  const { itemID, quantity } = req.body;

  try {
    const updatedCart = await Cart.updateOne(
      { userID: userID, "items._id": itemID },
      { $set: { "items.$.quantity": quantity } }
    );

    if (updatedCart.modifiedCount !== 1) {
      res
        .status(500)
        .json({ message: "Error occured while updating the item" });
    }

    res.status(200).json({ message: "successfully updated Item" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { addItem, getCart, deleteItem, updateItem };
