import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UserForm from '../components/UserForm.vue'
import HelloWorld from '../components/HelloWorld.vue'
import BusinessInfo from '../views/BusinessInfo.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/createuser',
    name: 'UserForm',
    component: UserForm
  },
  {
    path: '/businessinfo/:userId',
    name: 'BusinessInfo',
    component: BusinessInfo
  },
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//   {
//     path: '/event/:id',
//     name: 'EventDetails',
//     props: true,
//     component: UserForm
//   },

export default router
