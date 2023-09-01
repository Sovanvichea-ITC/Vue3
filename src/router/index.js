import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound404',
      component: () => import('../views/404/PageNotFound.vue'),
    },
    {
      path: '/',
      name: 'guest',
      component: () => import('../views/auth/Auth.vue')
    },

    {
      path: '/auth',
      children: [
        { path: 'login', name: "Login", component: () => import('../views/auth/view/Login.vue') },
        { path: 'register', name: "Register", component: () => import('../views/auth/view/Register.vue') },

      ],
      name: 'Auth',
      component: () => import('../views/auth/Auth.vue')
    },

    // {
    //   path: '/auth/login',
    //   name: 'Login',
    //   component: () => import('../views/auth/Login.vue')
    // },

    // {
    //   path: '/auth/register',
    //   name: 'Register',
    //   component: () => import('../views/auth/Register.vue')
    // },


    // Must Be auth
    ,
    {
      path: '/home',
      children: [
        { path: '', name: "Homepage", component: () => import('../views/home/Homepage.vue') },
        { path: 'profile', name: "Profile", component: () => import('../views/profile/Profile.vue') },
        { path: 'about', name: "About", component: () => import('../views/about/About.vue') },
        { path: 'contact', name: "Contact", component: () => import('../views/contact/Contact.vue') },
        { path: 'language', name: "Language", component: () => import('../views/language/Language.vue') },
        { path: 'setting', name: "Setting", component: () => import('../views/setting/Setting.vue') },


        // ( tranfer to own, tranfer to other, recent tranfer  )

        { path: 'transfer/:feature', name: 'Transfer', component: () => import('../views/transfer/Transfer.vue') },
      ],
      name: "Home",
      component: () => import('../views/HomePage.vue'),

    },


  ]

})

router.beforeEach(async (to, from, next) => {
  // const me = await authApi.getMe();
  const me = "sdd"

  let isAuthenticated = true;
  if (!me) {
    // alert(23);
    isAuthenticated = false;
  }
  if (to.name.includes('*') && !isAuthenticated) next({ name: 'Register' })
  if (to.name.includes('Home') && !isAuthenticated) next({ name: 'guest' })
  if (to.name.includes('Profile') && !isAuthenticated) next({ name: 'guest' })
  if (to.name.includes('Contact') && !isAuthenticated) next({ name: 'guest' })
  if (to.name.includes('About') && !isAuthenticated) next({ name: 'guest' })
  if (to.name.includes('Transfer') && !isAuthenticated) next({ name: 'guest' })
  if (to.name.includes('guest') && isAuthenticated) next({ name: 'Homepage' })

  if ((to.name.includes('Login') || to.name.includes('Register')) && isAuthenticated) next({ name: 'Home' })

  else next()
})


export default router
