/*Created by Administrator on 2018/3/12.*/
const modal=require('./../modal/modal.js');
module.exports={
    // studentlist:function(request,response){
    //     let size=request.body.size;
    //     let current=request.body.current;
    //     console.log(size,current)
    //     modal.studentlist(size,current,function(err,data){
    //         response.send(data);
    //     });
    // },
    // studentdel:function(request,response){
    //     //let id=request.query.id;
    //     let id=request.body.id;
    //     modal.studentdel(id,function(err,data){
    //         console.log(err);
    //         if(err){
    //             response.send('fail');
    //         }else{
    //             response.send('ok');
    //         }
    //     });
    // },
    // search:function(request,response){
    //     let name=request.body.stuname;
    //     let phone=request.body.stuphone;
    //     let sex=request.body.stusex;
    //     let size=request.body.size;
    //     let current=request.body.current;
    //     loginModal.search(name,phone,sex,size,current,function(err,data){
    //         response.send(data);
    //     });
    // },
    // studentcount:function(request,response){
    //     let name=request.body.stuname;
    //     let phone=request.body.stuphone;
    //     let sex=request.body.stusex;
    //     loginModal.studentCount(name,phone,sex,function(err,data){
    //         response.send(data);
    //     })
    // },
    // stuEidt:function(request,response){
    //     let id=request.body.id;
    //     let name=request.body.name;
    //     let phone=request.body.phone;
    //     let sex=request.body.sex;
    //     modal.stuEidt(id,name,phone,sex,function(err,data){
    //         response.send(data);
    //     });
    // },
    // stulist:function(request,response){
    //     modal.studentlist(5,1,function(err,data){
    //             if(request.session.user) {
    //                 response.render('studentlist', {'data': data, "username": request.session.user.username});
    //             }else{
    //                 response.redirect('login.html')
    //             }
    //     });
    // },
    // Index:function(request,response){
    //     if(request.session.user){
    //         response.render('index',{"username":request.session.user.username});
    //         //response.render('index',{user});//render方法在响应对象中
    //     }else{
    //         response.redirect('login.html')
    //     }
    // },
    // Product:function(request,response){
    //     if(request.session.user){
    //         response.render('product',{"username":request.session.user.username});
    //     }else{
    //         response.redirect('login.html')
    //     }
    // },
    // Exit:function(request,response){//退出
    //     //request.session.user=null;//方法一
    //     request.session.destroy();//方法二，销毁当前请求的所有session
    //     response.redirect('login.html');
    // }
};