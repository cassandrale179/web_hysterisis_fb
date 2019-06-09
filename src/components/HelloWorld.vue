<!--- HTML tempalte for the HelloWorld.vue  --> 

<template>
  <div class="hello">
      <div class="container">
        <h3>Introduction</h3>
        
      </div>    
  </div>
</template>

<!--- Javascript portion -->
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      fireData: null, 
    }
  },

  methods:{

    // Fetch data from Firebase 
    fetchFirebaseData(){
      firebase.database().ref('users').on('value',(snapshot)=>{
          this.fireData=snapshot.val();
          console.log("this firedatada", this.fireData); 
        });
      }
    },

  // Call default function when this page is first loaded 
  created(){
    this.fetchFirebaseData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
