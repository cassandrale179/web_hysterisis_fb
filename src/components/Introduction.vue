<!--- HTML tempalte for Introduciton.vue --> 
<template>
  <div v-if="count > 0" class="hello">
      <div id="container">

         <!-- ____________  INSTRUCTION SLIDES DISPLAYING PART  _______________ -->  
        <div v-if= "page < 5" >
          <h2>Introduction</h2>
          <div class="text"> In this task, press <b> t </b> if there are more triangles, press <b> c </b> if there are more circles. 
            For <a href="" class="bluetext"> blue-colored</a> shape, focus on the <b> big </b> shapes. 
            For  <a href="" class="greentext"> green-colored</a>  shape, focus on the <b>small </b> shapes 
            that make up the big shapes.
          </div>

            <!-- ____________  INSTRUCTION SLIDES  _______________ --> 
            <div v-if="page <= 1" class="example">
								<img src="../assets/d1.png" /> 
								<u>Example 2 (blue = big):</u>
                <p> There are <b> 4 triangles </b> and <b> 6 circles </b> in this picture. Press <b>c</b> </p>
            </div>
            <div v-if="page === 2" class="example">
                <img src="../assets/d2.png" /> 
								<u>Example 2 (blue = big):</u> 
								<p>There are <b> 8 triangles </b> and <b> 2 circles </b> in this picture. Press <b>t</b> </p>
            </div>
            <div v-if="page === 3" class="example">
                <img src="../assets/d3.png" /> 
								<u>Example 3 (green = small):</u> 
								<p>There are <b> 4 triangles </b> and <b> 6 circles </b> in this picture. Press <b>c</b> </p>
            </div>
            <div v-if="page === 4" class="example">
                <img src="../assets/d4.png" /> 
								<u>Example 4 (green = small):</u> 
								<p>There are <b> 8 triangles </b> and <b> 2 circles </b> in this picture. Press <b>t</b></p>
            </div> 
            <div style="text-align:center;">
            <button  v-on:click="page -= 1" class="btn"> << Back</button>
            <button  v-on:click="page += 1" class="btn"> Next >> </button> 
            </div>
        </div>

          <!-- ____________  BEGIN EXPERIMENT HERE  _______________ --> 
          <div class="text" v-if= "page >= 5" >
            <h1> Experiment </h1>  
            The experiment will begin. You will see <b>10 </b> slides of just blue shapes,  <b>10 </b> slieds of green shapes, 
            then  <b>10 </b> slides of blue, green, blue, green ...etc.  
            Click <b> Begin </b> when you are ready, or <b> Back </b>to review the examples.  <br><br>

            <div style="text-align:center;">
              <button class="btn" v-on:click="page -= 1" > << Back </button> 
              <button class="btn" v-on:click="setCurrTime" > Begin </button> 
            </div>
            <h2> {{count}} seconds </h2>
          </div>
        
      </div>    
  </div>
</template>

<!--- Javascript portion -->
<script>
import { EventBus } from ".././event-bus.js"; 
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: 5, 
      page : 1,  
      fireData: null, 
    }
	},
	
	mounted() {
   
  }, 
  
  watch: { 
    /** When count reach 0, we emit an event and tell App.vue
     * to automatically move to Experiment.vue cocmponent 
     */ 
      
  }, 
        

	
  methods:{

	/* A countdown clock of 5 seconds before the official experiment began */ 
    setCurrTime: function(){
      this.intervalid1 = setInterval(function(){
        this.$data.count -= 1; 
        console.log("this should be called", this.count); 
        if (this.count <= 0){
          EventBus.$emit('this.count', this.count);  
          clearInterval(this.intervalid1); 
        } 
      }.bind(this), 1000);
    }, 
	},
  // Call default function when this page is first loaded 
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container{
    padding: 2em; 
    height: 47em;
    background: white; 
    border-radius: 4px; 
    margin-left: 20em; 
    margin-right: 20em; 
    margin-top: 3em;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: #283747;
  }

  .example{
    text-align: center; 
  }

  .text{
    padding-left: 5em;
    padding-right: 5em;
    font-size: 1em;
  }

  .bluetext{
    font-weight: bold;
    color: #2471A3; 
  }
  .greentext{
    font-weight: bold;
    color: #16A085;     
  }

  u{
    display: block;
  }

  img{
    width: 600px; 
    display: block; 
    margin: auto; 
  }

</style>


