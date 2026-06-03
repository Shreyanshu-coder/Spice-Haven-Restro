const button=document.querySelector(".hamburger");
const navigation=document.querySelector(".navigation");

button.addEventListener("click",function( ){
    navigation.classList.toggle("active");
    //  console.log("Hamburger clicked");
    console.log(navigation.classList);
});

const book_btn=document.querySelector(".book-btn");

book_btn.addEventListener("click",function(){

    const selectedSlot =
        document.querySelector(".slot-btn.selected");

    if(!selectedSlot){
        alert("Please select a time slot.");
        return;
    }

    alert(
        `Table booked for ${selectedSlot.textContent}`
    );
});


const slotButtons=document.querySelectorAll(".slot-btn");
slotButtons.forEach(button=>{
    button.addEventListener("click",()=>{

        slotButtons.forEach(btn=>{
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});