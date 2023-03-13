import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/view-posts',
    name: 'PostViews',
    component: PostView
  },
  // 404 catchall
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
