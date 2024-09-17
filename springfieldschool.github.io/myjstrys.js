document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector(".sticky-footer");
    var footerHeight = footer.offsetHeight;

    function updateFooterPosition() {
        var bodyHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;

        if (bodyHeight < windowHeight) {
            var newFooterPosition = windowHeight - bodyHeight + footerHeight;
            footer.style.marginTop = newFooterPosition + "px";
        } else {
            footer.style.marginTop = "auto";
        }
    }

    window.addEventListener("resize", updateFooterPosition);
    updateFooterPosition();
});

document.addEventListener("DOMContentLoaded", function () {
    var stickySection = document.querySelector(".sticky-section");

    function updateStickySection() {
        var contentRect = document.querySelector(".content").getBoundingClientRect();
        var contentBottom = contentRect.bottom;
        
        if (contentBottom < 0) {
            stickySection.style.position = "fixed";
            stickySection.style.top = "0";
        } else {
            stickySection.style.position = "sticky";
            stickySection.style.top = "20px"; // Adjust this value based on your layout
        }
    }

    window.addEventListener("scroll", updateStickySection);
    updateStickySection();
});
