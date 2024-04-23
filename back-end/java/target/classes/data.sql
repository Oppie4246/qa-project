-- src/main/resources/data.sql
INSERT INTO seller (name, email, property_type, location, price) VALUES 
('John Doe', 'john.doe@example.com', 'House', '123 Main St', 500000),
('Jane Doe', 'jane.doe@example.com', 'Condo', '456 Elm St', 300000);

INSERT INTO buyer (name, email, interest) VALUES 
('Alice Johnson', 'alice.j@example.com', 'House'),
('Bob Smith', 'bob.smith@example.com', 'Condo');
