/* ============================= Fade In Animation =============================
================================================================================ */

const obderver1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeIn__css');
        } else {
            entry.target.classList.remove('karimov__fadeIn__css');
        }
    });
});
const hiddenElements1 = document.querySelectorAll('.karimov__fadeIn');
hiddenElements1.forEach((el) => obderver1.observe(el));

