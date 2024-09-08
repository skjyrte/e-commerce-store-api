CREATE TABLE cart (
cart_id UUID PRIMARY KEY,
product_id UUID,
user_id UUID,
quantity INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (product_id) REFERENCES products(product_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);