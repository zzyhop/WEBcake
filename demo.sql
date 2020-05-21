
#z设置服务器的编码
SET NAMES UTF8;
#丢弃数据库
DROP DATABASE IF EXISTS zzy;
#创建数据库
CREATE DATABASE zzy CHARSET=UTF8;
#进入数据库
USE zzy;

CREATE TABLE zzy_user(
        uid INT PRIMARY KEY AUTO_INCREMENT,
        uname VARCHAR(32),
        upwd VARCHAR(32),
        email VARCHAR(64),
        phone VARCHAR(16),
        avatar VARCHAR(128),        #头像图片路径
        user_name VARCHAR(32),      #用户名，如王小明
        gender INT    
);

INSERT INTO zzy_user VALUES
(NULL, 'tom', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '小汤', '1'),
(NULL, 'Crystal', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '小科', '0'),
(NULL, 'Maisie', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '小梅', '1'),
(NULL, 'Lukas', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '小卢', '0');