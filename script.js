// Advanced animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Handle loading screen
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // Hide loading animation after page is loaded
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.visibility = 'hidden';
    }, 1500);
    

    
    // Animate links with staggered delay
    const links = document.querySelectorAll('.link-item');
    
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(30px)';
        
        // Apply specific colors to link icons based on data attribute
        const icon = link.querySelector('.link-icon');
        const color = link.getAttribute('data-color');
        
        if (color) {
            icon.style.background = color;
        }
        
        // Staggered animation
        setTimeout(() => {
            link.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 800 + (index * 120));
    });
    
    // 3D tilt effect on profile card
    const card = document.querySelector('.profile-card');
    const container = document.querySelector('.container');
    
    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
        const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Return to original position when mouse leaves
    container.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    let isDarkMode = true;
    
    themeToggle.addEventListener('click', () => {
        if (isDarkMode) {
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        
        isDarkMode = !isDarkMode;
    });
    
    // Animate stats counters
    const stats = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target, duration) => {
        const start = 0;
        const increment = 1;
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.innerText = current + '+';
            
            if (current >= target) {
                element.innerText = target + '+';
                clearInterval(timer);
            }
        }, stepTime);
    };
    
    // Use Intersection Observer to trigger counter animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.innerText);
                animateCounter(el, target, 1500);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
    
    // Parallax scrolling effect for background shapes
    window.addEventListener('scroll', () => {
        const shapes = document.querySelectorAll('.shape');
        const scrollY = window.scrollY;
        
        shapes.forEach((shape, index) => {
            // Different speeds for different shapes
            const speed = 0.1 + (index * 0.05);
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
});