ALTER TABLE products
ADD CONSTRAINT check_rating_value CHECK (rating_value >= 0 AND rating_value <= 5),
ADD CONSTRAINT check_price_value CHECK (price >= 0 AND price <= 1000),
ADD CONSTRAINT check_initialPrice_value CHECK (initial_price >= 0 AND initial_price <= 1000);