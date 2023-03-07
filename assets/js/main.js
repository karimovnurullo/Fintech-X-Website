const accordion = document.querySelectorAll('.accordion_container');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


let menuIcon = document.querySelector(".menu__icon");
let closeIcon = document.querySelector(".close__icon");
let hiddenNav = document.querySelector(".hidden__nav");
let playVideoIcon = document.querySelector(".section__7_video_box_overlay_play");
let playVideoCloseIcon = document.querySelector(".section__7_video_box_hidden_video_close");
let playVideo = document.querySelector(".section__7_video_box_hidden_video");
let video = document.querySelectorAll("iframe");

menuIcon.addEventListener('click', () => {
    hiddenNav.style.top = "110px";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener('click', () => {
    hiddenNav.style.top = "-190px";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
})



playVideoIcon.addEventListener('click', () => {
    playVideo.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
})
playVideoCloseIcon.addEventListener('click', () => {
    playVideo.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
    video.forEach(i => {
        const source = i.src
        i.src = ''
        i.src = source
    })
})
