<template>
		<div id="container">
			<h2>Cognitive Flexibility Task</h2>

    
				
			<div class="container">

					<div class="row">
							<form class="col s12">
								<div class="row">
									<div class="input-field col s6">
										<input id="first_name" type="text" class="validate">
										<label for="first_name">First Name</label>
									</div>
									<div class="input-field col s6">
										<input id="last_name" type="text" class="validate">
										<label for="last_name">Last Name</label>
									</div>
								</div>

								<div class="row">
										<div class="input-field col s12">
											<input id="email" type="email" class="validate">
											<label for="email">Email</label>
										</div>
									</div>
							</form>
					</div>


 
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
        height: 45em;
        background: white; 
        border-radius: 4px; 
        margin-left: 20em; 
        margin-right: 20em; 
        margin-top: 3em;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        color: #283747;
    }

</style>
