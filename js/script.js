/******************************* typing animition *******************************/
var typed = new Typed(".typing", {
    strings: ["", "Software Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
/******************************* typing animition *******************************/
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll("li"),
    totalNavList = navlist.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navlist[i].querySelector("a");
}