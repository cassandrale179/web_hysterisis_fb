# Cognitive Flexibility Test 

A Vue.js project for the Congitive Neuroengineering Lab at Drexel University 
![](https://user-images.githubusercontent.com/22923895/54078166-a0fae880-4291-11e9-8613-523ad6f3824e.png) 
 *Sample screenshot of website* 


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



- For development on Chrome OS, follow this guide here to install Node.js and NPM: https://medium.com/@jacoboakley/web-development-with-a-chromebook-installing-nodejs-4e358b82a31b 



## 1. Architecture 

### 1.1 The folder structure:  
```
├── app 
│   ├── scripts 
│   |    └── views 
|   |          └── components (Modify inner component here) 
|   |                 ├── bigcircle.vue 
|   |                 ├── bigtriangle.vue 
|   |                 ├── form.vue 
|   |                 ├── intro.vue 
|   |                 └── one-slide.vue 
|   |          └── layouts 
|   |                 └── app.vue (Main app here, parent of all components) 
│   |    └── main.js (Import BalmUI CSS file here) 
│   ├── styles
│   └── index.html  
├── config
├── node_modules 
└── README.md

```

### 1.1 Component Structure
```
├── app.vue 
│   ├── form.vue  
│   ├── intro.vue 
│   └── oneslide.vue 
│         ├── bigcircle.vue
│         └── bigtriangle.vue
└── README.md
```

- The `app.vue` has 3 nested components: 
   - **Form.vue**: this creates a form for the user to input their information 
   - **Intro.vue**: this displayed 4 examples for the introduction slides 
   - **Oneslide.vue**: this renders all the circle and triangle based on a given ratio 
- The `oneslide.vue` has two child components: 
   - **bigcircle.vue**: this create a big shaped circle, make up of 10 smaller shapes inside it 
   - **bigtriangle.vue**: this create a big shaped triangle make up of 10 smaller shapes inside it  


## 2. Task Design 
- **A slide** contain 10 big shapes, each big shape contain 10 small shapes 
- **There are 3 blocks**, each contain 10 slides: blue, green, and switching  
   + When the color is blue, user try to count the big shapes that look like triangle and circle 
   + When the color is green, user try to count the small shapes that look like triangle and circle 
   + For switching, there are 10 slides in alternating color: blue, green, blue, green ..etc. 
- **There are two preset ratio**: (8:2) and (6:4) 
   + For big shapes: there will be an UNEVEN number of triangles and circle 
      + We can have 8 triangle, 2 circle or vice versa
      + The small shapes that make up the big shape has a 5:5 ratio  
   + For small shape is vice versa
- User press **t** if there is more triangle, **c** if there is more circle within **2.5** second time frame 


## 3. Code 
- This is more daunting to document, but here are some important functions: 


## 4.  Running this webapp (for developers) 
- Follow the tutorial here to get the project set up with BalmUI: 
https://material.balmjs.com/#/guide/quickstart 
- To run the file: 
`npm run dev` 

- If successful, you should be able to see this
```bash 
[BalmJS] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://10.250.110.26:3000
 --------------------------------------
``` 

## 5. Recommending Resources (can be learn in 2 weeks)
- **Official Documentation**: https://vuejs.org/v2/guide/ 
- **Important functions** used within this code: 
   - **Components (nested)**: https://vuejs.org/v2/guide/components-registration.html 
   - **Props (pass data from parent to children)**: https://vuejs.org/v2/guide/components.html 
   - **Emits (send data from children to parent)**: https://vuejs.org/v2/guide/components-custom-events.html 
   - **Watchers (monitor changes in props )**: https://vuejs.org/v2/guide/computed.html 
   - **Set intervals** : https://www.w3schools.com/jsref/met_win_setinterval.asp  
- **The Net Ninja's Vue Series**: https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg  





### Documented Bugs
- If encountered with this error ```node-pre-gyp build fail error while installing with `npm install` or `npm install -d` #1599```, then just run `npm audit fix`. 


 
