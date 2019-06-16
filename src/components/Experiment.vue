<!--- HTML tempalte for Introduciton.vue --> 
<template>
    <div v-if="userID" class="hello">
        <div id="container">

				<div v-if="beginExperiment">
						<h2 v-if="currentSlideNumber == 0"> Block {{currentBlockNumber}}</h2> 
						<div v-if="currentSlideNumber > 0"> 
							<h3>	Slide {{currentSlideNumber}}  </h3>
							<p>Press <b>t</b> for triangle, and <b>c</b> for circle </p>
								<img :src="currentSlidePath" /> 
						</div> 
				</div>

				<div v-if="!beginExperiment">
					<h2> Thank you for taking the experiment </h2>
				</div>

        </div>
    </div>
</template>


<script>
export default {
	name: 'HelloWorld',
	data () {

				
		return {
			userID: undefined, 
			cue: 'blueglobal_greenlocal', 

			beginExperiment: true, 

			// Slides variable
			randomBlueSlides: [], 
			randomGreenSlides: [],  
			randomSwitchingSlides: [], 

			// Information about current slide 
			currentBlock: [], 
			currentSlidePath: '', 
			currentSlideNumber: 0, 
			currentBlockNumber: 1, 
		}
	},

	watch : {
		/**
			This function is called every time the variable currenBlockNumber
			is changed. This signifies user finish answeriing question for 
			10 slides. 
		*/ 
		currentBlockNumber: function(oldBlockNumber, newBlockNumber){
			if (newBlockNumber < 3){
				this.displaySlides();  
			} else {
				this.beginExperiment = false; 
			}
		}
	}, 
  
	methods: {
		/** 
			Generate an array that contains all the slide path name in random order 
			@param {string} folder select from 1 of 4 folders blueglobal, bluelocal, greenglobal, greenlocal 
			@param {string} ratio1 the ratio of triangle to circle (2080)
			@param {string} ratio2 the ratio of circle to triangle (8020) 
			@return {array[string]} a slide that contain 28 random .png from 2 filepaths name
			['blueglobal/2080/0.png', 'blueglobal/2080/1.png']  
		*/ 
		generateSamplesForEachRatio(folder, ratio1, ratio2){
			const totalSlidesPerDirectory = 15; 
			let slidesData = []; 
			let absolutePath = "static/"; 
			for (var i = 0; i < totalSlidesPerDirectory; i++){
				const slidePathName1 = absolutePath + folder + '/' + ratio1 + '/' + i.toString() + '.png'; 
				const slidePathName2 = absolutePath + folder + '/' + ratio2 + '/' + i.toString() + '.png';  
				slidesData.push(slidePathName1); 
				slidesData.push(slidePathName2);  
			}
			return slidesData
		}, 

		/** 
			Generate an array that contains random slides from an array 
			@param {array[string]} slidesArrayToChooseFrom, array contains 28 filepath name for 2 given ratios 
			@return {array[string]} randomSlides, a slide that contain 10 random filepath name from slidesArrayToChooseFrom 
			['blueglobal/2080/0.png', 'blueglobal/8020/3.png']  
		*/ 
		generateRandomSlidesData(slidesArrayToChooseFrom){
			const numberOfSlidesPerBlock = 10;  
			let randomSlides = []; 
			for (var i = 0; i < numberOfSlidesPerBlock; i++){
				const randomSlide = slidesArrayToChooseFrom[Math.floor(Math.random() * slidesArrayToChooseFrom.length)]; 
				randomSlides.push(randomSlide); 
			}	
			return randomSlides;  
		}, 

		/** 
			Generate an array that contains random switching slides from an array 
			@param {array[string]} blueSlides, array contains 28 filepath name for 2 given ratios in blue.  
			@param {array[string]} greenSlides, array contains 28 filepath name for 2 given ratios in green.  
			@return {array[string]} randomSwitchingSlides, a slide that contain 10 random filepath names 
			from blueSlides and greenSlides 
		*/ 
		generateSwitchingSlides(blueSlides, greenSlides){
			const numberOfSlidesPerBlock = 10;  
			let randomSwitchingSlides = []; 
			let randomSlide; 
			for (var i = 0; i < numberOfSlidesPerBlock; i++){
				if (i % 2 == 0){
					randomSlide = blueSlides[Math.floor(Math.random() * blueSlides.length)]; 
				} else { 
					randomSlide = greenSlides[Math.floor(Math.random() * greenSlides.length)]; 
				}
				randomSwitchingSlides.push(randomSlide); 
			}	
			return randomSwitchingSlides;  
		}, 

		/** 
			Function that set an interval running ever 2.5 seconds and flash each slide 
			onto the screen for the user to see 
		*/ 
		displaySlides(){
			this.intervalid1 = setInterval(function(){
				this.currentSlideNumber += 1; 

				// this.currentBlockNumber = 3; 

				if (this.currentBlockNumber == 1){
					this.currentBlock = this.randomBlueSlides; 
				} else if (this.currentBlockNumber == 2){
					this.currentBlock = this.randomGreenSlides;  
				} else if (this.currentBlockNumber == 3){
					this.currentBlock = this.randomSwitchingSlides; 
				} else {
					this.currentBlock = []
				}

				console.log("third one", this.currentBlock); 

				console.log("thiscurrentblocknumber", this.currentBlockNumber, this.currentBlock); 
		
				this.currentSlidePath = this.currentBlock[this.currentSlideNumber]; 
				console.log("thiscurrentslidepath", this.currentSlidePath); 
			
        if (this.currentSlideNumber == 9 || this.currentBlock == []){
					this.currentBlockNumber +=1; 
					this.currentSlideNumber = 0; 
					clearInterval(this.intervalid1);  
        } 
      }.bind(this), 500);
		},
	}, 

	created(){
		// Get user id from local storage 
		this.userID = localStorage.getItem('userID'); 

		// Create 10 blue slides of low and high ratio 
		let blueGlobalLowContrast = this.generateSamplesForEachRatio('blueglobal', '6040', '4060'); 
		let blueGlobalHighContrast = this.generateSamplesForEachRatio('blueglobal', '2080', '8020');  
		let blueSlides = blueGlobalLowContrast.concat(blueGlobalHighContrast); 
		this.randomBlueSlides = this.generateRandomSlidesData(blueSlides); 

		// Create 10 green slides of low and high ratio 
		let greenGlobalLowContrast = this.generateSamplesForEachRatio('greenlocal', '6040', '4060'); 
		let greenGlobalHighContrast = this.generateSamplesForEachRatio('greenlocal', '2080', '8020');  
		let greenSlides = greenGlobalLowContrast.concat(greenGlobalHighContrast); 
		this.randomGreenSlides = this.generateRandomSlidesData(greenSlides); 

		// Create 10 switching slides (blue, green, blue, green, blue, green)
		this.randomSwitchingSlides = this.generateSwitchingSlides(blueSlides, greenSlides);  

		console.log(this.randomBlueSlides); 
		console.log(this.randomSwitchingSlides); 

		// Display the slides onto the screen 
		this.displaySlides();  
	}
}

</script>
<style scoped>
    #container{
        padding: 2em; 
        height: 45em;
        background: white; 
        border-radius: 4px; 
        margin-left: 18em; 
        margin-right: 18em; 
        margin-top: 5em;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        color: #283747;
				text-align: center; 
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
        width: 900px; 
    }
	
  
</style>
      