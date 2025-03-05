// Initialize EmailJS
(function() {
    emailjs.init('nMFXnb1rCriUinWM7');
})();

// Form Submit Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();




    // Send the form data
    emailjs.sendForm('service_6ly28lf', 'template_4et6xd3', this)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send the message, please try again.');
        });
});
