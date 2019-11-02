(function () {
    hideShowNav()
})()

function hideShowNav () {
    let prevPos = window.pageYOffset;
    let navOnScroll = document.body.getAttribute("data-scroll-nav")
    switch (navOnScroll) {
        case "show":
            document.body.style.paddingBottom = "45px"
            window.removeEventListener('scroll', onScroll)
            break;
        case "hide":
            document.body.style.paddingBottom = "0px"
            window.addEventListener('scroll', onScroll)
            break;
        default:
            console.error("The navigation behaviour can only be [show] or [hide].")
            break;
    }

    function onScroll() {
        let currPos = window.pageYOffset
        if (prevPos > currPos) {
        document.getElementById("section-nav").style.transform = "translateY(0)"
        } else {
        document.getElementById("section-nav").style.transform = "translateY(100%)"
        }
        prevPos = currPos;
    }
}

