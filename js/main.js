const burgerBtn = document.querySelector(".burger__menu ")
const sidebar = document.querySelector(".sidebar")

burgerBtn.addEventListener("click", () => {
	burgerBtn.classList.toggle("close")
	sidebar.classList.toggle("active")
})
