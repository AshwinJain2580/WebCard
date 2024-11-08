/* Typing Animation */
var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Programmer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* Aside (Active Style) */
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;

for(let i=0; i<totalNavList; i++)
{
    console.log(navList[i]);
    const anchorTag = navList[i].querySelector("a");
    console.log(anchorTag);

    anchorTag.addEventListener("click", function() {
        for(let j=0; j<totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
    })
}