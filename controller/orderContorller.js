
/**
 * Created by fengb on 2018/4/24.
 */
const modal=require('./../modal/orderModal.js');
module.exports={
  readTheOrder:function(request,response){   //读取订单   /搜索订单也在里面
    console.log("22222222222222");
    let Totalnumber=parseInt(request.body.number);  //每一页显示条数
    let Pagenumber =request.body.Pagenumber;  //页码
    let xiabiao=(Pagenumber-1)*Totalnumber;   //下标
    let user_name=request.body.user_name;     //名字
    let OrderQuerypay = request.body.OrderQuerypay;  //订单状态查询 发货状态；(1 未付款,2 已付款,3 未发货,4 已发货)
    let OrderQuerysend = request.body.OrderQuerysend;  //订单状态查询 发货状态；(1 未付款,2 已付款,3 未发货,4 已发货)
      console.log(OrderQuerypay+"-----"+OrderQuerysend);
      modal.readTheOrder(xiabiao,Totalnumber,user_name,OrderQuerypay,OrderQuerysend,function (err,data) {
        if(err){
          console.log(err) //打印错误
        }else{
          if(data.length>0){
            // console.log(data);
            response.send(data);
          }
        }
      })
  },
  readOneOrder:function(request,response){  //读取某条订单
    let order_id = request.body.order_id;   /*订单编号*/
    modal.readOneOrder(order_id,function(err,data){
        if(err){
          console.log(err)
        }else{
          if(data.length>0){
            console.log(data);
            response.send(data)
          }
        }
    })
  },
  AmendTheOrder:function(request,response){ //修改订单
    let order_postmethod = request.body.order_postmethod; // 送货方式
    let order_name = request.body.order_name; // 收货人
    let order_bill = request.body.order_bill; // 发票
    let order_addr = request.body.order_addr; //  地址
    let order_remark = request.body.order_remark; //  备注
    let order_status = request.body.order_status; // 发货状态
    let order_condition = request.body.order_condition; //  生存状态
    let order_id = request.body.order_id; //订单编号
    modal.AmendTheOrder(order_postmethod, order_name, order_bill, order_addr, order_remark, order_status,order_condition,order_id,function(err,data){
      if(err){
        console.log(err)
      }else{
        if(data.affectedRows!=0){
          response.send({'flag':1,'items':data,'message':'操作成功'});
        }else{
           response.send({'flag':1,'message':"操作失败",'reson':err});
        }
      }
    })
  },
  totalNumber:function(request,response){   //读取全部订单数量
    let user_name=request.body.user_name;     //名字
    let user_id="(SELECT t_user.user_id FROM t_user LIMIT 0,1)";  /* 默认显示第一条*/
    let OrderQuerypay = request.body.OrderQuerypay;  //订单状态查询 发货状态；(1 未付款,2 已付款,3 未发货,4 已发货)
    let OrderQuerysend = request.body.OrderQuerysend;
    modal.totalNumber(user_id,user_name,OrderQuerypay,OrderQuerysend,function (err,data) {
      if(err){
        console.log(err) //打印错误
      }else{
        if(data.length>0){
          // console.log(data);
          response.send(data);
        }
      }
    })
  },
};
