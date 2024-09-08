import express from "express";
import knexDb from "../knexDb";

const router = express.Router();

router.post("/cart/add", async (req, res) => {
  const {user_id, product_id, quantity} = req.body;

  try {
    const existingItem = await knexDb("cart_items")
      .where({user_id, product_id})
      .first();

    if (existingItem) {
      await knexDb("cart_items")
        .where({user_id, product_id})
        .update({quantity: existingItem.quantity + quantity});
    } else {
      await knexDb("cart_items").insert({
        user_id,
        product_id,
        quantity,
        created_at: knexDb.fn.now(),
        updated_at: knexDb.fn.now(),
      });
    }

    res.status(200).send({success: true, message: "Item added to cart"});
  } catch (err) {
    res
      .status(500)
      .send({success: false, message: "Error adding item to cart"});
  }
});
