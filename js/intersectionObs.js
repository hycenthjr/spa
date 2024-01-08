const faders = document.querySelectorAll(".fade-in");
const el = document.querySelectorAll('.fade-up');


const appearOnScroll = new IntersectionObserver(function(enteries, appearOnScroll) {
    enteries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, { rootMargin: '-50px'});

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const fadeUpObserver = new IntersectionObserver(function(enteries, fadeUpObserver) {
    enteries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('faded');
            fadeUpObserver.unobserve(entry.target)
        }
    })
}, {rootMargin: '-25px'});

el.forEach(el => {
    fadeUpObserver.observe(el);
});