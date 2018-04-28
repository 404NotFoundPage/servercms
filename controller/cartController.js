/*Created by lixin on 2018/3/12.*/
const modal=require('./../modal/cartModal.js');
//订单管理
module.exports={
    cart:function(request,response,callback){
        let user_id =request.body.user_id;  //用户编号
        let size=request.body.size;         //每页显示条数
        let current=request.body.current;   //当前页码
        modal.cart(user_id,size,current,function(err,data){
            if(err==null){
                response.send({'flag':1,'items':data,'message':'操作成功'});
            }else{
                response.send({'flag':1,'message':"操作失败",'reson':err});
            }
        })
    }
};