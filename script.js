```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const header = document.getElementById("site-header");

    const navMenu = document.getElementById("nav-menu");

    const hamburger = document.getElementById("hamburger");

    const navLinks = [
        ...document.querySelectorAll(".nav-link")
    ];

    const professionEl =
        document.getElementById("rotating-profession");

    const contactForm =
        document.getElementById("contactForm");

    const yearEl =
        document.getElementById("year");


    /* =====================================================
       TYPEWRITER
       ===================================================== */

    const professions = [
        "AI/ML Engineer",
        "Python Developer",
        "LLM Application Builder",
        "Computer Vision Engineer"
    ];

    let professionIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeWriter() {

        if (!professionEl) {
            return;
        }

        const currentWord =
            professions[professionIndex];


        /* Typing */

        if (!deleting) {

            professionEl.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            /* Finished word */

            if (
                charIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeWriter,
                    1600
                );

                return;
            }


            setTimeout(
                typeWriter,
                90
            );

        }


        /* Deleting */

        else {

            professionEl.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            /* Finished deleting */

            if (charIndex === 0) {

                deleting = false;

                professionIndex =
                    (professionIndex + 1)
                    % professions.length;

                setTimeout(
                    typeWriter,
                    400
                );

                return;
            }


            setTimeout(
                typeWriter,
                45
            );

        }

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    function closeMenu() {

        navMenu.classList.remove("active");

        hamburger.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    }


    function toggleMenu() {

        const isOpen =
            navMenu.classList.toggle(
                "active"
            );

        hamburger.classList.toggle(
            "active",
            isOpen
        );

        hamburger.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    }


    if (hamburger) {

        hamburger.addEventListener(
            "click",
            toggleMenu
        );

    }


    /* Close after clicking navigation */

    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /* Close with Escape */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* Close when clicking outside menu */

    document.addEventListener(
        "click",
        event => {

            if (
                navMenu.classList.contains(
                    "active"
                ) &&
                !navMenu.contains(
                    event.target
                ) &&
                !hamburger.contains(
                    event.target
                )
            ) {

                closeMenu();

            }

        }
    );


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

    updateHeader();


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections = [
        ...document.querySelectorAll(
            "section[id]"
        )
    ];


    const sectionObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const currentId =
                        `#${entry.target.id}`;


                    navLinks.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.getAttribute(
                                "href"
                            ) === currentId
                        );

                    });

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px",

                threshold: 0
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });


    /* =====================================================
       SCROLL ANIMATIONS
       ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            `
            .stat,
            .highlight,
            .skill-category,
            .service-card,
            .project-card,
            .contact-item,
            .contact-form
            `
        );


    const animationObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        animationObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(element => {

        animationObserver.observe(
            element
        );

    });


    /* =====================================================
       NOTIFICATION
       ===================================================== */

    function showNotification(
        message,
        type = "info"
    ) {

        const existing =
            document.querySelector(
                ".notification"
            );


        if (existing) {
            existing.remove();
        }


        const notification =
            document.createElement(
                "div"
            );


        notification.className =
            `notification ${type}`;


        const icon =
            type === "success"
                ? "fa-circle-check"
                : "fa-circle-info";


        notification.innerHTML = `
            <i class="fas ${icon}"></i>
            <span>${message}</span>
        `;


        document.body.appendChild(
            notification
        );


        requestAnimationFrame(() => {

            notification.classList.add(
                "show"
            );

        });


        setTimeout(() => {

            notification.classList.remove(
                "show"
            );


            setTimeout(() => {

                notification.remove();

            }, 300);

        }, 3200);

    }


    /* =====================================================
       DOWNLOAD CV
       ===================================================== */

    function downloadCv() {

        /*
            Put your CV in the same folder
            as index.html.

            File name must be:

            Shivada_Manoj_CV.pdf
        */

        const cvPath =
            "Shivada_Manoj_CV.pdf";


        const link =
            document.createElement("a");


        link.href = cvPath;

        link.download =
            "Shivada_Manoj_CV.pdf";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        setTimeout(() => {

            showNotification(
                "If the CV did not download, add Shivada_Manoj_CV.pdf beside index.html.",
                "info"
            );

        }, 500);

    }


    const downloadCvBtn =
        document.getElementById(
            "downloadCvBtn"
        );


    const aboutCvBtn =
        document.getElementById(
            "aboutCvBtn"
        );


    if (downloadCvBtn) {

        downloadCvBtn.addEventListener(
            "click",
            downloadCv
        );

    }


    if (aboutCvBtn) {

        aboutCvBtn.addEventListener(
            "click",
            downloadCv
        );

    }


    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    const rippleButtons =
        document.querySelectorAll(
            `
            .hire-btn,
            .submit-btn,
            .about-btn
            `
        );


    rippleButtons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "ripple";


                ripple.style.width =
                    `${size}px`;


                ripple.style.height =
                    `${size}px`;


                ripple.style.left =
                    `${
                        event.clientX -
                        rect.left -
                        size / 2
                    }px`;


                ripple.style.top =
                    `${
                        event.clientY -
                        rect.top -
                        size / 2
                    }px`;


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 650);

            }
        );

    });


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const formData =
                    new FormData(
                        contactForm
                    );


                const name =
                    String(
                        formData.get(
                            "name"
                        ) || ""
                    ).trim();


                const email =
                    String(
                        formData.get(
                            "email"
                        ) || ""
                    ).trim();


                const subject =
                    String(
                        formData.get(
                            "subject"
                        ) || ""
                    ).trim();


                const message =
                    String(
                        formData.get(
                            "message"
                        ) || ""
                    ).trim();


                /* Validation */

                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    showNotification(
                        "Please fill in all fields.",
                        "info"
                    );

                    return;

                }


                /* Email body */

                const body =
                    `Name: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `${message}`;


                /* Create mailto */

                const mailto =
                    `mailto:shivadamanoj0@gmail.com` +
                    `?subject=${encodeURIComponent(
                        subject
                    )}` +
                    `&body=${encodeURIComponent(
                        body
                    )}`;


                /* Open email client */

                window.location.href =
                    mailto;


                /* Reset */

                contactForm.reset();


                showNotification(
                    "Opening your email app...",
                    "success"
                );

            }
        );

    }


    /* =====================================================
       FOOTER YEAR
       ===================================================== */

    if (yearEl) {

        yearEl.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       START TYPEWRITER
       ===================================================== */

    if (professionEl) {

        typeWriter();

    }

});
```
