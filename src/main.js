// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyBU35MoFKhbTRTwOwxYOwnjDg9N6j4WMBg",
    authDomain: "hystersis-69801.firebaseapp.com",
    databaseURL: "https://hystersis-69801.firebaseio.com",
    projectId: "hystersis-69801",
    storageBucket: "hystersis-69801.appspot.com",
    messagingSenderId: "456383164809",
    appId: "1:456383164809:web:70d63f61b83a3052"
};

firebase.initializeApp(config);

window.firebase=firebase;

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});
