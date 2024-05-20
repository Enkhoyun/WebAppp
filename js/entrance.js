const entranceName = document.querySelector(".entranceName");
const options = document.querySelector(".options");

entranceName.addEventListener("click", () => {
    options.classList.toggle("active");
});

