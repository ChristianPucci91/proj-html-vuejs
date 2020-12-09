// test JS
var app = new Vue({
  el: "#app",
  data: {
   logo:"img/logo.png",
   navBar:[ // array link navbar
     {section:"Home"},
     {section:"Courses"},
     {section:"Intructors"},
     {section:"Events"},
     {section:"Pages"},
     {section:"Elements"}
   ],
   section1:[ //icone e testo section 1
     {img:"img/h5-custom-icon-1.png",text:"Languages"},
     {img:"img/h5-custom-icon-2.png",text:"Software"},
     {img:"img/h5-custom-icon-3.png",text:"Business"},
     {img:"img/h5-custom-icon-4.png",text:"Chemistry"},
     {img:"img/h5-custom-icon-5.png",text:"Science"},
     {img:"img/h5-custom-icon-6.png",text:"DIY&Craft"}
   ]
  }
})
