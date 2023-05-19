var express = require('express');
var router = express.Router();

/* GET home page. */

//render ra form input
router.get('/',(req,res)=>{
  res.render('input');
})
//lay du lieu ra form input
router.post('/output',(req,res)=>{
  var student = req.body;
  // var name = req.body.ten;
  // var age = req.body.tuoi;
  // var email = req.body.email;
  // var bod = req.body.ngaysinh;

  // //in ra console log
  // console.log(req.body);
  // //in ra web voi res.send
  // res.send(req.body);
  //render ra trongoutput kem du lie tu form
  res.render('output',{
    student:student,
    // name:name,
    // age:age,
    // email:email,
    // bod:bod
  })

  router.get('/login',(req,res)=>{
    res.render('login');
  })
  router.post('/check',(req,res)=>{
      var username = req.body.username
      var password = req.body.password

      if(username == 'admin' && password == '123456'){
        res.send("<h1 style='color: blue;background-color:lime';>Login Successfully !</h1>")
      }else{
        res.send("<h1 style='color: red; background-color: yellow';>Login failed !</h1>")
      }
    })
})
module.exports = router;
