import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import TestView from '../views/TestView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import HomepageView from '../views/HomePageView.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomepageView
  },
  {
    path: '/view-posts',
    name: 'PostViews',
    component: PostView
  },
  {
    path: '/view-posts/:id',
    name: 'PostDetailView',
    component: PostDetailView,
    props: true
  },
  {
    path: '/test',
    name: 'TestView',
    component: TestView
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
