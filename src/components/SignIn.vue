<template>
		<div id="container">
			<h2>Cognitive Flexibility Task</h2>

			<p>			Before you continue the expeirment, please fill in the information below. This is vital for data collecting purpose. </p>

			
			<form>
				<input v-model="experimentId" type="text" placeholder="Experiment ID: " disabled>  </input>
				<input v-model="name" type="text" placeholder="Name"> </input>	
				<input v-model="email" type="text" placeholder="Email">  </input>
				<input v-model="age" type="number" placeholder="Age"> </input>
				<br>
				<button v-on:click="storeUserData()">Submit </button>
				<div class="error">{{errorMessage}}</div>
			</form>
		</div>
	</div>
</template>

<script>

export default {
		name: 'SignIn',

		// Global variables  
		data () {
			return {

					// Form data 
					email:'',
					experimentId: '', 
					age: 0, 
					name: '', 
					errorMessage: '', 
					userID: '', 

					// Firebase refs 
					emailRef: firebase.database().ref('emails/'),
					userRef: firebase.database().ref('users/') 
			}
		},

		methods: {

			/** Check if user has already signed up for the experiment 
			 * @return {string | undefined} userID if user exist, undefined otherwise 
			 */ 
			returnUserID_ifUserExist(){
				var promise = this.emailRef.once("value", snapshot => {
					const emailObject = snapshot.val(); 
					var exists = Object.keys(emailObject).some(function(k) {
    				if (emailObject[k] === "lenguyetminh1998@gmail.com"){
							console.log("k", k); 
							this.userID = k; 
						}
					});
				})
			}, 

			/**
			 * Store user data when submit form 
			 * users {
			 *    name: Jane Doe 
			 * 		age: 20
			 * 		experimentid: 001 ... 
			 * } 
			 */ 
			storeUserData(){
				 this.returnUserID_ifUserExist(); 
				 console.log("this.userId", this.userID); 

				if (!this.name || !this.email || !this.age){
					this.errorMessage = 'Please fill out all missing information on the form'; 
				} else {

					// Check if user data already exist in the datbase 
					const newUsersInfo = this.userRef.push({
						email: this.email, 
						experimentId: 1, 
						name: this.name, 
						age: this.age 
					}); 

					newUsersInfo.then(success => {
						console.log("Store user data successfully"); 
					}).catch(error => {
						console.log("error, unable to do pushed user information", error); 
						return; 
					})

					// Store user email if successfully created user 
					this.userID = newUsersInfo.key; 
					if (this.userID){
						this.storeUserEmail(); 
					}
				}
			}, 

			/** 
			 * Store into the database the key value pair {userID: email}
			 * Lh8PCik6ftXMGzeTjjk: "lenguyetminh1998@gmail.com"
			 */ 
			storeUserEmail(){
					const emailObject = {}; 
					emailObject[this.userID] = this.email; 
					this.emailRef.update(emailObject).then(success => {
						console.log("Store email successfully for this user", this.userID); 
					}).catch(error => {
						console.log("Unable to store email of user", error); 
					}); 
			}
		},

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
			margin-top: 5.5em; 
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
