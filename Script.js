// Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Add the active class when the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.remove('exit');
            } else {
                // If element is above the viewport, add exit class
                if (entry.boundingClientRect.top < 0) {
                    entry.target.classList.add('exit');
                    entry.target.classList.remove('active');
                } else {
                    // If element is below the viewport, remove both classes
                    entry.target.classList.remove('active', 'exit');
                }
            }
        });
    }, {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '-50px' // Add a small margin to trigger slightly before the element is in view
    });

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
