/**
 * Created by fengb on 2018/5/4.
 */
const uploadController =require('./../controller/upload.js');

const myexpress=require('express');
const router = myexpress.Router();

router.post('/upload.do',uploadController.uploadFile);
module.exports=router;

