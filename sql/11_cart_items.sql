CREATE TABLE cart_items (
  cart_item_id UUID PRIMARY KEY,
  cart_id UUID,
  product_id UUID,
  product_size VARCHAR(4),
  cart_quantity INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (cart_id) REFERENCES cart(cart_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  UNIQUE (cart_id, product_id, product_size)
);