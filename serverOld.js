const express=require('express');
//引入用户路由器
const userRouter=require('./Router/userRouter.js');
//引入body_parser模块 
const bodyParser=require('body-parser')
//创建服务器
var server=express();
//mysql驱动
const mysql = require("mysql");
//跨域
const cors = require("cors");
//session
const session = require("express-session");
//配置数据库连接池:提高数据效率
var pool = mysql.createPool({
  host:"127.0.0.1",  //数据库地址
  user:"root",       //数据库用户名
  password:"",       //数据库密码
  port:3306,         //数据库端口
  database:"xz",     //数据库名称
  connectionLimit:15 //连接数量
});
//监听端口
server.listen(8040);
console.log("服务器开启")
// //托管静态资源到
// server.use(cors({
//   origin:["http://127.0.0.1:8050","http://localhost:8050"],
//   credentials:true
// }))
// session
server.use(session({
 secret:"128位字符串",
 resave:true,//每次请求更新数据
 saveUninitialized:true
}))
server.use(express.static('cake'));
//解析post数据为对象
server.use(bodyParser.urlencoded({
  extended:false
}));
//将用户模块路由器 装载到/user下
server.use('/user',userRouter);
















