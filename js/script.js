// test JS
var app = new Vue({
  el: "#app",
  data: {
   logo:"img/logo.png",
   jumboCarousel:[ // carousel header
     {
       title:"Contemporary Ideas",
       subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
     },
     {
       title:"Contemporary Ideas 2",
       subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 2"
     },
     {
       title:"Contemporary Ideas 3",
       subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. 3"
     }
   ],
   carouselIndex:0,
   counter:0,
   navBar:[ // array link navbar
     {section:"Home",link:"#"},
     {section:"Courses",link:"#"},
     {section:"Intructors",link:"#"},
     {section:"Events",link:"#"},
     {section:"Pages",link:"#"},
     {section:"Elements",link:"#"}
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
   section4index:0, // index secondo carousel sezione 4
   section4:[ // array secondo carousel
     {
       img:"img/testimonials-standard-2.png",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
       name:"Joan Collins",
       id:"STUDENT"
     },
     {
       img:"img/testimonials-standard-3.png",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 2",
       name:"Joan Collins 2",
       id:"STUDENT 2"
     },
     {
       img:"img/testimonials-standard-4.png",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 3",
       name:"Joan Collins 3",
       id:"STUDENT 3"
     }
   ],
   section5index:0, // index section 5
   section5:[ // menu drop sezione 5
     {
       menu:"What We Do",
       title:"Learning Possibilities",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
       textArray:[
         {subText:"We enrich lives through learning."},
         {subText:"Maximizing potential through individual attention."},
         {subText:"The trusted name for specialized training."},
         {subText:"People tech.People learn.This is where they connect."}
       ]
     },
     {
       menu:"Degree Programme",
       title:"Learning Possibilities 2",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 2",
       textArray:[
         {subText:"We enrich lives through learning. 2"},
         {subText:"Maximizing potential through individual attention. 2"},
         {subText:"The trusted name for specialized training. 2"},
         {subText:"People tech.People learn.This is where they connect. 2"}
       ]
     },
     {
       menu:"Career Achievements",
       title:"Learning Possibilities 3",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 3",
       textArray:[
         {subText:"We enrich lives through learning. 3"},
         {subText:"Maximizing potential through individual attention. 3"},
         {subText:"The trusted name for specialized training. 3"},
         {subText:"People tech.People learn.This is where they connect. 3"}
       ]

     },
     {
       menu:"Personal Managment",
       title:"Learning Possibilities 4",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 4",
       textArray:[
         {subText:"We enrich lives through learning. 4"},
         {subText:"Maximizing potential through individual attention. 4"},
         {subText:"The trusted name for specialized training. 4"},
         {subText:"People tech.People learn.This is where they connect. 4"}
       ]
     },
     {
       menu:"Steps To Success",
       title:"Learning Possibilities 5",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 5",
       textArray:[
         {subText:"We enrich lives through learning. 5"},
         {subText:"Maximizing potential through individual attention. 5"},
         {subText:"The trusted name for specialized training. 5"},
         {subText:"People tech.People learn.This is where they connect. 5"}
       ]

     },
     {
       menu:"Knowledge Transfer",
       title:"Learning Possibilities 6",
       text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 6",
       textArray:[
         {subText:"We enrich lives through learning. 6"},
         {subText:"Maximizing potential through individual attention. 6"},
         {subText:"The trusted name for specialized training. 6"},
         {subText:"People tech.People learn.This is where they connect. 6"}
       ]
     },
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
         {text:"User dashboard",link:"#"},
         {text:"Contact Us",link:"#"},
         {text:"FAQ",link:"#"},
         {text:"Course Offer",link:"#"},
         {text:"Events",link:"#"}
       ]
     }
   ],
   footer4:[ // Footer 4 colonna
     {title:"Flexible Learning",img:"img/footer-img-1.png"}
   ],

   call:"+44 300 303 0266", // info footer

   social:[ // icon footer
     {icon:"fa-twitter",link:"#"},
     {icon:"fa-instagram",link:"#"},
     {icon:"fa-facebook-f",link:"#"}
   ]
 },

 methods:{ // torna all'header al click
   scrollTop() {
     window.scrollTo(0,0);
   },
   headerCarousel: function(index){
     this.carouselIndex = index;
   },
   section4Carousel: function(index){
     this.section4index = index;
   },
   section5Menu: function(index){
     this.section5index = index;
     console.log(this.section5index);
   }
  }
})
