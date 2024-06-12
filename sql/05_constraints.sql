ALTER TABLE products
ADD CONSTRAINT check_rating_value CHECK (ratingValue >= 0 AND ratingValue <= 5),
ADD CONSTRAINT check_price_value CHECK (price >= 0 AND price <= 1000),
ADD CONSTRAINT check_initialPrice_value CHECK (initialPrice >= 0 AND initialPrice <= 1000);