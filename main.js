// Initialize Firebase
var config = {
    apiKey: "AIzaSyD2z5Gq-aslu5cyHF-V4x8cGDxwhFQ4u3Y",
    authDomain: "openacademy-contact-form.firebaseapp.com",
    databaseURL: "https://openacademy-contact-form.firebaseio.com",
    projectId: "openacademy-contact-form",
    storageBucket: "openacademy-contact-form.appspot.com",
    messagingSenderId: "244330105209"
  };
  firebase.initializeApp(config);

// reference messages collection
var messagesRef = firebase.database().ref('messages');



/* Event Listener */

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';
    var message = document.querySelector("#greeting");
    message.innerHTML = "Thank You "+ name +". Your message has been sent."

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
    // Clear form after submission
    document.getElementById('contactForm').reset();
}

/* Function to get form values */
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}