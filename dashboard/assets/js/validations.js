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
var contactFormDB = firebase.database().ref("AddArticle");

function addArticle() {
	document
		.getElementById("addArticleButton")
		.addEventListener("click", function () {
			let nameValue = document.querySelector("#name").value;
			let description = document.getElementById("description").value;
			// console.log(`Title: ${nameValue}`);
			let descriptionValue = editor.getData();
			// console.log(`Description: ${descriptionValue}`);
			let titleValueError = document.getElementById("titleValueError");
			let titleValueMinError = document.getElementById("titleValueMinError");
			let editorValueError = document.getElementById("editorValueError");
			let editorValueMinError = document.getElementById("editorValueMinError");
			let uploadFileError = document.getElementById("uploadFileError");
			let image = document.getElementById("image").value;

			if (nameValue === "") {
				titleValueError.style.display = "block";
				setTimeout(() => {
					titleValueError.style.display = "none";
				}, 5000);
				return false;
			}
			if (nameValue.length < 20) {
				titleValueMinError.style.display = "block";
				setTimeout(() => {
					titleValueMinError.style.display = "none";
				}, 5000);
				return false;
			}
			if (description === "") {
				editorValueError.style.display = "block";
				setTimeout(() => {
					editorValueError.style.display = "none";
				}, 5000);
			}
			if (description.length < 20) {
				editorValueError.style.display = "block";
				setTimeout(() => {
					editorValueError.style.display = "none";
				}, 5000);
			}
			saveArticleMessage(nameValue, description);
		});
}
const saveArticleMessage = (nameValue, description) => {
	var newArticleContactForm = contactFormDB.push();
	newArticleContactForm.set({
		title: nameValue,
		description: description,
	});
};
addArticle();

function hideForm() {
	document.querySelector(".addArticleForm").style.display = "none";
}

function displayAddArticleForm() {
	document.querySelector(".addArticleForm").style.display = "block";
}
