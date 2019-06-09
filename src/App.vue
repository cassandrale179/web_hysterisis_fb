<template>
  <div id="app">
    <div id="appnavbar">
      <router-link to="/hello">Introduction</router-link>
      <router-link to="/sign-in">Experiment</router-link>
      <router-link to="/sign-up">Data</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      authUser:null
    }
  },
  watch:{
    // '$route':'setAuthUser'
  },

  methods:{

  },
  created(){
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');

/* Native elements styling */ 
  body{
    position: absolute;
    height: 100%; 
    width: 100%; 
    background-image: url('https://free4kwallpapers.com/uploads/originals/2019/05/18/firewatch-wallpaper.jpg'); 
    background-size: cover;  
    text-align: center; 
    color: white; 
  }


/* Native elements styling */ 
a{
  color: white; 
}

  #appnavbar{
    font-family: 'Roboto', sans-serif; 
    color: white; 
    font-size: 20px;
  }
  
</style>
