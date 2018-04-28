const myexpress=require('express');
const router = myexpress.Router();
const controller=require('./../controller/productController.js');
//  商品管理
router.post('/productDetails.do',controller.productDetails);//商品详情管理请求
router.post('/productType.do',controller.productType);//商品类型管理请求
router.post('/addProduct.do',controller.addProduct);//增加商品详情
router.post('/updateProduct.do',controller.updateProduct);//修改商品详情
router.post('/deleteProduct.do',controller.deleteProduct);//删除商品详情

router.post('/addProductText.do',controller.addProductText);//增加商品描述
router.post('/updateProductText.do',controller.updateProductText);//修改商品描述
router.post('/deleteProductText.do',controller.deleteProductText);//删除商品描述

router.post('/addProductImg.do',controller.addProductImg);//增加商品图片
router.post('/updateProductImg.do',controller.updateProductImg);//修改商品图片
router.post('/deleteProductImg.do',controller.deleteProductImg);//删除商品图片

router.post('/addProductType.do',controller.addProductType);//增加商品类型
router.post('/updateProductType.do',controller.updateProductType);//修改商品类型
router.post('/deleteProductType.do',controller.deleteProductType);//删除商品类型

router.post('/producttypenum.do',controller.producttypenum);//获取商品类型数据量（新）

router.post('/productContent.do',controller.productContent)//单件商品详情内容
router.post('/productComments.do',controller.productComments)//单件商品评论内容
router.post('/deleteComments.do',controller.deleteComments)//删除一条评论内容


module.exports=router;