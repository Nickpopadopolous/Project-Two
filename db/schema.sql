CREATE DATABASE leaderboard;

USE leaderboard;

CREATE TABLE leaders (
id int NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
score int NOT NULL,
PRIMARY KEY (id)
);