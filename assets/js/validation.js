// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDOBHqEu_FX5cwR-P79SUHPrl85Eu2R91g",
	authDomain: "contact-form-e2058.firebaseapp.com",
	databaseURL: "https://contact-form-e2058-default-rtdb.firebaseio.com",
	projectId: "contact-form-e2058",
	storageBucket: "contact-form-e2058.appspot.com",
	messagingSenderId: "484040147864",
	appId: "1:484040147864:web:7586cb329bf14a753761ed",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference the database
var contactFormDB = firebase.database().ref("contactForm");
var contactFormDBS = firebase.database().ref("loginForm");

function formValidation() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let subject = document.getElementById("subject").value;
	let message = document.getElementById("message").value;
	let validName = document.getElementById("validName");
	let validEmail = document.getElementById("validEmail");
	let validSubject = document.getElementById("validSubject");
	let validMessage = document.getElementById("validMessage");
	let notBelowCharactes = document.getElementById("notBelowCharactes");
	let emailValidityNot = document.getElementById("emailValidityNot");
	let emailValidity = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (name === "") {
		validName.style.display = "block";
		setTimeout(() => {
			validName.style.display = "none";
		}, 5000);
		return false;
	}
	if (email === "") {
		validEmail.style.display = "block";
		setTimeout(() => {
			validEmail.style.display = "none";
		}, 5000);
		return false;
	}
	if (!email.match(emailValidity)) {
		emailValidityNot.style.display = "block";
		setTimeout(() => {
			emailValidityNot.style.display = "none";
		}, 5000);
		return false;
	}
	if (subject === "") {
		validSubject.style.display = "block";
		setTimeout(() => {
			validSubject.style.display = "none";
		}, 5000);
		return false;
	}
	if (message === "") {
		validMessage.style.display = "block";
		setTimeout(() => {
			validMessage.style.display = "none";
		}, 5000);
		return false;
	}
	if (message.length < 20) {
		notBelowCharactes.style.display = "block";
		setTimeout(() => {
			notBelowCharactes.style.display = "none";
		}, 5000);
		return false;
	}
	saveMessage(name, email, subject, message);
}

const saveMessage = (name, email, subject, message) => {
	var newContactForm = contactFormDB.push();
	newContactForm.set({
		name: name,
		email: email,
		subject: subject,
		message: message,
	});
};

function loginFormValidation() {
	let idloginFormEmail = document.getElementById("idloginFormEmail").value;
	let loginFormEmail1 = document.getElementById("loginFormEmail1");
	let loginFormEmail = document.getElementById("loginFormEmail");
	let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let Password = document.getElementById("Password").value;
	let loginFormPassword = document.getElementById("loginFormPassword");
	if (idloginFormEmail === "") {
		loginFormEmail1.style.display = "block";
		setTimeout(() => {
			loginFormEmail1.style.display = "none";
		}, 5000);
		return false;
	}
	if (!idloginFormEmail.match(validEmailRegex)) {
		loginFormEmail.style.display = "block";
		setTimeout(() => {
			loginFormEmail.style.display = "none";
		}, 5000);
		return false;
	}
	if (Password === "") {
		loginFormPassword.style.display = "block";
		setTimeout(() => {
			loginFormPassword.style.display = "none";
		}, 5000);
		return false;
	}
	saveLoginMessage(idloginFormEmail, Password);
}

const saveLoginMessage = (idloginFormEmail, Password) => {
	var newLoginContactForm = contactFormDBS.push();
	newLoginContactForm.set({
		email: idloginFormEmail,
		Password: Password,
	});
};
