import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'
import Experiment from '@/components/Experiment'
import Form from '@/components/Form'
import Signup from '@/components/Signup'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction,
      meta:{
        // requiresAuth:true
      }
    },
    {
      path: '/experiment',
      name: 'Experiment',
      component: Experiment
    },
    {
      path: '*',
      redirect: '/form',
    },
    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    }
  ]
});

// router.beforeEach((to,from,next)=>{
//   let currentUser=firebase.auth().currentUser;
//   let requiresAuth=to.matched.some(record=>record.meta.requiresAuth);

//   if(requiresAuth && !currentUser) next('sign-in')
//   else if (!requiresAuth && currentUser) next('hello')
//   else next()
// });

export default router



