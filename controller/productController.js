/*Created by Administrator on 2018/3/12.*/
const modal=require('./../modal/productModal.js');
module.exports={
    // 商品管理
    productDetails:function(request,response){//商品详情管理
        let size=request.body.size;
        let current=request.body.current;
        modal.productDetails(size,current,function(err,data){
        if(err==null){
            response.send({'flag':1,'items':data,'message':'操作成功'});
        }else{
            response.send({'flag':1,'message':"操作失败",'reson':err});
        }
        });
    },
    productType:function(request,response){//商品类型管理
        let size=request.body.size;
        let current=request.body.current;
        modal.productType(size,current,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })
    },

    getProductNum:function(request,response){//获取商品数据总量
        modal.getProductNum(function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })
    },
    addProduct:function(request,response){//增加商品详情
        let obj={};
        if(request.body.pro_id!=undefined){
            obj.pro_id=request.body.pro_id;
        }
        if(request.body.pro_type_id!=undefined){
            obj.pro_type_id=request.body.pro_type_id;
        }
        if(request.body.pro_name!=undefined){
            obj.pro_name=request.body.pro_name;
        }
        if(request.body.pro_amount!=undefined){
            obj.pro_amount=request.body.pro_amount;
        }
        if(request.body.pro_price!=undefined){
            obj.pro_price=request.body.pro_price;
        }
        if(request.body.pro_discount!=undefined){
            obj.pro_discount=request.body.pro_discount;
        }
        if(request.body.pro_size!=undefined){
            obj.pro_size=request.body.pro_size;
        }
        if(request.body.pro_deal_amount!=undefined){
            obj.pro_deal_amount=request.body.pro_deal_amount;
        }
        if(request.body.pro_look_amount!=undefined){
            obj.pro_look_amount=request.body.pro_look_amount;
        }
        if(request.body.pro_storetime!=undefined){
            obj.pro_storetime=request.body.pro_storetime;
        }
        if(request.body.pro_info!=undefined){
            obj.pro_info=request.body.pro_info;
        }
        if(request.body.pro_hot!=undefined){
            obj.pro_hot=request.body.pro_hot;
        }
        if(request.body.pro_bao!=undefined){
            obj.pro_bao=request.body.pro_bao;
        }
        if(request.body.pro_new!=undefined){
            obj.pro_new=request.body.pro_new;
        }
        if(request.body.pro_condition!=undefined){
            obj.pro_condition=request.body.pro_condition;
        }
        modal.addProduct(obj,function(err,data){
            if(err==null){
                response.send(data);
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    searchProductType:function(request,response){//搜索商品类型
        let pro_type_condition=request.body.pro_type_condition;
        let pro_type_name=request.body.pro_type_name;
        let obj={};
        if(pro_type_condition!=null&&pro_type_condition!=''&&pro_type_condition!=undefined){
            obj.pro_type_condition=pro_type_condition
        }
        if(pro_type_name!=''&&pro_type_name!=undefined){
            obj.pro_type_name=pro_type_name
        }
        obj.size=request.body.size;
        obj.current=request.body.current;
        modal.searchProductType(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    searchProduct:function(request,response){
        let pro_condition=request.body.pro_condition;
        let pro_name=request.body.pro_name;
        let obj={};
        obj.size=request.body.size;
        obj.current=request.body.current;
        if(pro_condition!=null&&pro_condition!=''&&pro_condition!=undefined){
            obj.pro_condition=pro_condition
        }
        if(pro_name!=''&&pro_name!=undefined){
            obj.pro_name=pro_name
        }
        modal.searchProduct(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    updateProduct:function(request,response){//修改商品详情
        let obj={};
        if(request.body.pro_id!=undefined){
            obj.pro_id=request.body.pro_id;
        }
        if(request.body.pro_type_id!=undefined){
            obj.pro_type_id=request.body.pro_type_id;
        }
        if(request.body.pro_name!=undefined){
            obj.pro_name=request.body.pro_name;
        }
        if(request.body.pro_amount!=undefined){
            obj.pro_amount=request.body.pro_amount;
        }
        if(request.body.pro_price!=undefined){
            obj.pro_price=request.body.pro_price;
        }
        if(request.body.pro_discount!=undefined){
            obj.pro_discount=request.body.pro_discount;
        }
        if(request.body.pro_size!=undefined){
            obj.pro_size=request.body.pro_size;
        }
        if(request.body.pro_deal_amount!=undefined){
            obj.pro_deal_amount=request.body.pro_deal_amount;
        }
        if(request.body.pro_look_amount!=undefined){
            obj.pro_look_amount=request.body.pro_look_amount;
        }
        if(request.body.pro_storetime!=undefined){
            obj.pro_storetime=request.body.pro_storetime;
        }
        if(request.body.pro_info!=undefined){
            obj.pro_info=request.body.pro_info;
        }
        if(request.body.pro_hot!=undefined){
            obj.pro_hot=request.body.pro_hot;
        }
        if(request.body.pro_bao!=undefined){
            obj.pro_bao=request.body.pro_bao;
        }
        if(request.body.pro_new!=undefined){
            obj.pro_new=request.body.pro_new;
        }
        if(request.body.pro_condition!=undefined){
            obj.pro_condition=request.body.pro_condition;
        }
        modal.updateProduct(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
            
        })
    },
    deleteProduct:function(request,response){//删除商品详情
        let pro_id = request.body.pro_id;
        modal.deleteProduct(pro_id,function(err,data){
            console.log(err);
            console.log(data);
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    addProductText:function(request,response){//增加商品描述
        let obj={};
        if(request.body.pro_id!=undefined){
            obj.pro_id=request.body.pro_id;
        }
        if(request.body.pro_text_title!=undefined){
            obj.pro_text_title=request.body.pro_text_title;
        }
        if(request.body.pro_text_discribe!=undefined){
            obj.pro_text_discribe=request.body.pro_text_discribe;
        }
        if(request.body.pro_text_condition!=undefined){
            obj.pro_text_condition=request.body.pro_text_condition;
        }
        modal.addProductText(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    updateProductText:function(request,response){//修改商品描述
        let obj={};
        if(request.body.pro_text_id!=undefined){
            obj.pro_text_id=request.body.pro_text_id;
        }
        if(request.body.pro_id!=undefined){
            obj.pro_id=request.body.pro_id;
        }
        if(request.body.pro_text_title!=undefined){
            obj.pro_text_title=request.body.pro_text_title;
        }
        if(request.body.pro_text_discribe!=undefined){
            obj.pro_text_discribe=request.body.pro_text_discribe;
        }
        if(request.body.pro_text_condition!=undefined){
            obj.pro_text_condition=request.body.pro_text_condition;
        }
        modal.updateProductText(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    deleteProductText:function(request,response){//删除商品描述
        let pro_text_id = request.body.pro_text_id;
        modal.deleteProductText(pro_text_id,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    addProductImg:function(request,response){//增加商品描述
        let obj={};
        if(request.body.pro_id!=undefined){
            obj.pro_id=request.body.pro_id;
        }
        if(request.body.pro_img_url!=undefined){
            obj.pro_img_url=request.body.pro_img_url;
        }
        if(request.body.pro_img_status!=undefined){
            obj.pro_img_status=request.body.pro_img_status;
        }
        if(request.body.pro_img_coditon!=undefined){
            obj.pro_img_coditon=request.body.pro_img_coditon;
        }
        modal.addProductImg(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    updateProductImg:function(request,response){//修改商品图片
        let obj={};
        if(request.body.pro_id!=undefined){
            obj.pro_id=request.body.pro_id;
        }
        if(request.body.pro_img_id!=undefined){
            obj.pro_img_id=request.body.pro_img_id;
        }
        if(request.body.pro_img_url!=undefined){
            obj.pro_img_url=request.body.pro_img_url;
        }
        if(request.body.pro_img_status!=undefined){
            obj.pro_img_status=request.body.pro_img_status;
        }
        if(request.body.pro_img_coditon!=undefined){
            obj.pro_img_coditon=request.body.pro_img_coditon;
        }
        modal.updateProductImg(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    deleteProductImg:function(request,response){//删除商品描述
        let pro_img_id = request.body.pro_img_id;
        modal.deleteProductImg(pro_img_id,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    addProductType:function(request,response){//增加商品描述
        let obj={};
        if(request.body.pro_type_name!=undefined){
            obj.pro_type_name=request.body.pro_type_name;
        }
        if(request.body.pro_type_condition!=undefined){
            obj.pro_type_condition=request.body.pro_type_condition;
        }
        modal.addProductType(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    updateProductType:function(request,response){//修改商品图片
        let obj={};
        if(request.body.pro_type_id!=undefined){
            obj.pro_type_id=request.body.pro_type_id;
        }
        if(request.body.pro_type_name!=undefined){
            obj.pro_type_name=request.body.pro_type_name;
        }
        if(request.body.pro_type_condition!=undefined){
            obj.pro_type_condition=request.body.pro_type_condition;
        }
        modal.updateProductType(obj,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':'-1','message':'操作失败','reson':err})
            }
            
        })
    },
    deleteProductType:function(request,response){//删除商品描述
        let pro_type_id = request.body.pro_type_id;
        modal.deleteProductType(pro_type_id,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    user:function(request,response){
        let size=request.body.size;
        let current=request.body.current;
        modal.user(size,current,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })
    },
    order:function(request,response,callback){
        let size=request.body.size;
        let current=request.body.current;
        modal.order(size,current,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })
    },
    login:function (req,res) {
        let username = req.body.username;
        let password = req.body.password;
        modal.login(username,password,function (err,data) {
            if(!err){
                res.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                res.send({'flag':0,'message':"操作失败",'reson':err});
            }
        })
    },
    headuserId:function (req,res) {
        let user_id = req.body.user_id;
        modal.headuserId(user_id,function (err,data) {
            if(!err){
                res.send({'flag':1,'items':data,'message':'操作成功'})
            }
        })
    },
    producttypenum:function(request,response){
        modal.producttypenum(function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'})
            }else{
                response.send({'flag':-1,'message':'操作失败','reson':err})
            }
        })
    },
    getSearchProductNum:function(request,response){
        let pro_name=request.body.pro_name;
        let pro_condition=request.body.pro_condition;
        modal.getSearchProductNum(pro_name,pro_condition,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })
    },
    productContent:function(request,response){//单件商品详情内容
        let pro_id=request.body.pro_id;
        console.log(pro_id);
        modal.productContent(pro_id,function(err,data){
            if(!err){
                response.send(data)
            }else{
                console.log(err);
            }
        })
    },
    productComments:function(request,response){//单件商品评论内容
        let pro_id=request.body.pro_id;
        console.log(pro_id);
        modal.productComments(pro_id,function(err,data){
            if(!err){
                response.send(data)
            }else{
                console.log(err);
            }
        })
    },
    deleteComments:function(request,response){//删除一条评论内容
        let com_id=request.body.com_id;
        console.log(com_id);
        modal.deleteComments(com_id,function(err,data){
            if(!err){
                response.send(data)
            }else{
                console.log(err);
            }
        })
    },
    submitComments:function(request,response){//提交一条评论内容回复
        let com_id=request.body.com_id;
        let content=request.body.content2;
        console.log(com_id);
        modal.submitComments(content,com_id,function(err,data){
            if(!err){
                response.send(data)
            }else{
                console.log(err);
            }
        })
    }
};