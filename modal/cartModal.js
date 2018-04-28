/* Created by lixin on 2018/3/12.*/
const mysql=require('mysql');
const db=require('./sqlpool.js');
const mydb = db.sqlpool();
//订单管理
module.exports={
    cart:function(user_id,size,current,callback){//订单管理请求
        let start=(current-1)*size;
        let arr=[parseInt(user_id),start,parseInt(size)];
        let sql="select * from t_shoppingcart  where user_id=? limit ?,?";
        mydb.connect(sql,arr,callback);
    }
};