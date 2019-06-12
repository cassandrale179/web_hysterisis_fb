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
    color: white; 
    font-family: 'Roboto'; 
  }

  a{
    color: white; 
  }

  p{
    text-align: center; 
  }

  *:focus {
    outline: 0 !important;
}

  h2{
			text-align: center; 
    }
    
  .error{
    color: #A93226; 
    font-style: italic; 
    text-align: center; 
    margin-top: 20px; 
  }

  .success{
    color: #138D75; 
    font-style: italic; 
    text-align: center; 
    margin-top: 20px; 
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

  button{
    background: black;
    color: white;
    border-radius: 5px;
    font-family: 'Roboto',sans-serif;
    text-transform: uppercase;
    margin-top: 20px; 
    background: black; 
    display: block;
			margin: auto;
			width: 8em;
			height: 3em;
  }

  

 
</style>
