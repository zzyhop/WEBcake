   function fun(){
       //1.���Ҵ����¼���Ԫ��
       var btn=document.querySelector("div.ssm_box div.ssm_bbox div.ssm_left a.ssm_left_btn1_open")
       //2.ΪԪ�ذ��¼�������
       btn.onclick=function(){
           var btn=this;
           //3.����Ҫ�޸ĵ�Ԫ��
           var con=document.querySelector("div.container-fluid div.header div.ssm_left_content")
           //4.�޸�Ԫ��
           con.style.display="block";
       }
   }

   $(function(){
       $.ajax({
           url:"header.html",
           type:"get",
           success:function(html){
               //console.log(html);
               $(html).replaceAll("#header");
           }
       })
    })



 //$(function(){
 //    //$(".headerpage").load("header.html");
 //    $(".myfooter").load("footer.html");
 //})


