console.log("UniFi Quantum Fund Loaded");

document.querySelectorAll(".card").forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-5px)";
card.style.transition = "0.3s";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px)";

});

});
