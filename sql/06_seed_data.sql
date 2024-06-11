INSERT INTO products (id, gender, category, brand, model, shortDescription, description, features, price, initialPrice, ratingReviews, ratingValue, thumbnail)
VALUES
('4c7d0215-7d8e-4a5b-8c6e-58a5b3a8c7d8', 'kids', 'casual-shoes', 'YoungSteps', 'PlayGround AllStars', 'Perfect shoes for kids to play and run around in style.', 'YoungSteps PlayGround AllStars are designed with kids in mind, offering comfort, durability, and a vibrant design that kids love.', ARRAY['Lightweight.', 'Breathable fabric.', 'Durable sole.'], 29.99, 39.99, 8, 4.2, 'https://example.com/images/kids-casual-shoes-thumbnail.jpg');

 INSERT INTO product_stock (product_id, size, count)
VALUES
('4c7d0215-7d8e-4a5b-8c6e-58a5b3a8c7d8', '28', 0),
('4c7d0215-7d8e-4a5b-8c6e-58a5b3a8c7d8', '29', 0),
('4c7d0215-7d8e-4a5b-8c6e-58a5b3a8c7d8', '30', 0);

INSERT INTO product_images (product_id, image_url)
VALUES
('4c7d0215-7d8e-4a5b-8c6e-58a5b3a8c7d8', 'https://example.com/images/kids-casual-shoes-1.jpg'),
('4c7d0215-7d8e-4a5b-8c6e-58a5b3a8c7d8', 'https://example.com/images/kids-casual-shoes-2.jpg');  