let i = 0;
let imgSlides = [];
let time = 5000;

imgSlides[0] = 'passion1.jpg';
imgSlides[1] = 'passion2.jpg';

changeImgSlides = () => {
    document.querySelector('#sec2 img').src = imgSlides[i];

    if (i < imgSlides.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImgSlides, time);
}

window.onload = changeImgSlides;

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


let toggleBtn = document.querySelector(".toggle-btn");
let toggleStatus = false;
let toggleActive = 'FARMSQAURE.png';
let togglePassive = 'FARMSQAURE CANCEL.png';

const toggle = () => {
    let toggleDiv = document.querySelector("aside");
    let toggleUl = document.querySelector("aside ul");
    let toggleList = document.querySelectorAll("aside ul li a"); 

    if (toggleStatus === false) {
        toggleDiv.style.visibility = 'visible'
        toggleUl.style.visibility = 'visible';
        toggleDiv.style.width = '150px';
        toggleBtn.src = togglePassive


        for (let i = 0; i < toggleList.length; i++) { 
            toggleList[i].style.opacity = 1;
        }

        toggleStatus = true;
    } else if (toggleStatus === true) {
        toggleDiv.style.visibility = 'hidden'
        toggleDiv.style.width = '50px';
        toggleBtn.src = toggleActive;

        for (let i = 0; i < toggleList.length; i++) { 
            toggleList[i].style.opacity = 0;
        }

        toggleUl.style.visibility = 'hidden';

        toggleStatus = false;
    }
}

toggleBtn.addEventListener('click', toggle);

let getStartedBtn = document.querySelector(".loginBtn");

getStartedBtn.addEventListener('click', function prevent(e){
    preventDefault(e);
});


