/*Created by Administrator on 2018/3/12.*/
//用户管理
const modal=require('./../modal/userModal.js');
module.exports={
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
    userpage:function(request,response){
        modal.userpage(function(err,data){
            if(err==null){
                response.send({'flag':1,'num':data[0].num,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })

    },
  //会员管理
  userCancellation:function (request,response) {//会员注销
    let user_id = request.body.user_id;
    console.log(user_id)
    usermodal.userCancellation(user_id,function (err,data) {
      if(err==null){
        response.send({'flag':1,'items':data,'message':'操作成功'});
      }else{
        response.send({'flag':-1,'message':'操作成功','reson':err});
      }
    })

  },
  //会员查看-收货地址
  useraddress:function (request,response) {
    let user_id = request.body.user_id;
    console.log(user_id)
    usermodal.useraddress(user_id,function (err,data) {
      if(err==null){
        response.send({'flag':1,'items':data,'message':'操作成功'});
      }else{
        response.send({'flag':1,'message':'操作成功','reson':err});
      }
    })
  },
  //会员查询-最近购买
  userorder:function (request,response) {
    let size = request.body.size;  //页
    let current = request.body.current; //条
    let user_id = request.body.user_id;
    usermodal.userorder(size, current,user_id,function (err,data) {
      if(err){
       console.log(err)
      }else{
        if(data.length>0){
          response.send(data)
        }else{
          response.send("没有")
        }
      }
    })
  },
  //会员查询-购物车
  usershoppingcart:function (request,response) {
    console.log("2222222222222222")
    let user_id = request.body.user_id;
    usermodal.usershoppingcart(user_id,function (err,data) {
      if(err){
        console.log(err)
      }else{
        if(data.length>0){
          response.send(data)
        }else{
          response.send("没有数据")
        }
      }
    })
  },
  //会员查询-收藏夹
  usercollection:function (request,response) {
    let user_id = request.body.user_id;
    usermodal.usercollection(user_id,function (err,data) {
      if(err==null){
        response.send({'flag':1,'items':data,'message':'操作成功'})
      }else{
        response.send({'flag':1,'message':'操作成功','reson':err});
      }
    })
  }
};