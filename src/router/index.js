import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home1',
      component: HomeView
    },

    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue')
    },

    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('../views/auth/Register.vue')
    },


    // Must Be auth
,
    {
      path: '/home',
      children:[
          // {path: 'home', name: "Home", component: () => import('../views/HomePage.vue')},
          {path: 'profile', name: "Profile", component: () => import('../views/profile/Profile.vue')},
          {path: 'about', name: "About", component: () => import('../views/about/About.vue')},
          {path: 'contact', name: "Contact",  component: () => import('../views/contact/Contact.vue')},
      ],
      component: () => import('../views/HomePage.vue'),
      meta: {

      },
    },

    {
      // ( tranfer to own, tranfer to other, recent tranfer  )
      path: '/home/transfer', 
      name: 'Transfer',
      component: () => import('../views/transfer/Transfer.vue')
    },


    ////////////////////

    {
      path: '/:pathMatch(.*)',
      name: 'NotFound404',
      component: () => import('../views/404/PageNotFound.vue')
    }
  ]
})

export default router
