CREATE TABLE product_stock (
    product_id UUID,
    size VARCHAR(3),
    count INT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);