document.addEventListener('DOMContentLoaded', () => {

    // Header animation
    anime({
        targets: '.header .name, .header .title',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(200, {start: 500}),
        easing: 'easeOutExpo'
    });

    // Section animations on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 1200,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Skills hover animation
    anime({
        targets: '.skill',
        scale: [
            { value: 1.1, easing: 'easeOutSine', duration: 200 },
            { value: 1, easing: 'easeInOutQuad', duration: 400 }
        ],
        delay: anime.stagger(100, {grid: [5, 2], from: 'center'}),
        loop: true
    });

});
