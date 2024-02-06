function scrollToElement(elementSelector, instance = 0) {
    // select all elements with the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if(elements.length > instance) {
        // scrolll to the element
        elements[instance].scrollIntoView({
            behavior: "smooth"
        });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener("click", () => {
    scrollToElement('.header');
});

link2.addEventListener("click", () => {
    scrollToElement('.Education');
});

link3.addEventListener("click", () => {
    scrollToElement('.certifications');
});

link4.addEventListener("click", () => {
  scrollToElement('.content');
});

link5.addEventListener("click", () => {
  scrollToElement('.exp');
});





const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}