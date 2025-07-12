 document.addEventListener('DOMContentLoaded', function() {
        // Scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll(
                '.contact-details, .contact-form, .map-section, .hours-section, .emergency-contact');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        // Run once on load
        animateOnScroll();

        // Run on scroll
        window.addEventListener('scroll', animateOnScroll);

        // Form submission
         //form script
         const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    // Build the WhatsApp message
    const whatsappMessage = `
        *New Contact Form Submission*
        👤 Name: ${name}
        📧 Email: ${email}
        📱 Phone: ${phone || "N/A"}
        📝 Subject: ${subject}
        💬 Message: ${message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Replace leading zero with country code (assumed Kenya +254)
    const rawPhone = "0701705888".replace(/^0/, "256");

    const whatsappURL = `https://wa.me/${rawPhone}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');

    // Optional: Reset the form
    contactForm.reset();
});


        //form script  


        //form

        // Highlight current day in business hours
        const highlightCurrentDay = () => {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const today = new Date().getDay();
            const currentDay = days[today];

            const hourItems = document.querySelectorAll('.hour-item');
            hourItems.forEach(item => {
                item.classList.remove('active');
                if (item.querySelector('.day').textContent === currentDay) {
                    item.classList.add('active');
                }
            });
        };

        highlightCurrentDay();

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
         // Header scroll behavior
        let lastScroll = 0;
        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;

        window.addEventListener('scroll', function () {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) { // At top of page, always show header
                header.classList.remove('hidden'); return;
            } if (currentScroll > lastScroll &&
                !header.classList.contains('hidden')) {
                // Scrolling down
                header.classList.add('hidden');
            } else if (currentScroll < lastScroll && header.classList.contains('hidden')) { // Scrolling
                upheader.classList.remove('hidden');
            } lastScroll = currentScroll;
        });
    }); 
    

    
      //toggle
let buttonElement=document.querySelector('.btn');
let links=document.querySelector('.links');
buttonElement.addEventListener('click',function(){
links.classList.toggle('show');

});