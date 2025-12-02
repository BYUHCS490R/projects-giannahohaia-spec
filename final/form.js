document.getElementById('contactForm').addEventListener('submit', function (event) {
    
    const fn = document.getElementById('fullName').value.trim();
    const em = document.getElementById('email').value.trim();
    const tp = document.getElementById('topic').value;
    const qs = document.getElementById('question').value.trim();
    
    let msg = '';

    if (fn === '' || em === '' || qs === '' || tp === '') {
        msg += "Full Name, Email, Topic, and Question are required.\n";
    }
    
    if (qs.length < 20) {
        msg += "Question must be at least 20 characters long.\n";
    }
    
    if (msg !== '') {
        event.preventDefault();
        alert("Form submission failed due to the following errors:\n\n" + msg);
    }
});