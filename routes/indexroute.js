var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var db = mongoose.connection
var passport = require('passport')


router.get('/', function(req,res){
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  res.render('homepage')
})



module.exports = router
