CREATE DATABASE IF NOT EXISTS social_media_db;
USE social_media_db;

CREATE TABLE IF NOT EXISTS social_media_usage (
  User_ID VARCHAR(10),
  App VARCHAR(50),
  Daily_Minutes_Spent INT,
  Posts_Per_Day INT,
  Likes_Per_Day INT,
  Follows_Per_Day INT
);
LOAD DATA INFILE '/var/lib/mysql-files/social_media_usage.csv'
INTO TABLE social_media_usage
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;