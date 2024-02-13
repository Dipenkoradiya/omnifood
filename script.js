const btnnavel = document.querySelector(".nav-menu-button");
const headerel = document.querySelector(".header");
btnnavel.addEventListener("click", function () {
    headerel.classList.toggle("nav-open");
});
console.log("hello");

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);

        if (href === "#")
            window.scrollTo({
                top: 20,
                behavior: "smooth",
            });
    });
});

/* sticky header*/
const sectionheroEl = document.querySelector(".section1-2");
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if (ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        //in the viewport
        root: null,
        threshold: 0,
        rootMargin: "-80px",
    }
);
obs.observe(sectionheroEl);
