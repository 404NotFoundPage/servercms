/*Created by Administrator on 2018/3/12.*/
//���ӳ�
const mysql=require('mysql');
module.exports.sqlpool=function(){
    let pool={
        config:{
            host:'localhost',
            user:'root',
            password:'root',
            port:3306,
            database:'teamwork'
        },
        connect:function(sql,arr,callback){
            const pool=mysql.createPool(this.config);//����һ�����ӳض���
            pool.getConnection(function(err,connect){
                if(err){
                    console.log(err);
                }else{
                    connect.query(sql,arr,callback);
                }
            });//��ȡ���Ӷ���
        }
    };
    return pool;
};
