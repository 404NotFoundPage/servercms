/* Created by lixin on 2018/3/12.*/
const mysql=require('mysql');
const db=require('./sqlpool.js');
const mydb = db.sqlpool();
//用户管理
module.exports={
    user:function(size,current,callback){//会员管理请求
        let start=(current-1)*size;
        let arr=[start,parseInt(size)];
        let sql = "select * from t_user limit ?,?";
        mydb.connect(sql,arr,callback);
    },
    userpage:function(callback){//会员管理分页
        let sql="select count(*) as num from t_user";
        mydb.connect(sql,null,callback);
    },
	//注销会员
  userCancellation:function(user_id,callback){
    let sql="DELETE FROM t_user WHERE user_id=?"
    console.log(user_id)
    mydb.connect(sql,[parseInt(user_id)],callback);
  },
  //会员查询-收货地址
  useraddress:function (user_id,callback) {
    let sql="SELECT * FROM t_address WHERE user_id = ?"
    mydb.connect(sql,[parseInt(user_id)],callback);
  },
  //会员查询-最近购买
  userorder:function (size,current,user_id,callback) {
    let start = (current-1)*size;
    console.log(size)
    console.log(start)
    console.log(current)
    let arr = [user_id,start,parseInt(current)];
    let sql="SELECT * FROM t_order,t_orderdetail,t_productinfo  WHERE t_productinfo.pro_id=t_orderdetail.pro_id and   t_order.order_id=t_orderdetail.order_id and user_id = ? AND order_pay =1 ORDER BY order_time DESC limit ?,?"
    mydb.connect(sql,arr,callback);
  },
  //会员查询-购物车
  usershoppingcart:function (user_id,callback) {
    // let sql="SELECT * FROM t_shoppingcart WHERE user_id = ?"
    // let img="SELECT pro_img_url FROM t_shoppingcart,t_productimg WHERE t_shoppingcart.pro_id = t_productimg.pro_id"
    let sql = "SELECT pro_img_url,user_id FROM t_shoppingcart,t_productimg WHERE t_shoppingcart.pro_id = t_productimg.pro_id AND t_shoppingcart.user_id = ?"
    mydb.connect(sql,parseInt(user_id),callback);
  },
  //会员查询-收藏夹
  usercollection:function (user_id,callback) {
    let sql="SELECT * FROM t_collection WHERE user_id = ?"
    mydb.connect(sql,parseInt(user_id),callback);
  },
    //会员订单总数
    userordernumber:function(user_id,callback){
      let sql="select count(*) as num from t_order where user_id=?";
      mydb.connect(sql,parseInt(user_id),callback);
    },
    //用户评论
    usercomment:function(user_id,callback){
      let sql="select pro_img_url,com_reply,com_message_date,com_message_count,pro_name from t_comment,t_productinfo,t_productimg where t_comment.pro_id=t_productinfo.pro_id"+
      " and t_comment.pro_id=t_productimg.pro_id and user_id=?";
      mydb.connect(sql,user_id,callback)
    },
    userdetails:function(user_id,callback){//会员个人信息
      let sql="select * from t_user where user_id=?";
      mydb.connect(sql,user_id,callback)
    },
};