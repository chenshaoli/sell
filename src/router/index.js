import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

// var express =require('express')
// var app = express()
// var appData = require('../../data.json')
// var seller = appData.seller
// var goods = appData.goods
// var ratings = appData.ratings

// console.log(seller)
// var apiRoutes = express.Router()
// console.log(apiRoutes)
// apiRoutes.get('/seller', function (req, res) {
//   res.json({
//     errno: 0,
//     data: seller
//   })
// })
// apiRoutes.get('./goods', function (req, res) {
//   res.json({
//     errno: 0,
//     data: goods
//   })
// })
// apiRoutes.get('./ratings', function (req, res) {
//   res.json({
//     errno: 0,
//     data: ratings
//   })
// })

// app.use('/api', apiRoutes)
