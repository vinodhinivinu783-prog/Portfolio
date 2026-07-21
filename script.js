/* ==========================================
   VINODHINI PORTFOLIO V2 SCRIPT
========================================== */


/* =========================
   LOADER
========================= */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    setTimeout(()=>{

        loader.style.opacity="0";
        loader.style.visibility="hidden";

    },1200);

});



/* =========================
   TYPING EFFECT
========================= */

new Typed("#typing",{

    strings:[

        "Aspiring Data Analyst",
        "Python Developer",
        "SQL Enthusiast",
        "Data Visualization Learner"

    ],

    typeSpeed:70,
    backSpeed:40,
    backDelay:1500,
    loop:true

});



/* =========================
   MOBILE MENU
========================= */


const menuBtn=document.getElementById("menu-btn");

const menu=document.getElementById("menu");


menuBtn.onclick=()=>{

    menu.classList.toggle("active");

};



document.querySelectorAll("#menu a").forEach(link=>{

    link.onclick=()=>{

        menu.classList.remove("active");

    }

});



/* =========================
   DARK LIGHT MODE
========================= */


const themeBtn=document.getElementById("theme-btn");


themeBtn.onclick=()=>{


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){


        themeBtn.classList.replace(
            "fa-moon",
            "fa-sun"
        );


        localStorage.setItem(
            "theme",
            "light"
        );


    }

    else{


        themeBtn.classList.replace(
            "fa-sun",
            "fa-moon"
        );


        localStorage.setItem(
            "theme",
            "dark"
        );

    }


};



/* LOAD SAVED THEME */


if(localStorage.getItem("theme")==="light"){


    document.body.classList.add("light");


    themeBtn.classList.replace(
        "fa-moon",
        "fa-sun"
    );

}





/* =========================
   HEADER EFFECT
========================= */


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY>80){

        header.style.boxShadow=
        "0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        header.style.boxShadow="none";

    }


});





/* =========================
   SCROLL TOP
========================= */


const scrollBtn=document.getElementById(
    "scrollTop"
);



window.addEventListener("scroll",()=>{


    if(window.scrollY>500){

        scrollBtn.style.display="block";

    }

    else{

        scrollBtn.style.display="none";

    }


});



scrollBtn.onclick=()=>{


window.scrollTo({

    top:0,

    behavior:"smooth"

});


};





/* =========================
   COUNTER ANIMATION
========================= */


const counters=document.querySelectorAll(
    ".counter"
);


let started=false;



function counterStart(){


if(started) return;


const section=document.querySelector(".stats");


const top=section.getBoundingClientRect().top;



if(top < window.innerHeight-100){


started=true;



counters.forEach(counter=>{


let target=parseFloat(
    counter.dataset.target
);


let count=0;


let speed=target/80;



function update(){


count+=speed;


if(count<target){


counter.innerHTML=
target%1!==0?
count.toFixed(2):
Math.ceil(count);


requestAnimationFrame(update);


}

else{


counter.innerHTML=target;


}


}


update();


});


}



}


window.addEventListener(
"scroll",
counterStart
);







/* =========================
   SCROLL REVEAL
========================= */


const revealElements=document.querySelectorAll(

".section-header,"
+".about-container,"
+".education-card,"
+".skill,"
+".soft-card,"
+".timeline-item,"
+".project-card,"
+".achievement-card,"
+".certificate-card,"
+".contact-container"

);



function reveal(){


revealElements.forEach(element=>{


let position=
element.getBoundingClientRect().top;



if(position < window.innerHeight-100){


element.classList.add("fade","show");


}



});


}



window.addEventListener(
"scroll",
reveal
);


window.addEventListener(
"load",
reveal
);






/* =========================
 ACTIVE NAVBAR
========================= */


const sections=document.querySelectorAll(
"section"
);


const navLinks=document.querySelectorAll(
"#menu a"
);



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top=
section.offsetTop-150;



if(scrollY>=top){

current=
section.id;

}


});



navLinks.forEach(link=>{


link.classList.remove("active");



if(link.href.includes(current)){


link.classList.add("active");


}


});


});







/* =========================
 SMOOTH SCROLL
========================= */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.onclick=function(e){


let target=document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


};


});






/* =========================
 CONTACT FORM
========================= */


const form=document.getElementById(
"contactForm"
);



if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();


alert(
"Thank you! Your message has been received."
);


form.reset();



});


}






/* =========================
 PROJECT CARD EFFECT
========================= */


document.querySelectorAll(
".project-card"
)
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


let rect=
card.getBoundingClientRect();


let x=
e.clientX-rect.left;


let y=
e.clientY-rect.top;



let rotateX=
(y-rect.height/2)/-20;


let rotateY=
(x-rect.width/2)/20;



card.style.transform=
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});





console.log(
"🚀 Vinodhini Portfolio V2 Loaded Successfully"
);