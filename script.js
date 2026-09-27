const revealItems = document.querySelectorAll(
    ".product, .featured-content, .craft-details div, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
});
