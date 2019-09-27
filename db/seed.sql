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