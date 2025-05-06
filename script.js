// Advanced animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const profileModal = document.getElementById('taishiyade-modal');
    const emailModal = document.getElementById('email-modal');
    const taishiyadeTitle = document.getElementById('taishiyade-title');
    const profileImage = document.getElementById('profile-image-container');
    const emailContactLink = document.getElementById('email-contact-link');
    const closeBtns = document.querySelectorAll('.close-modal');
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyNotification = document.getElementById('copy-notification');
    
    // 共通のモーダルを開く関数
    const openModal = (modal) => {
        modal.style.display = 'block';
        // Use setTimeout to ensure display:block is applied before adding the show class
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    };
    
    // taishiyadeタイトルがクリックされたときにプロフィールモーダルを開く
    taishiyadeTitle.addEventListener('click', () => openModal(profileModal));
    
    // プロフィール画像がクリックされたときにプロフィールモーダルを開く
    profileImage.addEventListener('click', () => openModal(profileModal));
    
    // メールリンクがクリックされたときにメールモーダルを開く
    emailContactLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(emailModal);
    });
    
    // メールアドレスをコピーする機能
    copyEmailBtn.addEventListener('click', () => {
        const emailAddress = 'taishi@alphabyte.co.jp';
        navigator.clipboard.writeText(emailAddress).then(() => {
            // コピー成功時の通知を表示
            copyNotification.style.opacity = '1';
            setTimeout(() => {
                copyNotification.style.opacity = '0';
            }, 2000);
        }).catch(err => {
            console.error('コピーに失敗しました:', err);
        });
    });
    
    // Close modal when X is clicked
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentModal = btn.closest('.modal');
            closeModal(parentModal);
        });
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Close modal function
    function closeModal(modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Match this with the CSS transition time
    }
    // Handle loading screen
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    // Hide loading animation after page is loaded
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.visibility = 'hidden';
    }, 1500);
    
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the selected tab content
            const tabId = tab.getAttribute('data-tab');
            const activeContent = document.getElementById(`${tabId}-content`);
            if (activeContent) {
                activeContent.style.display = 'block';
            }
        });
    });
    

    
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
    
    // 初期表示時に「リンク集」タブを選択状態にする
    const linksTab = document.querySelector('.tab[data-tab="links"]');
    if (linksTab) {
        linksTab.classList.add('active');
        const linksContent = document.getElementById('links-content');
        if (linksContent) {
            linksContent.style.display = 'block';
        }
    }
    
    // 3D tilt effect and hover functionality removed

    
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