DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts;


CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_img TEXT);


CREATE TABLE posts(
post_id SERIAL PRIMARY KEY,
title VARCHAR(45),
img TEXT,
content TEXT,
author_id INT REFERENCES users(user_id)
);

SELECT p.id as post_id, p.title, p.img, p.content, u.id as user_id, u.username, u.profile_pic FROM posts p
    JOIN users u ON p.author_id = u.id
    WHERE p.id = $1;




