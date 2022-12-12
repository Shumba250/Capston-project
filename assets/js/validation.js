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
}
