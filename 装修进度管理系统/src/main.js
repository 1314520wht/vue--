// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1、引入elementui组件和样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios' // 导入axios
import service from './service'
// 引入font-awesome图标样式
import 'font-awesome/css/font-awesome.min.css'
// 引入echarts
import echarts from 'echarts'

// 2、使用elementui
Vue.use(ElementUI)

Vue.config.productionTip = false
// Vue.prototype.axios = axios // axios挂载到原型上
Vue.prototype.service = service // axios挂载到原型上
Vue.prototype.$echarts = echarts // echarts挂载到原型上

// router.beforeEach((to,from,next) => {
//   if(to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
Vue.directive('title', {
  inserted:function (el, binding) {
    document.title = el.dataset.title
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
