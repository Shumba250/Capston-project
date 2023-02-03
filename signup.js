async function signupValidation() {
	let firstName = document.getElementById("firstName").value;
	console.log(firstName);
	let lastName = document.getElementById("lastName").value;
	console.log(lastName);
	let email = document.getElementById("email").value;
	console.log(email);
	let password = document.getElementById("password").value;
	console.log(password);
	let firstNameError = document.getElementById("firstName");
	let firstNamechar = document.getElementById("firstNamechar");
	let lastNameError = document.getElementById("lastNameError");
	let lastNamechar = document.getElementById("lastNamechar");
	let emailError = document.getElementById("emailError");
	let emailchar = document.getElementById("emailchar");
	let passwordError = document.getElementById("passwordError");
	let passwordchar = document.getElementById("passwordchar");
	let validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let complex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

	await fetch("https://long-gold-llama-suit.cyclic.app/signups", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
		}),
	}).then(async (res) => {
		await res.json();
		if (res.status === 200) {
			alert("signup successful");
		} else if (res.status === 400) {
			alert("error");
		} else {
			alert("server error");
		}
	});
}
