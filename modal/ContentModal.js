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
    NewProduct: function (num,callback) { //获取新品推荐
        let sql='SELECT * FROM t_productinfo WHERE pro_new=1 limit ?,6';
        let arr=[num];
        mydb.connect(sql,arr,callback);
    },
    zhnagsan: function (callback) { //获取新品推荐
        let sql='SELECT count(1) as xx FROM t_productinfo WHERE pro_new=1';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    UPdateNewProduct: function (pro_id,pro_new,callback) { //修改新品推荐  /0为旧商品 1 新商品
        let sql='UPDATE t_productinfo SET pro_new = ? WHERE pro_id = ?';
        let arr=[parseInt(pro_new),parseInt(pro_id)];
        mydb.connect(sql,arr,callback);
    },
    Obtainshop: function (callback) { //获取所有商品
        let sql='SELECT * FROM t_productinfo';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    queyruser: function (callback) { //获取所有用户id
        let sql='SELECT user_id FROM t_user';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    addprouser: function (cass_id,user_id,cass_title,cass_total,cass_condition,cass_img_urll,callback) { //添加案列
        let sql='INSERT INTO t_cass VALUES (?,?,?,?,?,?)';
        let arr=[cass_id,user_id,cass_title,cass_total,cass_img_urll,cass_condition];
        mydb.connect(sql,arr,callback);
    },
    UserCase: function (callback) {//获取用户案例
        let sql='SELECT * FROM t_cass';
        let arr=[];
        mydb.connect(sql,arr,callback);
    },
    UpdataUserCase: function (cass_id,cass_total,cass_condition,callback) {//修改用户案例
        let sql='UPDATE t_cass SET cass_total =? ,cass_condition=? WHERE cass_id =?';
        let arr=[cass_total,cass_condition,cass_id];
        mydb.connect(sql,arr,callback);
    }
};