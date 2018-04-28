/**
 * Created by fengb on 2018/4/24.
 */
const mysql=require('mysql');
const db=require('./sqlpool.js');
const mydb = db.sqlpool();
module.exports={
    readTheOrder: function (xiabiao,Totalnumber,user_name,OrderQuerypay,OrderQuerysend,callback) {
        let arr=[xiabiao,Totalnumber];
        let sql="SELECT * FROM t_order,t_user WHERE t_order.user_id=t_user.user_id  ";
        if(user_name){   // 搜索订单的name
            sql="SELECT * FROM t_order,t_user WHERE t_order.user_id=t_user.user_id AND t_user.user_name like ?";
            arr=[user_name,xiabiao,Totalnumber]
        }else{
            sql="SELECT * FROM t_order,t_user WHERE t_order.user_id=t_user.user_id"
        }
        //(0 未付款,1 已付款,0 未发货,1 已发货)
        if(parseInt(OrderQuerypay)==1){
            sql+=" and t_order.order_pay=0"
        }
        if(parseInt(OrderQuerypay)==0){
            sql+=" and t_order.order_pay=1"
        }
        if(parseInt(OrderQuerysend)==1){
            sql+=" and t_order.order_status=0"
        }
        if(parseInt(OrderQuerysend)==0){
            sql+=" and t_order.order_status=1"
        }
        sql+=" limit ?,?";
        mydb.connect(sql,arr,callback);
    },
    readOneOrder:function(order_id,callback){//读取某条订单
        let sql = 'select * from t_order where order_id=?';
        let arr = [order_id];
        mydb.connect(sql,arr,callback)
    },
    AmendTheOrder:function(order_postmethod, order_name, order_bill, order_addr, order_remark, order_status,order_id,callback){//修改订单
        let sql ="UPDATE t_order SET order_postmethod = ?,order_name =?,order_bill=?,order_addr=?,order_remark=?,order_status=? WHERE order_id = ?";
        if(order_remark==''){
            order_remark=null;
        }
        let arr=[order_postmethod, order_name, order_bill, order_addr, order_remark, order_status,order_id];
        mydb.connect(sql,arr,callback)
    },
    totalNumber: function (user_id,user_name,OrderQuerypay,OrderQuerysend,callback) {
        let arr=[];
        let sql="SELECT count(1) FROM t_order,t_user WHERE t_order.user_id=t_user.user_id AND t_user.user_id=? ";
        if(user_name){   // 搜索订单的name
            sql="SELECT count(1) FROM t_order,t_user WHERE t_order.user_id=t_user.user_id AND t_user.user_name like ?";
            arr=[user_name]
        }else{
            sql="SELECT count(1) FROM t_order,t_user WHERE t_order.user_id=t_user.user_id "
        }
        //(0 未付款,1 已付款,0 未发货,1 已发货)
        if(parseInt(OrderQuerypay)==1){
            sql+=" and t_order.order_pay=0"
        }
        if(parseInt(OrderQuerypay)==0){
            sql+=" and t_order.order_pay=1"
        }
        if(parseInt(OrderQuerysend)==1){
            sql+=" and t_order.order_status=0"
        }
        if(parseInt(OrderQuerysend)==0){
            sql+=" and t_order.order_status=1"
        }
        mydb.connect(sql,arr,callback);
    }
};
