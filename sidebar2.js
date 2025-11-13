const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;
const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
    elem.addEventListener("click", () => {
        const hrefLinkClick = elem.href;

        allLinks.forEach((linkElem, index) => {
            if (linkElem.href === hrefLinkClick) {
                activeIndex = index;
                console.log("activeIndex", activeIndex);
                setActiveLink();
            } else {
                linkElem.classList.remove("active"); // remove active class from all links

            }
        });
    });
});

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
    document.body.classList.remove("collapsed"); // remove collapsed class when search input is focused
});
