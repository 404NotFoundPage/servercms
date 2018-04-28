/* Created by lixin on 2018/3/12.*/
const mysql=require('mysql');
const db=require('./sqlpool.js');
const mydb = db.sqlpool();
module.exports={
    // addstudent:function(name,sex,phone,callback){
    //     let sql="insert into student1(s_name,s_sex,s_tel) values(?,?,?)";
    //     mydb.connect(sql,[name,sex,phone],callback);
    // },
    // search:function(name,phone,sex,size,current,callback){
    //     let arr=[];
    //     let sql="select * from student1 where 1=1";;
    //     if(name.length!=0){
    //         name="%"+name+"%";
    //         sql+=" and s_name like ?"
    //         arr.push(name);
    //     }
    //     if(phone.length!=0){
    //         phone="%"+phone+"%";
    //         sql+=" and s_tel like ?";
    //         arr.push(phone);
    //     }
    //     if(sex!="-1"){
    //         sql+=" and s_sex=?";
    //         arr.push(sex)
    //     }
    //     //��������
    //     sql+=" limit ?,?";
    //     let start=(current-1)*size;
    //     arr.push(start,parseInt(size));
    //     mydb.connect(sql,arr,callback);
    // },
    // studentCount:function(name,phone,sex,callback){
    //     let arr=[];
    //     let sql="select count(1) as num from student1 where 1=1";;
    //     if(name.length!=0){
    //         name="%"+name+"%";
    //         sql+=" and s_name like ?"
    //         arr.push(name);
    //     }
    //     if(phone.length!=0){
    //         phone="%"+phone+"%";
    //         sql+=" and s_tel like ?";
    //         arr.push(phone);
    //     }
    //     if(sex!="-1"){
    //         sql+=" and s_sex=?";
    //         arr.push(sex)
    //     }
    //     mydb.connect(sql,arr,callback);
    // },
    // stuEidt:function(id,name,phone,sex,callback){
    //     //let arr=[];
    //     let sql="update student1 set s_name=?,s_tel=?,s_sex=? where s_id=?";
    //     //if(name.length!=0){
    //     //    name="%"+name+"%";
    //     //    sql+=" and s_name like ?"
    //     //    arr.push(name);
    //     //}
    //     //if(phone.length!=0){
    //     //    phone="%"+phone+"%";
    //     //    sql+=" and s_tel like ?";
    //     //    arr.push(phone);
    //     //}
    //     //if(sex!="-1"){
    //     //    sql+=" and s_sex=?";
    //     //    arr.push(sex)
    //     //}
    //     mydb.connect(sql,[name,phone,sex,id],callback);
    // }
};