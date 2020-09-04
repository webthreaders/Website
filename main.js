var firebaseConfig = {
  apiKey: "AIzaSyDTJGtMh3xh1EAR7bqGOjpayh91FbLxV6E",
  authDomain: "web-threaders.firebaseapp.com",
  databaseURL: "https://web-threaders.firebaseio.com",
  projectId: "web-threaders",
  storageBucket: "web-threaders.appspot.com",
  messagingSenderId: "836124880505",
  appId: "1:836124880505:web:139b96428103dd93f42ea8",
  measurementId: "G-9VX2XNW1RT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
