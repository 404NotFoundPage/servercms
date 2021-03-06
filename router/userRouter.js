const myexpress=require('express');
const router = myexpress.Router();
const controller=require('./../controller/userController.js');
// 会员管理
router.post('/user.do',controller.user);//会员管理请求
router.post('/userpage.do',controller.userpage);//会员管理分页
router.post ('/userdetails.do',controller.userdetails);//查看会员个人信息
// 获取会员内容
router.post('/userCancellation.do',controller.userCancellation);  //会员注销
router.post('/useraddress.do',controller.useraddress);  //会员查看-收货地址
router.post('/userorder.do',controller.userorder);   //会员查看-最近购买
router.post('/usershoppingcart.do',controller.usershoppingcart);  //会员查看-购物车
router.post('/usercollection.do',controller.usercollection);  //会员查看-收藏夹

router.post('/userordernumber.do',controller.userordernumber);//会员订单数量
router.post('/usercomment.do',controller.usercomment);//获取用户评论

module.exports=router;