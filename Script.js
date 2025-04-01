    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.remove('exit');
            } else {
                
                if (entry.boundingClientRect.top < 0) {
                    entry.target.classList.add('exit');
                    entry.target.classList.remove('active');
                } else {
                  
                    entry.target.classList.remove('active', 'exit');
                }
            }
        });
    }, {
        threshold: 0.2, //
        rootMargin: '-50px' // 
    });

        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
