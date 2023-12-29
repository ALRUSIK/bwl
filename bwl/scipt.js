document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Here you would typically make an AJAX request to a server-side script
    // For demonstration, we'll just log to the console and reset the form
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    alert('Thank you for your message. We will contact you soon.');

    this.reset();
});
