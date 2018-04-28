/**
 * Created by fengb on 2018/4/26.
 */
const modal=require('./../modal/ContentModal.js');
module.exports={   //获取爆款推荐
    Bursting:function(request,response){
        modal.Bursting(function (err,data) {
            console.log("1111111111111")
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
        console.log("2222222222222");
        modal.UPDATABursting(function (err,data) {
            if(err){
                console.log(err)
            }else{
                response.send("ok")
            }
        })
    },
    AddBursting:function(request,response){
        console.log("333333333333333333");
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
    NewProduct:function(request,response){  //��ȡ��Ʒ�Ƽ�
        modal.NewProduct(function (err,data) {
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
    }
};