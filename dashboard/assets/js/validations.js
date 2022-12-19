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
// retrieve data from firebase
// var addArticleDatabase = firebase.database().ref("AddArticle");
// addArticleDatabase.once("value", function (snapshot) {
// 	var data = snapshot.val();
// 	for (let i in data) {
// 		console.log(data[i]);
// 	}
// });

function showAllDatabase() {
	const blogs = JSON.parse(localStorage.getItem("articles"));
	blogs.forEach((element) => {
		const article = document.createElement("article");
		article.innerHTML = `<a href="#" class="image"
	><img src=${element.image} alt=""
/></a>
<h3>${element.title}</h3>
<p>
	${element.description}
</p>
<ul class="actions">
	<li><a href="../mainblog.html" class="button">More</a></li>
	<li><a href="#" class="button">Edit</a></li>
	<li><a href="#" class="button">Delete</a></li>
</ul>`;
		document.getElementById("addedArticle").append(article);
	});
}

function addArticle() {
	document
		.getElementById("addArticleButton")
		.addEventListener("click", function () {
			let nameValue = document.querySelector("#name").value;
			let description = document.getElementById("description").value;
			let image = document.getElementById("image").value;
			// console.log(`Title: ${nameValue}`);
			let descriptionValue = editor.getData();
			// console.log(`Description: ${descriptionValue}`);
			let titleValueError = document.getElementById("titleValueError");
			let editorValueError = document.getElementById("editorValueError");
			let editorValueMinError = document.getElementById("editorValueMinError");
			let uploadFileError = document.getElementById("uploadFileError");

			if (nameValue === "") {
				titleValueError.style.display = "block";
				setTimeout(() => {
					titleValueError.style.display = "none";
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
				editorValueMinError.style.display = "block";
				setTimeout(() => {
					editorValueMinError.style.display = "none";
				}, 5000);
			}
			const blogs = JSON.parse(localStorage.getItem("articles"));
			const newBlog = {};
			newBlog["id"] = Date.toString();
			newBlog["title"] = nameValue;
			newBlog["description"] = descriptionValue;
			newBlog["likes"] = 0;
			newBlog["comments"] = [];
			const img = document.getElementById("image");
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				newBlog["image"] = reader.result;
				blogs.push(newBlog);
				localStorage.setItem("articles", JSON.stringify(blogs));
			});
			reader.readAsDataURL(img.files[0]);

			location.reload();

			// saveArticleMessage(nameValue, description, image);
		});
}
// const saveArticleMessage = (nameValue, description, image) => {
// 	var newArticleContactForm = contactFormDB.push();
// 	newArticleContactForm.set({
// 		title: nameValue,
// 		description: description,
// 		image: image,
// 	});
// };
addArticle();

function hideForm() {
	document.querySelector(".addArticleForm").style.display = "none";
}

function displayAddArticleForm() {
	document.querySelector(".addArticleForm").style.display = "block";
}

function showArticles() {
	document.querySelector("#articles").style.display = "block";
}

function showMessages() {
	document.querySelector("#messages").style.display = "block";
}
function showComments() {
	document.querySelector("#comments").style.display = "block";
}
