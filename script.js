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
    
    // 3D tilt effect on profile card - disabled to prevent distortion
    const card = document.querySelector('.profile-card');
    const container = document.querySelector('.container');
    
    // Subtle hover effect without 3D distortion
    container.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 30px 100px rgba(0, 0, 0, 0.35)';
    });
    
    // Return to original position when mouse leaves
    container.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 25px 80px rgba(0, 0, 0, 0.25)';
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