CREATE TABLE products (
    id UUID PRIMARY KEY,
    gender VARCHAR(10),
    category VARCHAR(50),
    brand VARCHAR(50),
    model VARCHAR(100),
    shortDescription TEXT,
    description TEXT,
    features TEXT[],
    price DECIMAL(10, 2),
    initialPrice DECIMAL(10, 2),
    ratingReviews INT,
    ratingValue DECIMAL(3, 2),
    thumbnail TEXT
);