import { createRouter, createWebHistory } from 'vue-router'
import GraphqlGeneratorView from '../views/GraphqlGeneratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'typer',
      component: GraphqlGeneratorView
    }
  ]
})

export default router
