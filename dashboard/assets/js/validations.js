function addArticle() {
	document
		.getElementById("addArticleButton")
		.addEventListener("click", function () {
			let nameValue = document.querySelector("#name").value;
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
		});
}
addArticle();

function hideForm() {
	document.querySelector(".addArticleForm").style.display = "none";
}

function displayAddArticleForm() {
	document.querySelector(".addArticleForm").style.display = "block";
}
