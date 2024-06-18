-- Seed data for products table
INSERT INTO products (id, brand, model, gender, category, material, season, shortDescription, description, features, price, initialPrice, ratingReviews, ratingValue, thumbnail, color)
VALUES
-- Product 1
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'Zalton', 'AirFlex 5000', 'men', 'sneakers', 'mesh', 'all_season', 'Versatile Running Shoes', 'The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.', ARRAY['Responsive cushioning', 'Breathable mesh upper'], 129.99, 149.99, 120, 4.5, 'https://example.com/thumbnail1.jpg', 'white'),
-- Product 2
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'Sprintz', 'UltraZoom 210', 'women', 'running', 'synthetic', 'winter', 'Energy-Returning Running Shoes', 'The Sprintz UltraZoom 210 features an innovative Boost midsole for energy-returning cushioning.', ARRAY['Boost midsole', 'Flexible Stretchweb outsole'], 180.00, 199.99, 90, 4.7, 'https://example.com/thumbnail2.jpg', 'beige'),
-- Product 3
('30984c42-37de-4377-8de3-2d16f4897a18', 'Trekster', 'Future Rider X1', 'men', 'casual', 'suede', 'all_season', 'Retro-Inspired Casual Sneakers', 'The Trekster Future Rider X1 combines retro style with modern comfort.', ARRAY['Rider Foam midsole', 'Suede and mesh upper'], 79.99, 89.99, 60, 4.3, 'https://example.com/thumbnail3.jpg', 'black'),
-- Product 4
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'Fitterz', 'ClassicOne 327', 'women', 'casual', 'canvas', 'all_season', 'Classic Casual Sneakers', 'The Fitterz ClassicOne 327 features a heritage-inspired design for everyday wear.', ARRAY['Lightweight EVA foam cushioning', 'Durable rubber outsole'], 99.95, 119.99, 45, 4.2, 'https://example.com/thumbnail4.jpg', 'white'),
-- Product 5
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'UrbanStep', 'AirStride 3000', 'men', 'sneakers', 'mesh', 'winter', 'Versatile Running Shoes', 'The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.', ARRAY['Lightweight mesh upper', 'EVA sockliner'], 70.00, 79.99, 55, 4.4, 'https://example.com/thumbnail5.jpg', 'black'),
-- Product 6
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'NeoGrip', 'RetroFlex 9000', 'women', 'casual', 'leather', 'all_season', 'Timeless Casual Sneakers', 'The NeoGrip RetroFlex 9000 delivers timeless style and cushioned comfort for everyday wear.', ARRAY['Soft leather upper', 'EVA midsole'], 75.00, 89.99, 65, 4.6, 'https://example.com/thumbnail6.jpg', 'white'),
-- Product 7
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'UrbanRun', 'AirFlow 14', 'men', 'running', 'mesh', 'all_season', 'Plush Running Shoes', 'The UrbanRun AirFlow 14 offers plush cushioning and smooth transitions for neutral runners.', ARRAY['DNA Loft cushioning', 'Segmented Crash Pad'], 129.95, 149.99, 80, 4.8, 'https://example.com/thumbnail7.jpg', 'black'),
-- Product 8
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'SoulFit', 'Jazz Runner', 'women', 'casual', 'suede', 'all_season', 'Iconic Retro Sneakers', 'The SoulFit Jazz Runner is an iconic sneaker known for its comfort and style.', ARRAY['Padded collar and tongue', 'Shock-absorbing EVA midsole'], 59.95, 69.99, 70, 4.3, 'https://example.com/thumbnail8.jpg', 'white'),
-- Product 9
('0d55026d-ff26-487f-9183-064e801a150e', 'StrideMax', 'GelBliss 230', 'men', 'running', 'synthetic', 'all_season', 'Premium Cushioned Running Shoes', 'The StrideMax GelBliss 230 offers premium cushioning and support for long-distance runners.', ARRAY['GEL cushioning technology', 'Breathable mesh upper'], 149.95, 169.99, 90, 4.7, 'https://example.com/thumbnail9.jpg', 'white'),
-- Product 10
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'FemmeRun', 'WaveMaster 24', 'women', 'running', 'synthetic', 'all_season', 'Smooth Running Shoes', 'The FemmeRun WaveMaster24 features a comfortable and smooth ride for neutral runners.', ARRAY['Wave Plate technology', 'Breathable mesh upper'], 129.99, 149.99, 75, 4.5, 'https://example.com/thumbnail10.jpg', 'beige');

