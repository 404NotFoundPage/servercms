/* Created by lixin on 2018/3/12.*/
const mysql=require('mysql');
const db=require('./sqlpool.js');
const mydb = db.sqlpool();
module.exports={
    //商品管理
    productDetails:function(size,current,callback){//商品详情管理请求
        let sql="select * from t_productinfo,t_productimg,t_producttext where t_productinfo.pro_id=t_productimg.pro_id "+
        " and t_productinfo.pro_id=t_producttext.pro_id";
        sql+=" limit ?,?";
        let start=(current-1)*size;
        mydb.connect(sql,[start,parseInt(size)],callback);
    },
    productType:function(size,current,callback){//商品类型管理
        let start=(current-1)*size;
        let arr=[start,parseInt(size)];
        let sql="select * from t_producttype limit ?,?";
        mydb.connect(sql,arr,callback);
    },
    getProductNum:function(callback){//获取商品数据总量
        let sql="select count(*) as num from t_productinfo,t_productimg,t_producttext where t_productinfo.pro_id=t_productimg.pro_id "+
        " and t_productinfo.pro_id=t_producttext.pro_id";
        mydb.connect(sql,null,callback);
    },
    getSearchProductNum:function(pro_name,pro_condition,callback){//获取搜索数据总量
        let sql="select count(*) as num from t_productinfo,t_productimg,t_producttext where "+
        " t_productinfo.pro_id=t_productimg.pro_id and t_productinfo.pro_id=t_producttext.pro_id";
        if(pro_condition!=undefined){
            sql+=" and pro_condition=?"
        }
        if(pro_name!=undefined){
            sql+=" and pro_name like '%"+pro_name+"%'"
        }
        mydb.connect(sql,pro_condition,callback);
    },
    addProduct:function(obj,callback){//增加商品详情
        let arr=[];
        let sqlstr='';
        let str='';
        //pro_id自动增长
        // if(obj.pro_id!=undefined){
        //     sqlstr +='pro_id,'
        //     arr.push(parseInt(obj.pro_id));
        // }
        if(obj.pro_type_id!=undefined){
            sqlstr +=" pro_type_id,";
            arr.push(parseInt(obj.pro_type_id));
        }
        if(obj.pro_name!=undefined){
            sqlstr +="pro_name,";
            arr.push(obj.pro_name)
        }
        if(obj.pro_amount!=undefined){
            sqlstr +="pro_amount,";
            arr.push(parseInt(obj.pro_amount));
        }
        if(obj.pro_price!=undefined){
            sqlstr +="pro_price,";
            arr.push(obj.pro_price)
        }
        if(obj.pro_discount!=undefined){
            sqlstr +="pro_discount,";
            arr.push(obj.pro_discount)
        }
        if(obj.pro_size!=undefined){
            sqlstr +="pro_size,";
            arr.push(obj.pro_size)
        }
        if(obj.pro_deal_amount!=undefined){
            sqlstr +="pro_deal_amount,";
            arr.push(parseInt(obj.pro_deal_amount));
        }
        if(obj.pro_look_amount!=undefined){
            sqlstr +="pro_look_amount,";
            arr.push(parseInt(obj.pro_look_amount))
        }
        if(obj.pro_storetime!=undefined){
            sqlstr +="pro_storetime,";
            arr.push("'"+obj.pro_storetime+"'")
        }
        if(obj.pro_info!=undefined){
            sqlstr +="pro_info,";
            arr.push("'"+obj.pro_info+"'")
        }
        if(obj.pro_hot!=undefined){
            sqlstr +="pro_hot,";
            arr.push(parseInt(obj.pro_hot))
        }
        if(obj.pro_bao!=undefined){
            sqlstr +="pro_bao,";
            arr.push(parseInt(obj.pro_bao))
        }
        if(obj.pro_new!=undefined){
            sqlstr +="pro_new,";
            arr.push(parseInt(obj.pro_new))
        }
        if(obj.pro_condition!=undefined){
            sqlstr +="pro_condition,";
            arr.push(parseInt(obj.pro_condition))
        }
        for(var i=0;i<arr.length;i++){
            str += arr[i]+','
        }
        
        sqlstr=sqlstr.substring(0,sqlstr.length-1);
        str=str.substring(0,str.length-1);
        let sql="insert into t_productinfo("+sqlstr+")  values("+str+")"
        mydb.connect(sql,null,callback);
    },
    searchProductType:function(obj,callback){
        let arr=[]
        let sql="select * from t_producttype where 1=1";
        if(obj.pro_type_condition!=undefined){
            arr.push(obj.pro_type_condition);
            sql+=" and pro_type_condition=?"
        }
        if(obj.pro_type_name!=undefined){
            sql+=" and pro_type_name like '%"+obj.pro_type_name+"%'"
        }
        sql+=" limit "+(obj.current-1)*obj.size+","+obj.size+""
        mydb.connect(sql,arr,callback)
    },
    searchProduct:function(obj,callback){
        let arr=[]
        let sql="select * from t_productinfo,t_productimg,t_producttext where "+
        " t_productinfo.pro_id=t_productimg.pro_id and t_productinfo.pro_id=t_producttext.pro_id";
        if(obj.pro_condition!=undefined){
            arr.push(obj.pro_condition);
            sql+=" and pro_condition=?"
        }
        if(obj.pro_name!=undefined){
            sql+=" and pro_name like '%"+obj.pro_name+"%'"
        }
        sql+=" limit "+(obj.current-1)*obj.size+","+obj.size+""
        mydb.connect(sql,arr,callback)
    },
    updateProduct:function(obj,callback){//修改商品详情
        let arr=[];
        let sql="update t_productinfo set ";
        if(obj.pro_type_id!=undefined){
            sql +=" pro_type_id=?,";
            arr.push(parseInt(obj.pro_type_id));
        }
        if(obj.pro_name!=undefined){
            sql +="pro_name=?,";
            arr.push(obj.pro_name)
        }
        if(obj.pro_amount!=undefined){
            sql +="pro_amount=?,";
            arr.push(parseInt(obj.pro_amount));
        }
        if(obj.pro_price!=undefined){
            sql +="pro_price=?,";
            arr.push(obj.pro_price)
        }
        if(obj.pro_discount!=undefined){
            sql +="pro_discount=?,";
            arr.push(obj.pro_discount)
        }
        if(obj.pro_size!=undefined){
            sql +="pro_size=?,";
            arr.push(obj.pro_size)
        }
        if(obj.pro_deal_amount!=undefined){
            sql +="pro_deal_amount=?,";
            arr.push(parseInt(obj.pro_deal_amount));
        }
        if(obj.pro_look_amount!=undefined){
            sql +="pro_look_amount=?,";
            arr.push(parseInt(obj.pro_look_amount))
        }
        if(obj.pro_storetime!=undefined){
            sql +="pro_storetime=?,";
            arr.push(obj.pro_storetime)
        }
        if(obj.pro_info!=undefined){
            sql +="pro_info=?,";
            arr.push("'"+obj.pro_info+"'")
        }
        if(obj.pro_hot!=undefined){
            sql +="pro_hot=?,";
            arr.push(parseInt(obj.pro_hot))
        }
        if(obj.pro_bao!=undefined){
            sql +="pro_bao=?,";
            arr.push(parseInt(obj.pro_bao))
        }
        if(obj.pro_new!=undefined){
            sql +="pro_new=?,";
            arr.push(parseInt(obj.pro_new))
        }
        if(obj.pro_condition!=undefined){
            sql +="pro_condition=?,";
            arr.push(parseInt(obj.pro_condition))
        }
        sql=sql.substring(0,sql.length-1);
        sql+=" where pro_id="+parseInt(obj.pro_id);
        mydb.connect(sql,arr,callback);
    },
    deleteProduct:function(pro_id,callback){//删除商品详情
        let sql="delete from  t_productinfo where pro_id=? "
        mydb.connect(sql,pro_id,callback);
    },
    addProductText:function(obj,callback){//增加商品详情
        let arr=[];
        let sqlstr='';
        let str='';
        if(obj.pro_id!=undefined){
            sqlstr +="pro_id,";
            arr.push(obj.pro_id)
        }
        if(obj.pro_text_title!=undefined){
            sqlstr +="pro_text_title,";
            arr.push("'"+obj.pro_text_title+"'");
        }
        if(obj.pro_text_discribe!=undefined){
            sqlstr +="pro_text_discribe,";
            arr.push("'"+obj.pro_text_discribe+"'")
        }
        if(obj.pro_text_condition!=undefined){
            sqlstr +="pro_text_condition,";
            arr.push(obj.pro_text_condition)
        }
        for(var i=0;i<arr.length;i++){
            str += arr[i]+','
        }
        sqlstr=sqlstr.substring(0,sqlstr.length-1);
        str=str.substring(0,str.length-1);
        let sql="insert into t_producttext("+sqlstr+")  values("+str+")"
        mydb.connect(sql,null,callback);
    },
    updateProductText:function(obj,callback){//增加商品描述
        let arr=[];
        let sql="update t_producttext set "
        if(obj.pro_id!=undefined){
            sql +="pro_id=?,";
            arr.push(obj.pro_id)
        }
        if(obj.pro_text_title!=undefined){
            sql +="pro_text_title=?,";
            arr.push("'"+obj.pro_text_title+"'");
        }
        if(obj.pro_text_discribe!=undefined){
            sql +="pro_text_discribe=?,";
            arr.push("'"+obj.pro_text_discribe+"'")
        }
        if(obj.pro_text_condition!=undefined){
            sql +="pro_text_condition=?,";
            arr.push(obj.pro_text_condition)
        }
        
        sql=sql.substring(0,sql.length-1);
        sql+=" where pro_text_id="+obj.pro_text_id;
        mydb.connect(sql,arr,callback);
    },
    deleteProductText:function(pro_text_id,callback){//删除商品详情
        let sql="update t_producttext set pro_text_condition=1 where pro_text_id=?"
        mydb.connect(sql,parseInt(pro_text_id),callback);
    },
    addProductImg:function(obj,callback){//增加商品图片
        let arr=[];
        let sqlstr='';
        let str='';
        if(obj.pro_id!=undefined){
            sqlstr +="pro_id,";
            arr.push(obj.pro_id)
        }
        if(obj.pro_img_url!=undefined){
            sqlstr +="pro_img_url,";
            arr.push("'"+obj.pro_img_url+"'");
        }
        if(obj.pro_img_status!=undefined){
            sqlstr +="pro_img_status,";
            arr.push("'"+obj.pro_img_status+"'")
        }
        if(obj.pro_img_coditon!=undefined){
            sqlstr +="pro_img_coditon,";
            arr.push(obj.pro_img_coditon)
        }
        for(var i=0;i<arr.length;i++){
            str += arr[i]+','
        }
        
        sqlstr=sqlstr.substring(0,sqlstr.length-1);
        str=str.substring(0,str.length-1);
        let sql="insert into t_productimg("+sqlstr+")  values("+str+")"
        mydb.connect(sql,null,callback);
    },
    updateProductImg:function(obj,callback){//增加商品图片
        let arr=[];
        let sql="update t_productimg set "
        if(obj.pro_id!=undefined){
            sql +="pro_id=?,";
            arr.push(obj.pro_id)
        }
        if(obj.pro_img_url!=undefined){
            sql +="pro_img_url=?,";
            arr.push(obj.pro_img_url);
        }
        if(obj.pro_img_status!=undefined){
            sql +="pro_img_status=?,";
            arr.push(obj.pro_img_status)
        }
        if(obj.pro_img_coditon!=undefined){
            sql +="pro_img_coditon=?,";
            arr.push(obj.pro_img_coditon)
        }
        
        sql=sql.substring(0,sql.length-1);
        sql+=" where pro_img_id="+obj.pro_img_id;
        console.log(sql)
        console.log(arr)
        mydb.connect(sql,arr,callback);
    },
    deleteProductImg:function(pro_img_id,callback){//删除商品详情
        let sql="update t_productimg set pro_img_coditon=1 where pro_img_id=?"
        mydb.connect(sql,parseInt(pro_img_id),callback);
    },
    addProductType:function(obj,callback){//增加商品图片
        let arr=[];
        let sqlstr='';
        let str='';
        if(obj.pro_type_name!=undefined){
            sqlstr +="pro_type_name,";
            arr.push("'"+obj.pro_type_name+"'");
        }
        if(obj.pro_type_condition!=undefined){
            sqlstr +="pro_type_condition,";
            arr.push(obj.pro_type_condition)
        }
        for(var i=0;i<arr.length;i++){
            str += arr[i]+','
        }
        
        sqlstr=sqlstr.substring(0,sqlstr.length-1);
        str=str.substring(0,str.length-1);
        let sql="insert into t_producttype("+sqlstr+")  values("+str+")"
        mydb.connect(sql,null,callback);
    },
    updateProductType:function(obj,callback){//增加商品图片
        let arr=[];
        let sql="update t_producttype set "
        if(obj.pro_type_name!=undefined){
            sql +="pro_type_name=?,";
            arr.push(obj.pro_type_name);
        }
        if(obj.pro_type_condition!=undefined){
            sql +="pro_type_condition=?,";
            arr.push(obj.pro_type_condition)
        }
        sql=sql.substring(0,sql.length-1);
        sql+=" where pro_type_id="+obj.pro_type_id;
        mydb.connect(sql,arr,callback);
    },
    deleteProductType:function(pro_type_id,callback){//删除商品类型（新）
        let sql="delete from t_producttype where pro_type_id=?"
        mydb.connect(sql,pro_type_id,callback)
    },
    user:function(size,current,callback){//会员管理请求
        let start=(current-1)*size;
        let arr=[start,parseInt(size)];
        let sql = "select * from t_user limit ?,?";
        mydb.connect(sql,arr,callback);
    },
    order:function(size,current,callback){//订单管理请求
        let start=(current-1)*size;
        let arr=[start,parseInt(size)];
        let sql="update * from t_order,t_orderdetail limit ?,?";
        mydb.connect(sql,arr,callback);
    },
    login:function (username,password,callback) {//管理员登录
        let arr =[username,password]
        let sql = "select * from t_admin where user_login= ? and user_psw= ?"
        mydb.connect(sql,arr,callback);
    },
    headuserId:function (user_id,callback) {
        let arr=[user_id];
        let sql="select * from t_admin where user_id=?";
        mydb.connect(sql,arr,callback);
    },
    producttypenum:function(callback){//商品类型数据总量（新）
        let sql="select count(*) as num from t_producttype";
        mydb.connect(sql,null,callback);
    },
    productContent:function(pro_id,callback){
        let arr = [pro_id]
        console.log(pro_id)
        let sql='SELECT * FROM t_productinfo AS a LEFT JOIN (SELECT pro_id AS apro_id,pro_img_url FROM t_productimg WHERE pro_img_status=1) AS b ON a.pro_id=b.apro_id LEFT JOIN t_producttype AS g ON a.pro_type_id=g.pro_type_id WHERE a.pro_id=?'
        mydb.connect(sql,arr,callback);
    },
    productComments:function(pro_id,callback){
        let arr = [pro_id]
        let sql='SELECT * FROM t_comment left join t_user on t_user.user_id=t_comment.user_id WHERE pro_id=?'
        mydb.connect(sql,arr,callback);
    },
    deleteComments:function(com_id,callback){//删除一条评论
        let sql="delete from t_comment where com_id=?"
        mydb.connect(sql,parseInt(com_id),callback);
    }
};