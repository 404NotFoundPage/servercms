/**
 * Created by fengb on 2018/5/4.
 */

const muilter = require('./../common/multerUtil.js');
module.exports={
    uploadFile:function(req,res){
        //multer有single()中的名称必须是表单上传字段的name名称。
        //上传的文件夹必须存在
        var upload=muilter.array('txtFile');
        upload(req, res, function (err) {
            //添加错误处理
            if (err) {
                return  console.log(err);
            }
            //文件信息在req.file或者req.files中显示。
            let uploadsrc =req.files[0].destination+"/";
            let uploadfilename = req.files[0].filename;
            let uploadsrcstring= uploadsrc+uploadfilename;
            uploadsrcstring = uploadsrcstring.substring(2);
            uploadsrcstring = "http://localhost:9999/"+uploadsrcstring;
            console.log(uploadsrcstring);
            res.send(uploadsrcstring)
            console.log(req.files[0]);
            if(req.files[0]){
                let uploadsrc =req.files[0].destination+"/";
                let uploadfilename = req.files[0].filename;
                let uploadsrcstring= uploadsrc+uploadfilename;
                uploadsrcstring = uploadsrcstring.substring(8);
                uploadsrcstring = "http://localhost:9999"+uploadsrcstring;
                console.log(uploadsrcstring);
                res.send(uploadsrcstring)
            }else{
                res.send("")
            }


        });
    }
};