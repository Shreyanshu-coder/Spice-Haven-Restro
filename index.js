const button=document.querySelector(".hamburger");
const navigation=document.querySelector(".navigation");

button.addEventListener("click",function( ){
    navigation.classList.toggle("active");
    //  console.log("Hamburger clicked");
    console.log(navigation.classList);
});

