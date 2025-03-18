import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Comming Soon',
        description: 'This is the home page',
      },
    },
  ],
})

router.beforeEach((to) => {
  const { title, description } = to.meta
  const defaultTitle = 'Default Title'
  const defaultDescription = 'Default Description'

  document.title = title || defaultTitle

  // const descriptionElement = document.querySelector('head meta[name="description"]')

  // descriptionElement.setAttribute('content', description || defaultDescription)
})

export default router
