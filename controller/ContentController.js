/**
 * Created by fengb on 2018/4/26.
 */
const modal=require('./../modal/ContentModal.js');
module.exports={   //获取爆款推荐
    Bursting:function(request,response){
        modal.Bursting(function (err,data) {
            if(err){
                console.log(err)
            }else{
                if(data.length>0){
                    response.send(data)
                }else{
                    response.send(data)
                }
            }
        })
    },
    UPDATABursting:function(request,response){
        modal.UPDATABursting(function (err,data) {
            if(err){
                console.log(err)
            }else{
                response.send("ok")
            }
        })
    },
    AddBursting:function(request,response){
        let pro_bao=request.body.pro_bao;   //是否爆款 /doge   1爆款 0 不是爆款
        let pro_id=request.body.pro_id;    // 商品id  /doge
        modal.AddBursting(pro_bao,pro_id,function (err,data) {
            if(err){
                console.log(err)
            }else{

                response.send("ok")
            }
        })
    },xiugaibaokuan:function(request,response){
        let pro_bao=request.body.pro_bao;   //修改是否爆款
        let pro_id=request.body.pro_id;   //商品id
        console.log(pro_bao,
        pro_id);
        modal.xiugaibaokuan(pro_bao,pro_id,function (err,data) {
            if(err){
                console.log(err)
            }else{
                response.send("ok")
            }
        })
    },
    ObtainGoods:function(request,response){
        modal.ObtainGoods(function (err,data) {
            if(err){
                console.log(err)
            }else{
                if(data.length>0){
                    response.send(data)
                }else{
                    response.send(data)
                }
            }
        })
    },
    NewProduct:function(request,response){  //获取新品推荐
        let size=request.body.size;
        let num =(parseInt(size)-1)*6;
        modal.NewProduct(num,function (err,data) {
            if(err){
                console.log(err)
            }else{
                if(data.length>0){
                    response.send(data)
                }else{
                    response.send(data)
                }
            }
        })
    },
    zhnagsan:function(request,response){  //获取新品推荐
        modal.zhnagsan(function (err,data) {
            if(err){
                console.log(err)
            }else{
                if(data.length>0){
                    console.log(data);
                    response.send(data)
                }else{
                    response.send(data)
                }
            }
        })
    },
    UPdateNewProduct:function(request,response){  //修改新品  /0为旧商品 1 新商品
        let pro_id = request.body.pro_id;  // 商品id
        let pro_new = request.body.pro_new; // 商品新旧状态
        modal.UPdateNewProduct(pro_id,pro_new,function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(data);
                response.send(data)
            }
        })
    },
    Obtainshop:function(request,response){  //获取所有商品
        modal.Obtainshop(function (err,data) {
            if(err){
                console.log(err)
            }else{
                response.send(data)
            }
        })
    },
    queyruser:function(request,response){  //获取所有用户id
        modal.queyruser(function (err,data) {
            if(err){
                console.log(err)
            }else{
                console.log(data)
                response.send(data);

            }
        })
    },
    addprouser:function(request,response){  //添加案例
        let cass_id=request.body.cass_id;
        let user_id=request.body.user_id;
        let cass_title=request.body.cass_title;
        let cass_total=request.body.cass_total;
        let cass_condition=request.body.cass_condition;
        let cass_img_urll=request.body.cass_img_urll;
        modal.addprouser(cass_id,user_id,cass_title,cass_total,cass_condition,cass_img_urll,function (err,data) {
            if(err){
                console.log(err)
            }else{
                response.send(data);

            }
        })
    },
    UserCase:function(request,response){  //��ȡ��Ʒ�Ƽ�
        modal.UserCase(function (err,data) {
            if(err){
                console.log(err)
            }else{
                if(data.length>0){
                    response.send(data)
                }else{
                    response.send(data)
                }
            }
        })
    },
    UpdataUserCase:function(request,response){  //修改用户案例  修改上架状态和用户案例
        let  cass_id=request.body.cass_id;
        let  cass_total=request.body.cass_total;
        let  cass_condition=request.body.cass_condition;
        modal.UpdataUserCase(cass_id,cass_total,cass_condition,function (err,data) {
            if(err){
                console.log(err)
            }else{
                response.send(data)
            }
        })
    }
};