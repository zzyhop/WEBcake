//引入前一目录下的mysql连接池
const pool=require('../pool.js');
//创建路由器 
const express=require('express');
var Router=express.Router();
//添加路由

   //消息路由
   Router.get("/ReqMsg",function(req,res){
     res.send("测试路由结果显示")
   var obj=req.query
     console.log(obj)
   })

  let obj;
  

//用户登录路由
//url：/login  method：post
Router.get('/login',function(req,res){
    obj=req.query.msg
    var  NewObj=[{goods:"小米8青春版 4+64G",price:"140.15",remain:"99"},{goods:"小米8青春版 4+64G",price:"140.15",remain:"99"}]
    console.log(obj)
    res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log("接收")
    res.send(obj)
    

  //对话框
    Router.get("/Sell",function(req,res){
 
   
  
      res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
      res.send(obj)
    })
  
  













//验证数据是否为空
// var $uname=obj.uname;

// var $upwd=obj.upwd;
//console.log($upwd)
/*if(!$uname){
    res.send("用户不为空");
    return;
}
if(!$upwd){
    res.send("密码不为空");
    return;
}*/
//执行SQL语句，查看是否登录成功（使用用户名和密码两个条件能查询到数据）

    // pool.query('SELECT * FROM zzy_user WHERE uname=?',[$uname],function(err,result){
    // if(err) throw err;
//判断查询的结果（数组）长度是否大于0


//如果大于0，说明查询到数据，有这个用户登录成功
//         if (result.length>0)
//         {
//             if (result[0].upwd==$upwd)
//             {
//                 res.send("登陆成功")
//             }else {
//                 res.send("密码错误")
//             }
//         }else{
//             res.send("不存在用户")
//         }
// });
});

//更改用户
//获取数据，验证是否为空
//执行SQL语句，修改用户表中对应的数据
Router.post('/update',(req,res)=>{
  var obj=req.body;
  var $uid=obj.uid;
  var $email=obj.email
  var $phone=obj.phone;
  var $gender=obj.gender;
  var $user_name=obj.user_name;

  //for in 
  if(!$uid){
    res.send({code:401,msg:'uid required'});
	return;
  }
  if(!$email){
    res.send({code:402,msg:'email required'});
	return;
  }
  if(!$phone){
    res.send({code:403,msg:'phone required'});
	return;
  }
  if(!$gender){
    res.send({code:404,msg:'gender required'});
	return;
  }
  if(!$user_name){
    res.send({code:405,msg:'user_name required'});
  }
  //执行SQL语句
  pool.query('UPDATE zzy_user SET email=?,phone=?,gender=?,user_name=? WHERE uid=?',[$email,$phone,$gender,$user_name,$uid],(err,result)=>{
    if(err) throw err;
	//判断是否更改成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
});



//删除用户   user_delete.html
Router.get('/delete',(req,res)=>{
  var obj=req.query();
  //console.log(obj)
  if (!obj.uid)
  {
	  res.send({code:401,msg:'uid required'});
	  return;
  }
  pool.query('delete from zzy_user where  uid=?',[obj.uid],(err,result)=>{
     if (err) throw err;
     if (result.affectedRows>0)
     {
		 res.send({code:200,msg:'delete suc'})
     }else{ res.send({code:301,msg:'delete err '})}
    
  })
  res.send('删除')
})
	  //4.检索用户(查询)
Router.get('/detail',function(req,res){
  //获取数据
  
  if(req.query.uname!="tom_true"){
    
    res.send([]);
    
}else if(req.query.uname=="tom_true"){
          
            //验证数据是否为空
            //执行SQL语句,查询编号对应的数据
            pool.query('SELECT * FROM zzy_user WHERE uname=?',[req.query.uname],function(err,result){
            
                res.send(result);
              
            });
           
 }
});



//中间跳转页面
Router.get('/jup',function(req,res){
  res.send(`alert("还有{{n}}秒跳到主页")`)
  
  
});

//导出路由器
module.exports=Router;