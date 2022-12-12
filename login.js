function loginValidation() {
	let idloginFormEmail = document.getElementById("idloginFormEmail").value;
	let Password = document.getElementById("Password").value;
	let loginFormEmail = document.getElementById("loginFormEmail");
	let loginFormPassword = document.getElementById("loginFormPassword");
	if (!idloginFormEmail.match(emailValidity)) {
		loginFormEmail.style.display = "block";
		setTimeout(() => {
			loginFormEmail.style.display = "none";
		}, 5000);
		return false;
	}
	if (Password == "") {
		loginFormPassword.style.display = "block";
		setTimeout(() => {
			loginFormPassword.style.display = "none";
		}, 5000);
		return false;
	}
}
