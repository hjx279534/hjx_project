// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/route'
import Container from 'element-ui'
import NavMenu from 'element-ui'
import Input from 'element-ui'
import Form from 'element-ui'
import Drop from 'element-ui'
import Carousel from 'element-ui'
import './assets/font_ali_index/iconfont.js'
// 引入jquery库
import 'jquery'
import axios from 'axios'
import RequestMessage from './axios/request'
// 绑定一个工具js
import HandlerUrl from './utils/handlerURL'

Vue.prototype.HandlerUrl=HandlerUrl
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.RequestMessage=RequestMessage
// import {Container,NavMenu,Input,Form} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Container)
Vue.use(NavMenu)
Vue.use(Input)
Vue.use(Form)
Vue.use(Drop)
// 轮播图
Vue.use(Carousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
