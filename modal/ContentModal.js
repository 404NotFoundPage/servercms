/**
 * Created by fengb on 2018/4/26.
 */
const mysql=require('mysql');
const db=require('./sqlpool.js');
const mydb = db.sqlpool();
module.exports={
    Bursting: function (callback) {//获取爆款
        let sql='SELECT * FROM t_productinfo WHERE pro_bao=1';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    UPDATABursting: function (callback) {//添加爆款
        let sql='UPDATE t_productinfo SET pro_bao=0 WHERE pro_bao=1 ORDER BY pro_id ASC LIMIT 1';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    AddBursting: function (pro_bao,pro_id,callback) {//添加爆款
        let sql='UPDATE t_productinfo SET pro_bao=? WHERE pro_id=?';
        let arr=[parseInt(pro_bao),parseInt(pro_id)];
        mydb.connect(sql,arr,callback);
    },xiugaibaokuan: function (pro_bao,pro_id,callback) {//修改爆款
        let sql='UPDATE t_productinfo SET pro_bao=? WHERE pro_id=?';
        let arr=[parseInt(pro_bao),parseInt(pro_id)];
        mydb.connect(sql,arr,callback);
    },
    ObtainGoods: function (callback) {//获取不是爆款商品
        let sql='SELECT * FROM t_productinfo WHERE pro_bao=0';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    NewProduct: function (callback) { //获取新品推荐
        let sql='SELECT * FROM t_productinfo WHERE pro_new=1';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    UserCase: function (callback) {//获取用户案例
        let sql='SELECT * FROM t_cass';
        let arr=[];
        mydb.connect(sql,arr,callback);
    }
};