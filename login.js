let loginBtn = document.querySelector("#login");
let registerBtn = document.querySelector("#register");
let container = document.querySelector("#container");

registerBtn.addEventListener("click",() => {
    container.classList.add("active");
})

loginBtn.addEventListener("click",() => {
    container.classList.remove("active");
})
