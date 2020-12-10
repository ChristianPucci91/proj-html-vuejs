// test JS
var app = new Vue({
  el: "#app",
  data: {
   logo:"img/logo.png",
   counter:0,
   navBar:[ // array link navbar
     {section:"Home"},
     {section:"Courses"},
     {section:"Intructors"},
     {section:"Events"},
     {section:"Pages"},
     {section:"Elements"}
   ],
   menuNav:[ // icon Header
     {icon:"fa-search"},
     {icon:"fa-shopping-bag"},
     {icon:"fa-bars"}
   ],
   section1:[ //icone e testo section 1
     {img:"img/h5-custom-icon-1.png",text:"Languages"},
     {img:"img/h5-custom-icon-2.png",text:"Software"},
     {img:"img/h5-custom-icon-3.png",text:"Business"},
     {img:"img/h5-custom-icon-4.png",text:"Chemistry"},
     {img:"img/h5-custom-icon-5.png",text:"Science"},
     {img:"img/h5-custom-icon-6.png",text:"DIY&Craft"}
   ],
   section5:[ // menu drop sezione 5
     {text:"What We Do"},
     {text:"Degree Programme"},
     {text:"Career Achievements"},
     {text:"Personal Managment"},
     {text:"Steps To Success"},
     {text:"Knowledge Transfer"},
   ],
   footer1:[ //Footer 1 colonna
     {
       img:"img/logo.png",
       info:[
         {text:"Providing Life Changing"},
         {text:"Experiences Through"},
         {text:"Education. Class That Fit Your"},
         {text:"Busy Life. Closer to Home"}
       ],
       contact:"1-677-124-44227",
       time:"Mon - Sat 8.00 - 18.00"
     }
   ],
   footer2:[ //Footer 2 colonna
     {
       title:"Popular Courses",
       info:[
         {text:"Business English",name:"Preston Marshall"},
         {text:"Social Computing",name:"David Sanders"},
         {text:"Learn Spanish",name:"Jannie King"}
       ]
     }
   ],
   footer3:[ // Footer 3 colonna
     {
       title:"Support",
       info:[
         {text:"User dashboard"},
         {text:"Contact Us"},
         {text:"FAQ"},
         {text:"Course Offer"},
         {text:"Events"}
       ]
     }
   ],
   footer4:[ // Footer 4 colonna
     {title:"Flexible Learning",img:"img/footer-img-1.png"}
   ],

   call:"+44 300 303 0266", // info footer

   social:[ // icon footer
     {icon:"fa-twitter"},
     {icon:"fa-instagram"},
     {icon:"fa-facebook"}
   ]
  }
})
