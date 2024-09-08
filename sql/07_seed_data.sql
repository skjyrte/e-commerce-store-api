-- Seed data for products table
INSERT INTO products (product_id, brand, model, gender, category, material, season, short_description, description, features, price, initial_price, rating_reviews, rating_value, thumbnail, color)
VALUES
-- Product 1
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'Zalton', 'AirFlex 5000', 'men', 'sneakers', 'mesh', 'all_season', 'Versatile Running Shoes', 'The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.', ARRAY['Responsive cushioning', 'Breathable mesh upper'], 129.99, 149.99, 120, 4.5, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3cc2305-65bb-4824-b4bd-9474386f6656/buty-p-6000-N11cGn.png', 'white'),
-- Product 2
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'Sprintz', 'UltraZoom 210', 'women', 'running', 'synthetic', 'winter', 'Energy-Returning Running Shoes', 'The Sprintz UltraZoom 210 features an innovative Boost midsole for energy-returning cushioning.', ARRAY['Boost midsole', 'Flexible Stretchweb outsole'], 180.00, 199.99, 90, 4.7, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/214ed86c-49ca-41f8-ac51-bb5a30b27b39/buty-v2k-run-dkXfnV.png', 'beige'),
-- Product 3
('30984c42-37de-4377-8de3-2d16f4897a18', 'Trekster', 'Future Rider X1', 'men', 'casual', 'suede', 'all_season', 'Retro-Inspired Casual Sneakers', 'The Trekster Future Rider X1 combines retro style with modern comfort.', ARRAY['Rider Foam midsole', 'Suede and mesh upper'], 79.99, 89.99, 60, 4.3, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/buty-meskie-air-force-1-07-CFVMS0.png', 'black'),
-- Product 4
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'Fitterz', 'ClassicOne 327', 'women', 'casual', 'canvas', 'all_season', 'Classic Casual Sneakers', 'The Fitterz ClassicOne 327 features a heritage-inspired design for everyday wear.', ARRAY['Lightweight EVA foam cushioning', 'Durable rubber outsole'], 99.95, 119.99, 45, 4.2, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3e8455ad-c00c-4996-a85a-b5c4d38c6ae2/buty-v2k-run-dkXfnV.png', 'white'),
-- Product 5
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'UrbanStep', 'AirStride 3000', 'men', 'sneakers', 'mesh', 'winter', 'Versatile Running Shoes', 'The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.', ARRAY['Lightweight mesh upper', 'EVA sockliner'], 70.00, 79.99, 55, 4.4, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/zrhpg00meg0lsfrgkzkq/buty-air-force-1-flyknit-2-L5q9GR.png', 'black'),
-- Product 6
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'NeoGrip', 'RetroFlex 9000', 'women', 'casual', 'leather', 'all_season', 'Timeless Casual Sneakers', 'The NeoGrip RetroFlex 9000 delivers timeless style and cushioned comfort for everyday wear.', ARRAY['Soft leather upper', 'EVA midsole'], 75.00, 89.99, 65, 4.6, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be1ba56b-2693-4f1e-bc0f-73228e023ff8/buty-cortez-vintage-suede-hvNRPp.png', 'white'),
-- Product 7
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'UrbanRun', 'AirFlow 14', 'men', 'running', 'mesh', 'all_season', 'Plush Running Shoes', 'The UrbanRun AirFlow 14 offers plush cushioning and smooth transitions for neutral runners.', ARRAY['DNA Loft cushioning', 'Segmented Crash Pad'], 129.95, 149.99, 80, 4.8, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uirypqqxq83mwcjbf9ej/meskie-buty-treningowe-air-monarch-iv-dHvlpg.png', 'black'),
-- Product 8
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'SoulFit', 'Jazz Runner', 'women', 'casual', 'suede', 'all_season', 'Iconic Retro Sneakers', 'The SoulFit Jazz Runner is an iconic sneaker known for its comfort and style.', ARRAY['Padded collar and tongue', 'Shock-absorbing EVA midsole'], 59.95, 69.99, 70, 4.3, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85b683e1-db84-47af-a656-5cfb4b8d5f97/buty-dunk-low-next-nature-Z8cdFc.png', 'white'),
-- Product 9
('0d55026d-ff26-487f-9183-064e801a150e', 'StrideMax', 'GelBliss 230', 'men', 'running', 'synthetic', 'all_season', 'Premium Cushioned Running Shoes', 'The StrideMax GelBliss 230 offers premium cushioning and support for long-distance runners.', ARRAY['GEL cushioning technology', 'Breathable mesh upper'], 149.95, 169.99, 90, 4.7, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png', 'white'),
-- Product 10
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'FemmeRun', 'WaveMaster 24', 'women', 'running', 'synthetic', 'all_season', 'Smooth Running Shoes', 'The FemmeRun WaveMaster24 features a comfortable and smooth ride for neutral runners.', ARRAY['Wave Plate technology', 'Breathable mesh upper'], 129.99, 149.99, 75, 4.5, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3aae78bd-26c4-42d3-ba2c-bf833aa2958c/buty-air-jordan-1-low-kpLHkZ.png', 'beige');

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
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '36.5', 10),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '37', 15),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '37.5', 15),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '38', 20),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '38.5', 20),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '39', 12),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '40', 18),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '41', 18),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '42', 18),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', '43', 18),
-- Product 3 Stock
('30984c42-37de-4377-8de3-2d16f4897a18', '39', 20),
('30984c42-37de-4377-8de3-2d16f4897a18', '40', 20),
('30984c42-37de-4377-8de3-2d16f4897a18', '41', 20),
('30984c42-37de-4377-8de3-2d16f4897a18', '41.5', 20),
('30984c42-37de-4377-8de3-2d16f4897a18', '42', 15),
('30984c42-37de-4377-8de3-2d16f4897a18', '42.5', 15),
('30984c42-37de-4377-8de3-2d16f4897a18', '43', 5),
('30984c42-37de-4377-8de3-2d16f4897a18', '43.5', 4),
('30984c42-37de-4377-8de3-2d16f4897a18', '44', 4),
('30984c42-37de-4377-8de3-2d16f4897a18', '45', 3),
('30984c42-37de-4377-8de3-2d16f4897a18', '46', 2),
('30984c42-37de-4377-8de3-2d16f4897a18', '47', 1),
('30984c42-37de-4377-8de3-2d16f4897a18', '48', 0),
('30984c42-37de-4377-8de3-2d16f4897a18', '49', 0),
('30984c42-37de-4377-8de3-2d16f4897a18', '50', 0),
-- Product 4 Stock
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '36', 15),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '37', 18),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '38', 22),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '39', 15),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '40', 20),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '41', 0),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', '42', 0),

