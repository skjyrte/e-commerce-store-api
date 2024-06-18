CREATE TABLE products (
    id UUID PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(100),
    gender gender_type,
    category shoe_type,
    material material_type,
    season season_type,
    shortDescription VARCHAR(100),
    description VARCHAR(300),
    features TEXT[],
    price DECIMAL(6, 2),
    initialPrice DECIMAL(6, 2),
    ratingReviews INT,
    ratingValue DECIMAL(3, 2),
    thumbnail TEXT,
    color color_type
);
