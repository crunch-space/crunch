import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/home'
import kshow from '@/view/4kshow'

Vue.use(Router)

let lastWindowWidth = window.innerWidth

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DynamicComponent',
      component: {
        render (createElement) {
          return createElement(window.innerWidth > 3500 ? kshow : HelloWorld)
        }
      }
    }
  ]
})

// 添加 resize 事件监听器
window.addEventListener('resize', function() {
  const windowWidth = window.innerWidth
  if ((lastWindowWidth > 3500 && windowWidth < 3500) || (lastWindowWidth < 3500 && windowWidth > 3500)) {
    window.location.reload()
  }
  lastWindowWidth = windowWidth
})

export default router
