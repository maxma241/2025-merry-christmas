import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import HappyQuestionView from '../views/HappyQuestionView.vue'
import MusicQuestionView from '../views/MusicQuestionView.vue'
import CompleteView from '../views/CompleteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView
    },
    {
      path: '/happy',
      name: 'happy',
      component: HappyQuestionView
    },
    {
      path: '/music',
      name: 'music',
      component: MusicQuestionView
    },
    {
      path: '/complete',
      name: 'complete',
      component: CompleteView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
