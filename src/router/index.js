import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '看板', icon: 'dashboard' }
    }]
  },

  {
    path: '/importData',
    component: Layout,
    redirect: '/importData/upload',
    name: 'importData',
    meta: { title: '数据导入', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/importData/upload/index'),
        meta: { title: '数据导入', icon: 'table' }
      }
    ]
  },

  {
    path: '/dataAnalysis',
    component: Layout,
    meta: {
      title: '数据分析',
      icon: 'nested'
    },
    redirect: '/dataAnalysis/attackers',
    children: [
      {
        path: 'attackers',
        name: 'Attackers',
        component: () => import('@/views/dataAnalysis/attackers'),
        meta: { title: '前十攻击者', icon: 'form' }
      },
      {
        path: 'attackMethod',
        name: 'AttackMethod',
        component: () => import('@/views/dataAnalysis/attackMethod'),
        meta: { title: '入侵方式', icon: 'form' }
      },
      {
        path: 'attackPeek',
        name: 'AttackPeek',
        component: () => import('@/views/dataAnalysis/attackPeek'),
        meta: { title: '入侵峰值', icon: 'form' }
      },
      {
        path: 'visitorOrigin',
        name: 'VisitorOrigin',
        component: () => import('@/views/dataAnalysis/visitorOrigin'),
        meta: { title: '访问来源', icon: 'form' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