-- Product 5 Stock
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '39', 14),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '40', 20),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '41', 15),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '42', 10),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '43', 12),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '44', 10),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '45', 12),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '46', 10),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', '47', 12),
-- Product 6 Stock
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '35', 15),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '36', 18),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '37', 22),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '38', 0),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '39', 0),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '40', 1),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', '41', 2),
-- Product 7 Stock
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '39', 0),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '40', 14),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '41', 20),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '42', 15),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '43', 10),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', '44', 0),
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
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '35', 5),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '36', 2),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '37', 1),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '37.5', 1),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '38', 1),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '38.5', 1),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', '39', 0);

-- Seed data for product_images table
INSERT INTO product_images (product_id, image_url)
VALUES
-- Product 1 Images
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa1bceaf-21bc-44b5-853b-33eac3c34e2b/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5de4060f-618b-4e72-bfce-a2eb4cd2a445/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06b31a14-a95d-4aaf-848d-6babe386105c/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a195d945-eaf2-4d34-a6a3-a215f6307de0/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c8c72cfd-0fe4-4ff8-aa13-6edb641adcc1/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/248ad162-a2c3-456a-95a3-b7d80d8a5b8b/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eee3ab36-8e55-4343-abcf-ccabe06e2f32/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cba8ba3-3d1f-4d82-a202-6ce5a73b62a0/WMNS+NIKE+P-6000.png'),
('a1524b05-64a6-4d2d-9d6b-6ab57b804923', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87614ecb-e92b-4370-8be0-49390a1ca70c/WMNS+NIKE+P-6000.png'),

-- Product 2 Images
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd5f98b1-2cdf-49d6-a854-829c14fa79b1/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3ed63ccb-f775-475a-ae2f-b9ca49e7f6c4/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/116c99aa-26ac-4fb0-8f1f-257f7b0664fb/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb031375-73f7-4521-9a8d-d46b83332188/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa595e0f-8a7f-4f04-9553-67d8265635f4/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5707c17c-76ae-43e5-bd91-a5c984c1b13c/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6402fa7-f5ab-450a-98cc-76b98f8e9e54/buty-air-force-1-07-next-nature-7dl9fM.png'),
('1d7837f2-ec4f-47f4-a434-b39440a298ef', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/buty-air-force-1-07-next-nature-7dl9fM.png'),

-- Product 3 Images
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png'),
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/AIR+FORCE+1+%2707.png'),
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/AIR+FORCE+1+%2707.png'),
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/AIR+FORCE+1+%2707.png'),
('30984c42-37de-4377-8de3-2d16f4897a18', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/AIR+FORCE+1+%2707.png'),

-- Product 4 Images
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fb6ff59-aca1-4f1f-a836-0888d4f119a6/W+NIKE+V2K+RUN.png'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6fcf75c6-e79e-44cc-98b8-de3e17468dcd/W+NIKE+V2K+RUN.png'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1fae6cea-c4a6-4855-89eb-bed7fc359cb6/W+NIKE+V2K+RUN.png'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03d951e6-cf6e-48e9-8404-2b342fc2825d/W+NIKE+V2K+RUN.png'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/509edbec-df90-4229-9357-6dd5a5877975/W+NIKE+V2K+RUN.png'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8d41e058-bbd6-4f8f-88de-5c666ac16f6a/W+NIKE+V2K+RUN.png'),
('9d9e26fd-2b38-4b85-b99e-320d7b65c9cc', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b14ec9a-7401-4684-8752-cd866afb33fb/W+NIKE+V2K+RUN.png'),

-- Product 5 Images
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dzul76nlcdmx5hv0xsz6/AIR+FORCE+1+FLYKNIT+2.0.png'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eexxdbnuj1xi1vduztkc/AIR+FORCE+1+FLYKNIT+2.0.png'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/knzqcytfld52vcmkrl96/AIR+FORCE+1+FLYKNIT+2.0.png'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eckrubea0rzraob24xzf/AIR+FORCE+1+FLYKNIT+2.0.png'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ppz4qpqxfvd1ruytb5ox/AIR+FORCE+1+FLYKNIT+2.0.png'),
('c8837c8e-3aeb-4483-81c4-233127a2b58d', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/n8n760mung63zqbiuatq/AIR+FORCE+1+FLYKNIT+2.0.png'),

-- Product 6 Images
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b05367d4-73a7-4a57-bccd-207a9cb08268/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c7b9b6f-1cf9-4ce5-97d6-d07c4354fa28/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78afda24-7348-4e7a-88d0-7856ac33a842/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cdacdfdc-523c-4bea-ac12-b0fbfa391a0b/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18729583-d51c-441e-b711-c917a5ac34b7/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b86db0a-fa61-44a9-8af0-ac5472ff81db/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3275d3af-bf83-4c42-8381-0c7c709563fe/W+NIKE+CORTEZ+VNTG.png'),
('ba43b7a2-1ac5-4a43-a0eb-b034d258b69f', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4413fa6-8a0f-49fb-a01d-f297f0c53ebf/W+NIKE+CORTEZ+VNTG.png'),

-- Product 7 Images
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a3ce45dc-21a3-4b34-ad29-cc09ec142136/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bc3d0920-1f5a-4d02-8c6e-95139818f5b7/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/072a26c8-39e8-43d9-a9ef-d4b59fd27495/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eda69520-2307-4daa-a9df-759c0461bb3d/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f9a8deaa-87f2-4191-92b8-c7661aae48de/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/05c4d7ab-961f-4047-9557-ad19db51b6f6/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d9f59cf-cf57-4d60-8873-51889795f70e/AIR+MONARCH+IV.png'),
('25d3eef0-d854-4d1e-b11b-bec75d5da9c5', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d9f59cf-cf57-4d60-8873-51889795f70e/AIR+MONARCH+IV.png'),

-- Product 8 Images
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a818a131-a5b1-43eb-ac0c-d68d33141819/W+NIKE+DUNK+LOW+PRM+NN.png'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fb2d862-4b4f-4733-af72-b242dca4b9bd/W+NIKE+DUNK+LOW+PRM+NN.png'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/22c7c51d-d2c8-4e30-86c1-3eb04df28214/W+NIKE+DUNK+LOW+PRM+NN.png'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2109b0e6-00e1-48e8-b04f-75084dcdd099/W+NIKE+DUNK+LOW+PRM+NN.png'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7988b767-6fa8-4b16-aee1-c18663921340/W+NIKE+DUNK+LOW+PRM+NN.png'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c303c44-1ad8-4cb3-987c-68028c199cae/W+NIKE+DUNK+LOW+PRM+NN.png'),
('e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2928bba-c40b-40c5-b71f-e06d5a09ca65/W+NIKE+DUNK+LOW+PRM+NN.png'),

-- Product 9 Images
('0d55026d-ff26-487f-9183-064e801a150e', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d4c31751-aa66-45da-a4c3-e10308e1ce6d/NIKE+AIR+MAX+95.png'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38f40aba-89b0-45dc-a147-d3cf086b3492/NIKE+AIR+MAX+95.png'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd8f0071-5cb8-4d29-a731-01b6aa1fbd7e/NIKE+AIR+MAX+95.png'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216aa685-466f-441b-a2cd-88f3cfd0302e/NIKE+AIR+MAX+95.png'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a4198d8e-dad7-4570-9803-e6f897ea7f4d/NIKE+AIR+MAX+95.png'),
('0d55026d-ff26-487f-9183-064e801a150e', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/73daf6c1-afbc-4ea8-808a-c2470120e42f/NIKE+AIR+MAX+95.png'),

-- Product 10 Images
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1fcccc5c-b4ee-4765-9ba1-d2a9a6c08bc6/WMNS+AIR+JORDAN+1+LOW.png'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3a3e9ecf-c214-4f7b-8235-291411964884/WMNS+AIR+JORDAN+1+LOW.png'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6cda5a7e-02a0-4425-bd5d-391660e2648c/WMNS+AIR+JORDAN+1+LOW.png'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2cdb9a9b-0aaf-4623-9f76-bb4b7f6eb277/WMNS+AIR+JORDAN+1+LOW.png'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/63865f89-7b30-4f87-a104-b3c1ea38856b/WMNS+AIR+JORDAN+1+LOW.png'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fb93d987-623e-40ff-94d6-bbe5f96aba9f/WMNS+AIR+JORDAN+1+LOW.png'),
('75875d89-ecf0-4e19-8f38-8b9a39211df0', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/69229e77-be36-40f6-b047-ecf0aa423c73/WMNS+AIR+JORDAN+1+LOW.png');