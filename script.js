const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("click", () => {

card.style.transform = "scale(0.95)";

setTimeout(()=>{
card.style.transform = "";
},150);

alert("Anda membuka informasi rumah elite ini!");

});

});
