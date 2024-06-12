CREATE TABLE product_images (
    product_id UUID,
    image_url TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id)
);