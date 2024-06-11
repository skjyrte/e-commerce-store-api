ALTER TABLE products
ADD CONSTRAINT check_rating_value CHECK (ratingValue >= 0 AND ratingValue <= 5);