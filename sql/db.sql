CREATE DATABASE SocaialMedia

CREATE TABLE Post {
    post_id INT NOT NULL AUTO_INCREMENT,
    post_title VARCHAR(255) NOT NULL,
    post_created_at TIMESTAMP NOT NULL,
    post_updated_at TIMESTAMP NOT NULL,
    post_picture VARCHAR(255) ,
    post_video_url VARCHAR(255) ,
    user_id INT NOT NULL,
    PRIMARY KEY (post_id)
}

CREATE TABLE users {
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR (255) NOT NULL,
    user_email VARCHAR (255) NOT NULL,
    user_proflie_picture VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    user_created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (user_id)
}

CREATE TABLE Comment {
    comment_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    comment_date TIMESTAMP NOT NULL
    comment_detail TEXT,
    comment_picture VARCHAR(255) ,
    comment_video_url VARCHAR(255),
    PRIMARY KEY (comment_id),
    FOREIGN KEY (user_name),
    FOREIGN KEY (post_id)
}