<template>
		<div id="container">
			<h2>Cognitive Flexibility Task</h2>
			Before you continue the expeirment, please fill in the information below. This is vital for data collecting purpose. 
			
			<form>
				<input type="text" placeholder="First Name">  </input>
				<input type="text" placeholder="Last Name"> </input>
				<input type="text" placeholder="Email">  </input>
				<input type="text" placeholder="Age"> </input>
				<br>
				<button>Submit </button>
			</form>


				


 
		</div>
	</div>
</template>

<script>

export default {
		name: 'SignIn',
		data () {
			return {
				formData:{
						email:'',
						password:''
				}
			}
		},
		methods: {
			signIn(){
				firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
						.then((user)=>{
							this.$router.replace('/hello')
						})
						.catch((e)=>{
								alert(e.message)
					})
				}
		},

		created(){

		}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #container{
        padding: 2em; 
        height: 30em;
        background: white; 
        border-radius: 4px; 
        margin-left: 20em; 
        margin-right: 20em; 
        margin-top: 3em;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
				color: #283747;

		}
		
		input{
			height: 3em;
			display: block; 
			width: 30em;
			margin-bottom: 1em;
			margin: auto;
			border: 0px; 
			border-bottom: 1px #E5E7E9  solid; 
		}

</style>
