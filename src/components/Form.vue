<template>
		<div id="container">
			<h2>Cognitive Flexibility Task</h2>
			<p>Before you continue the expeirment, please fill in the information below. This is vital for data collecting purpose. </p>
			<form>
				<input v-model="experimentId" type="text" placeholder="Experiment ID: " disabled>  </input>
				<input v-model="name" type="text" placeholder="Name"> </input>	
				<input v-model="email" type="text" placeholder="Email">  </input>
				<input v-model="age" type="number" placeholder="Age"> </input><br>
				<button @click="returnUserID_ifUserExist()">Submit </button>
				<div class="error">{{errorMessage}}</div>
			</form>
		</div>
	</div>
</template>

<script>
import { EventBus } from ".././event-bus.js"; 
export default {
	name: 'Form',

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
		/** 
		 * Check if user has already signed up for the experiment 
		 * Call @updateUserData if user exist, @setUserData otherwise 
		 */  
		returnUserID_ifUserExist(){
			this.emailRef.once("value", snapshot => {
				const emailObject = snapshot.val(); 
				if (!emailObject){
					this.setUserData();  
					return; 
				}
				Object.keys(emailObject).some(key => {
					if (emailObject[key] === this.email){
						EventBus.$emit("storedLocalUserID", key);    
						localStorage.setItem('userID', key);  
						} else {
							this.setUserData(); 
						}
				}) 
			}) 
		}, 
		/**
		 * Create a new user data when submit form 
		 * users {
		 *    name: Jane Doe 
		 * 		age: 20
		 * 		experimentid: 001 ... 
		 * } 
		 */ 
		setUserData(){
			if (!this.name || !this.email || !this.age){
				this.errorMessage = 'Please fill out all missing information on the form'; 
			} else {

				// Check if user data already exist in the datbase 
				const newUsersInfo = this.userRef.push({
					email: this.email, 
					name: this.name, 
					age: this.age 
				});  

				// Store user email if successfully created user  
				newUsersInfo.then(success => {
					this.userID = newUsersInfo.key; 
					this.storeUserEmail(); 
					EventBus.$emit("storedLocalUserID", this.userID);     
					localStorage.setItem('userID', this.userID);   
				}).catch(error => {
					console.log("error, unable to do pushed user information", error); 
					return; 
				})
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
		margin-top: 10em; 
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
