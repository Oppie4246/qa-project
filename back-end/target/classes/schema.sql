-- src/main/resources/schema.sql
CREATE TABLE IF NOT EXISTS seller (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    property_type VARCHAR(255),
    location VARCHAR(255),
    price DECIMAL
);

CREATE TABLE IF NOT EXISTS buyer (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    interest VARCHAR(255)
);
