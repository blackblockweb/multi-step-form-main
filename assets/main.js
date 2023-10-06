let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let next = document.getElementById("next");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let rightcard = document.getElementById("rightcard");
let rightcard1 = document.getElementById("rightcard1");
let back = document.getElementById("back");
let content1 =document.querySelector(".content1")
let con2 =document.querySelector(".con2")
let con3 =document.querySelector(".con3")
let next2 = document.getElementById("next2");
let check = document.getElementById("check");
let card1 =document.querySelector(".card1");
let card2 =document.querySelector(".card2");
let card3 =document.querySelector(".card3");
let back1 = document.getElementById("back1");
let next3 = document.getElementById("next3");



step1.onclick = function () {
window.location.href = "../index.html";



    
};
function sherif0 () {
    if (phone.value === "") {
        phone.style.border = "1px solid red";
    
} else {
    window.location.href="../step2.html";
    
};
};

 function sherif () {
    window.location.href = "../index.html";
    
      
        
    };
     function sherif2 () {
        content1.style.border = "1px solid #0a2952";
    
    };
    function sherif3 () {
        content1.style.border = "1px solid rgba(145, 143, 143, 0.338)";
    };
    function sherif4 () {
        con2.style.border = "1px solid #0a2952";
    
    };
    function sherif5 () {
        con2.style.border = "1px solid rgba(145, 143, 143, 0.338)";
    };
    function sherif6 () {
        con3.style.border = "1px solid #0a2952";
    
    };
    function sherif7 () {
        con3.style.border = "1px solid rgba(145, 143, 143, 0.338)";
    };

    function sherif11 () {
        window.location.href = "../step3.html";
    }

   
 function sherif8() {
    card1.style.border= "2px solid #4643f5";
 }
 function sherif9() {
    card2.style.border= "2px solid #4643f5";
 }
 function sherif10() {
    card3.style.border= "2px solid #4643f5";
 }
  function sherif12() {
    window.location.href = "../step2.html";
  }
  function sherif13() {
    window.location.href = "../step4.html";
  }
  function sherif14() {
    window.location.href = "../step3.html";
  }
  function sherif15() {
    window.location.href = "../thank.html";
  }