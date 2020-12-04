import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      components: require('@/components/Login.vue'),
      hidden: true
    },
    {
      path: '/home',
      name: '系统管理模块',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-cogs',
      children: [
        {
          path: '/home/student',
          name: '分配权限',
          iconClass: 'fa fa-cog',
          components: require('@/components/students/StudentList.vue')
        }
      ]
    },
    {
      path: '/home',
      name: '原材料采购',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-truck',
      children: [
        {
          path: '/home/yucancailiao',
          name: '原材料采购单',
          iconClass: 'fa fa-truck',
          components: require('@/components/students/Ycl.vue')
        }
      ]
    },
    {
      path: '/home',
      name: '进度编制模块',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-users',
      children: [
        {
          path: '/home/jindu',
          name: '进度编制单',
          iconClass: 'fa fa-list-alt',
          components: require('@/components/students/Jindu.vue')
        }
      ]
    },
    {
      path: '/home',
      name: '信息反馈模块',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-users',
      children: [
        {
          path: '/home/xfk',
          name: '信息反馈单',
          iconClass: 'fa fa-list',
          components: require('@/components/students/Xfk.vue')
        }
      ]
    },

    {
      path: '/home',
      name: '审核管理模块',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-users',
      children: [
        {
          path: '/home/sjd',
          name: '审核进度单',
          iconClass: 'fa fa-list-alt',
          components: require('@/components/students/Sjd.vue')
        },
        {
          path: '/home/sfk',
          name: '审核反馈单',
          iconClass: 'fa fa-list',
          components: require('@/components/students/Sfk.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      components: require('@/components/NotFound.vue'),
      hidden: true,
    }
  ],
  mode: 'history'
})
