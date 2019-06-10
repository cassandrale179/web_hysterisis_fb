import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'
import SignIn from '@/components/SignIn'
import Signup from '@/components/Signup'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction,
      meta:{
        // requiresAuth:true
      }
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '*',
      redirect: '/sign-in',
    },
    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    }
  ]
});

router.beforeEach((to,from,next)=>{
  let currentUser=firebase.auth().currentUser;
  let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('sign-in')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
});

export default router



