CREATE TABLE products (
    id UUID PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(100),
    gender gender_type,
    category shoe_type,
    material material_type,
    season season_type,
    short_description VARCHAR(100),
    description VARCHAR(300),
    features TEXT[],
    price DECIMAL(6, 2),
    initial_price DECIMAL(6, 2),
    rating_reviews INT,
    rating_value DECIMAL(3, 2),
    thumbnail TEXT,
    color color_type
);
