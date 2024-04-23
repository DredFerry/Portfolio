// var navItem=document.getElementById('navItem');
// var cross=document.getElementById('cross');
// var ham=document.getElementById('ham');

// function navOpen(){
//     console.log("openNav");
//     nav.style.height='40vh';
//     cross.style.display='block';
//     ham.style.display='none';
//     navItem.style.visibility='visible';
// }
// function navClose(){
//     console.log("closeNav");
//     nav.style.height='0';
//     cross.style.display='none';
//     ham.style.display='block';
//     navItem.style.display='none';
// }



document.addEventListener('DOMContentLoaded', function() {
    var hamIcon = document.querySelector('.ham');
    var closeIcon = document.querySelector('.close');
    var navUl = document.querySelector('nav ul');
    var navBar=document.getElementById('navBar');


    // Open menu when hamburger icon is clicked
    hamIcon.addEventListener('click', function() {
        setTimeout(function() {
            navUl.style.visibility = 'visible';
        }, 600);
        hamIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navBar.style.height = '40vh';
    });
    
    // Close menu when close icon is clicked
    closeIcon.addEventListener('click', function() {
        navUl.style.visibility = 'hidden';
        closeIcon.style.display = 'none';
        hamIcon.style.display = 'block';
        navBar.style.height = '0vh';
    });
});
