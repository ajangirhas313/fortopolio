document.addEventListener('DOMContentLoaded', function() {

    // --- INISIALISASI ANIMASI PARTIKEL BINTANG (tsParticles) ---
    tsParticles.load("particles-js", {
        fpsLimit: 60,
        particles: {
            number: {
                value: 120, // Jumlah bintang
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff" // Warna bintang
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.8,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: false // Non-aktifkan garis antar bintang
            },
            move: {
                enable: true,
                speed: 0.5, // Kecepatan gerak bintang
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false // Non-aktifkan interaksi saat hover
                },
                onclick: {
                    enable: false, // Non-aktifkan interaksi saat klik
                },
                resize: true
            }
        },
        detectRetina: true
    });

    // --- EFEK KETIK (TYPING EFFECT) ---
    const typingText = document.querySelector('.typing-text');
    const words = ["Backend develover", "Frontend develover", "Fullstack develover", "Software developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let displayText;

        if (isDeleting) {
            displayText = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (typingText) {
          typingText.textContent = displayText;
        }

        let typeSpeed = 150;
        if (isDeleting) {
            typeSpeed /= 2;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, typeSpeed);
    }
    
    if (typingText) {
        type();
    }

    // --- ANIMASI SAAT SCROLL (SCROLL ANIMATION) ---
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- UPDATE TAHUN DI FOOTER ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});