<!--- HTML tempalte for Introduciton.vue --> 
<template>
    <div v-if="userID" class="hello">
        <div id="container">
            <h2>Slide 1</h2>
        </div>
    </div>
</template>


<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			userID: undefined, 
			slideData: [],

			// Slides variable
			cue: 'blueglobal_greenlocal', 
			lowContrast: ['4060', '6040'], 
			highContrast: ['2080', '8020'], 
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
			for (var i = 0; i < totalSlidesPerDirectory; i++){
				const slidePathName1 = folder + '/' + ratio1 + '/' + i.toString() + '.png'; 
				const slidePathName2 = folder + '/' + ratio2 + '/' + i.toString() + '.png';  
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
		}
	}, 

	created(){
		// Get user id from local storage 
		this.userID = localStorage.getItem('userID'); 

		// Create 10 blue slides 
		let blueGlobalLowContrast = this.generateSamplesForEachRatio('blueglobal', '6040', '4060'); 
		let blueGlobalHighContrast = this.generateSamplesForEachRatio('blueglobal', '2080', '8020');  
		let blueSlides = blueGlobalLowContrast.concat(blueGlobalHighContrast); 
		let randomBlueSlides = this.generateRandomSlidesData(blueSlides); 

		// Create 10 green slides 
		let greenGlobalLowContrast = this.generateSamplesForEachRatio('greenlocal', '6040', '4060'); 
		let greenGlobalHighContrast = this.generateSamplesForEachRatio('greenlocal', '2080', '8020');  
		let greenSlides = greenGlobalLowContrast.concat(greenGlobalHighContrast); 
		let randomGreenSlides = this.generateRandomSlidesData(greenSlides); 

		// Create 10 switching slides
		let randomSwithingSlides = this.generateSwitchingSlides(blueSlides, greenSlides);  
	}
}

    
</script>
<style scoped>
    #container{
        padding: 2em; 
        height: 45em;
        background: white; 
        border-radius: 4px; 
        margin-left: 20em; 
        margin-right: 20em; 
        margin-top: 5em;
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
      