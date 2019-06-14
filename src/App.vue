<template>
  <div id="app">

    <!-- Navigation Bar -->
    <div id="A">
        <div v-if="!currentUserID">
            <Form></Form>
        </div>
      <div v-if="currentUserID">
          <Introduction></Introduction>
      </div>
    </div> 
    <router-view/>
  </div>
</template>



<script>
import {EventBus} from './event-bus.js'
import Form from './components/Form';
import Introduction from './components/Introduction'

export default {
  name: 'App',

  components: {
    Form, Introduction
  }, 

  data(){
    return {
      currentUserID: null, 
    }
  },
  watch:{
   
  },

  methods:{

  },
  created(){
  }, 

  mounted(){
    EventBus.$on("storedLocalUserID", (userID) => {  
      this.currentUserID = userID; 
      localStorage.currentUserID = userID; 
		});
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

  h2{
    text-align: center; 
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
