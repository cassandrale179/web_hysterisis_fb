<template>
  <div id="app">

    <!-- Navigation Bar -->
    <div id="A">
      <!-- <router-link class="A1" to="/hello">Introduction</router-link>
      <router-link class="A1" to="/sign-in"> Experiment</router-link>
      <router-link class="A1" to="/sign-up"> Data</router-link> -->
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
    background-image: url('http://i.imgur.com/4Pp7dRg.jpg');   
    background-size: cover;  
    text-align: center; 
    color: white; 
    font-family: 'Roboto'; 
  }

  a{
    color: white; 
  }

  *:focus {
    outline: 0 !important;
}


  /* App.vue styling */ 

  #A{
    padding: 0.7em; 
    height: 3em; 
    text-align: left; 
    font-family: 'Roboto', sans-serif; 
    color: white; 
    font-size: 20px;
  }

  .A1{
    padding-right: 0.5em; 
  }

  /* Material design button */ 
  .btn{
    margin-top: 20px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    background-color: black; 
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
    color: white; 
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  
</style>
