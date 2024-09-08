INSERT INTO users (user_id, email, password, first_name, second_name, address, created_at, updated_at)
VALUES (
    'b6a1a804-2d8e-4dbf-89a4-b95ac2872c1e',
    'john.doe@example.com',                 
    '$2a$10$V9DP2QXdfNp5M8iyA5IG0uFzzqCjqDPGBE.JtcGyVbHo/qId.4SAy',
    'John',                                
    'Doe',                                 
    '123 Main St, Springfield, USA',        
    CURRENT_TIMESTAMP,                     
    CURRENT_TIMESTAMP                      
);