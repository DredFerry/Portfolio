document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.animate');
    
    function scrollHandler() {
        elements.forEach(function(element) {
            if (isElementInViewport(element)) {
                console.log("in view");
                element.classList.add('active');
            } else {
                element.classList.remove('active'); // Remove 'active' class if element is out of view
            }
        });

        
    }
    var message = document.querySelector('.messageForm');
    function handleScroll() {
        if (isElementInViewport(message)) {
          message.classList.add('flip');
        } else {
            message.classList.remove('flip');
        }
      }


    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    

    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Initial check in case elements are already in view
});

// Configure ScrollReveal
ScrollReveal().reveal('.BottomSlidetxt', {
    delay: 0,
    duration: 1000, // Adjust the duration here (e.g., 1500 milliseconds)
    distance: '20px',
    origin: 'bottom',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true
});
ScrollReveal().reveal('.RightSlideTxt', {
    delay: 500,
    duration: 1000, // Adjust the duration here (e.g., 1500 milliseconds)
    distance: '20px',
    origin: 'right',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true
});
ScrollReveal().reveal('.LeftSlideTxt', {
    delay: 500,
    duration: 1000, // Adjust the duration here (e.g., 1500 milliseconds)
    distance: '20px',
    origin: 'left',
    easing:'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true
});






        var typed = new Typed('.typed' , {
            strings : ["Bishal", "a developer."],
            loop: true, 
            typeSpeed : 150,
            backSpeed :150,
        });

        // Initialize custom scrollbar
const customScrollbar = document.getElementById('customScrollbar');
const ps = new PerfectScrollbar(customScrollbar);


function photo(){
    console.log("clicked");
    document.getElementById("cover").style.zIndex=-70;
}
function noHover(){
    document.getElementById("cover").style.zIndex=101;

}




