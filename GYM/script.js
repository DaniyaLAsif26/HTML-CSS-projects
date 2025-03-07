const toTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 669) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

 const navHeight = document.querySelector('.navbar').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding' , navHeight + 10 + "px")