document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value; 
    const dob = document.getElementById('dob').value;
    const state = document.getElementById('state').value;
    const comment = document.getElementById('comment').value;
    
    const terms = document.querySelector('input[type="checkbox"]').checked; 
    
    const getGender = () => {
        const genderRadios = document.getElementsByName('gender');
        for (const radio of genderRadios) {
            if (radio.checked) {
                return radio.value;
            }
        }
        return '';
    };
    const gender = getGender();
    
    if (!fullname || !email) {
        alert("You need a name and email.");
        return;
    }
    
    if (password.length < 7) {
        alert("Password must be at least 7 characters long.");
        return;
    }

    const formData = { 
        name: fullname, 
        email: email, 
        password: password, 
        dob: dob,
        state: state,
        gender: gender,
        comment: comment,
        agreedToTerms: terms
    };
    
    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange=function() {
        if (xhr.readyState === 4 && xhr.status ===200) {
            alert("Form submitted successfully");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(null); 
});