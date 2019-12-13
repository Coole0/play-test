import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'Navigation',
      component: resolve => require(['../pages/Navigation'], resolve)
    },
    {
      path: '/login',
      name: 'LoginAndRegister',
      component: resolve => require(['../pages/LoginAndRegister'], resolve)
    },
    {
      path: '/my',
      name: 'My',
      component: resolve => require(['../pages/my'], resolve)
    },
    {
      path: '/myInstructions',
      name: 'MyInstructions', // 我的-使用说明
      component: resolve => require(['../pages/MyInstructions'], resolve)
    },
    {
      path: '/myUpdate',
      name: 'MyUpdate', // 我的-修改密码
      component: resolve => require(['../pages/MyUpdate'], resolve)
    },
    {
      path: '/pay',
      name: 'MyRecharge', // 我的-充值
      component: resolve => require(['../pages/MyRecharge'], resolve)
    },
    {
      path: '/about',
      name: 'MyAbout', // 我的-关于我们
      component: resolve => require(['../pages/MyAbout.vue'], resolve)
    },
    {
      path: '/MyReply',
      name: 'MyReply', // 我的-反馈
      component: resolve => require(['../pages/MyReply.vue'], resolve)
    },
    {
      path: '/Index',
      name: 'Index', // 首页
      component: resolve => require(['../pages/Index.vue'], resolve)
    },
    {
      path: '/IndexShutter',
      name: 'IndexShutter', // 首页-卷帘门
      component: resolve => require(['../pages/IndexShutter.vue'], resolve)
    },
    {
      path: '/AuthorizationModel',
      name: 'AuthorizationModel', // 首页-识别失败
      component: resolve => require(['../pages/AuthorizationModel.vue'], resolve)
    },
    {
      path: '/SmartHeaters',
      name: 'SmartHeaters', // 首页-智能取暖器
      component: resolve => require(['../pages/SmartHeaters.vue'], resolve)
    },
    {
      path: '/MonitoringList',
      name: 'MonitoringList', // 首页-智能取暖器
      component: resolve => require(['../pages/MonitoringList.vue'], resolve)
    },
    {
      path: '/',
      name: 'MonitoringAdd', // 首页-智能取暖器
      component: resolve => require(['../pages/MonitoringAdd.vue'], resolve)
    }
  ]
})