-- Seed data for product_stock table
INSERT INTO product_stock (product_id, size, count)
VALUES
-- Product 1 Stock
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', '40', 20),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', '41', 15),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', '42', 10),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', '43', 12),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', '44', 8),
-- Product 2 Stock
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '36', 10),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '37', 15),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '38', 20),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '39', 12),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '40', 18),
-- Product 3 Stock
('30984c42-37de-4377-8de3-2d16f4897a18', '41', 20),
('30984c42-37de-4377-8de3-2d16f4897a18', '42', 15),
('30984c42-37de-4377-8de3-2d16f4897a18', '43', 12),
('30984c42-37de-4377-8de3-2d16f4897a18', '44', 8),
('30984c42-37de-4377-8de3-2d16f4897a18', '45', 10),
-- Product 4 Stock
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '36', 15),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '37', 18),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '38', 22),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '39', 15),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '40', 20),
-- Product 5 Stock
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '39', 14),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '40', 20),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '41', 15),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '42', 10),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '43', 12),
-- Product 6 Stock
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '35', 15),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '36', 18),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '37', 22),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '38', 15),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '39', 20),
-- Product 7 Stock
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '40', 14),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '41', 20),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '42', 15),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '43', 10),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '44', 12),
-- Product 8 Stock
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', '35', 20),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', '36', 15),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', '37', 12),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', '38', 18),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', '39', 10),
-- Product 9 Stock
('0d55026d-ff26-487f-9183-064e801a150e', '40', 15),
('0d55026d-ff26-487f-9183-064e801a150e', '41', 18),
('0d55026d-ff26-487f-9183-064e801a150e', '42', 22),
('0d55026d-ff26-487f-9183-064e801a150e', '43', 15),
('0d55026d-ff26-487f-9183-064e801a150e', '44', 20),
-- Product 10 Stock
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '35', 14),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '36', 20),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '37', 15),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '38', 10),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '39', 12);

-- Seed data for product_images table
INSERT INTO product_images (product_id, image_url)
VALUES
-- Product 1 Images
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://example.com/image1_1.jpg'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://example.com/image1_2.jpg'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://example.com/image1_3.jpg'),
-- Product 2 Images
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://example.com/image2_1.jpg'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://example.com/image2_2.jpg'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://example.com/image2_3.jpg'),
-- Product 3 Images
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://example.com/image3_1.jpg'),
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://example.com/image3_2.jpg'),
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://example.com/image3_3.jpg'),
-- Product 4 Images
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://example.com/image4_1.jpg'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://example.com/image4_2.jpg'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://example.com/image4_3.jpg'),
-- Product 5 Images
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://example.com/image5_1.jpg'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://example.com/image5_2.jpg'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://example.com/image5_3.jpg'),
-- Product 6 Images
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://example.com/image6_1.jpg'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://example.com/image6_2.jpg'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://example.com/image6_3.jpg'),
-- Product 7 Images
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://example.com/image7_1.jpg'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://example.com/image7_2.jpg'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://example.com/image7_3.jpg'),
-- Product 8 Images
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://example.com/image8_1.jpg'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://example.com/image8_2.jpg'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://example.com/image8_3.jpg'),
-- Product 9 Images
('0d55026d-ff26-487f-9183-064e801a150e', 'https://example.com/image9_1.jpg'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://example.com/image9_2.jpg'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://example.com/image9_3.jpg'),
-- Product 10 Images
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://example.com/image10_1.jpg'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://example.com/image10_2.jpg'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://example.com/image10_3.jpg');