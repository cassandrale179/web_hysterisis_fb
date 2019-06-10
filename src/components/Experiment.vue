<!--- HTML tempalte for Introduciton.vue --> 
<template>
    <div v-if="count > 0" class="hello">
        <div id="container">
        </div>
    </div>
</template>


<style scoped>
    #container{
        padding: 2em; 
        height: 45em;
        background: white; 
        border-radius: 4px; 
        margin-left: 20em; 
        margin-right: 20em; 
        margin-top: 3em;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        color: #283747;
    }
    
    .text{
        padding-left: 5em;
        padding-right: 5em;
        font-size: 1em;
    }
    
    .blue{
        font-weight: bold;
        color: #2471A3; 
    }
    .green{
        font-weight: bold;
        color: #16A085;     
    }
    
    u{
        display: block;
    }
    
    img{
        width: 600px; 
    }

  
</style>
      