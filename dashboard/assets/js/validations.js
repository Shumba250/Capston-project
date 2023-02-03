// function showAllDatabase() {
// 	const blogs = JSON.parse(localStorage.getItem("articles"));
// 	blogs.forEach((element) => {
// 		const article = document.createElement("article");
// 		article.innerHTML = `<a href="#" class="image"
// 	><img src=${element.image} alt=""
// /></a>
// <h3>${element.title}</h3>
// <p>
// 	${element.description.substr(0, 150) + "..."}
// </p>
// <ul class="actions">
// 	<li><a href="../mainblog.html?${element.id}" class="button">More</a></li>
// 	<li onclick="return showEditArticle(${
// 		element.id
// 	})"><a href="#" class="button">Edit</a></li>
// 	<li  onclick="return deleteEditArticle(${
// 		element.id
// 	})"><a href="#" class="button">Delete</a></li>
// </ul>`;
// 		document.getElementById("addedArticle").append(article);
// 	});
// }
// function showEditArticle(articleId) {
// 	document.getElementById("commentForm").style.display = "block";
// 	const blogs = JSON.parse(localStorage.getItem("articles"));
// 	for (let i = 0; i < blogs.length; i++) {
// 		if (articleId == blogs[i].id) {
// 			let demoName = document.getElementById("demoName");
// 			demoName.value = blogs[i].title;
// 			editor1.setData(`${blogs[i].description}`);
// 			document.getElementById("updateButton").addEventListener("click", () => {
// 				const image = document.getElementById("image1");
// 				if (image.value === null || image.value === "") {
// 					blogs[i].image = blogs[i].image;
// 					blogs[i].title = demoName.value;
// 					blogs[i].description = editor1.getData();
// 					localStorage.setItem("articles", JSON.stringify(blogs));
// 					location.reload();
// 				} else {
// 					const reader = new FileReader();
// 					reader.addEventListener("load", () => {
// 						blogs[i].image = reader.result;
// 						blogs[i].title = demoName.value;
// 						blogs[i].description = editor1.getData();
// 						localStorage.setItem("articles", JSON.stringify(blogs));
// 						location.reload();
// 					});
// 					reader.readAsDataURL(image.files[0]);
// 				}
// 			});
// 			break;
// 		}
// 	}
// }

//function to edit blog articles in firebase
async function showEditFirebaseArticle(key) {
	const token = localStorage.getItem("userAccess");
	await fetch(`https://long-gold-llama-suit.cyclic.app/blogs/${key}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then(async (res) => {
		if (res.status === 200) {
			const body = await res.json();
			const result = body.data.blog;
			document.getElementById("commentForm").style.display = "block";
			let demoName = document.getElementById("demoName");
			demoName.value = result.title;
			editor1.setData(`${result.description}`);
			document
				.getElementById("updateButton")
				.addEventListener("click", async () => {
					const formData = new FormData();
					let title = document.getElementById("demoName").value;
					let image = document.getElementById("image1").files[0];
					let descriptionValue = editor1.getData();
					formData.append("title", title);
					formData.append("description", descriptionValue);
					formData.append("image", image);
					await fetch("https://long-gold-llama-suit.cyclic.app/blogs", {
						method: "PATCH",
						headers: { Authorization: `Bearer ${token}` },
						body: formData,
					}).then(async (res) => {
						if (res.status === 200) {
							alert("Success");
						} else if (res.status === 400) {
							alert("bad request");
						} else if (res.status === 401) {
							alert("Unauthorized");
						} else {
							alert("server error");
						}
					});
					location.reload();
				});
		}
	});
}

const updateFirebaseArticle = (key, demoName, descriptionValue, image) => {
	firebase.database().ref(`/AddArticle/${key}`).update({
		title: demoName,
		description: descriptionValue,
		image: image,
	});
};

//function to delete blog articles from firebase
async function deleteEditArticle(key) {
	// var addEditArticleDatabase = firebase.database().ref(`/AddArticle/${key}`);
	const token = localStorage.getItem("userAccess");
	await fetch(`https://long-gold-llama-suit.cyclic.app/blogs/${key}`, {
		method: "DELETE",
		headers: { Authorization: `Bearer ${token}` },
	}).then(async (res) => {
		if (res.status === 200) {
			alert("article deleted");
		} else if (res.status === 400) {
			alert("error");
		} else if (res.status === 401) {
			alert("unauthorized");
		} else {
			alert("server error");
		}
	});
	addEditArticleDatabase.remove();
	location.reload();
}
//function to delete firebase messages
async function deleteFirebaseMessages(key) {
	// var deleteFirebaseDatabase = firebase.database().ref(`/contactForm/${key}`);
	const token = localStorage.getItem("userAccess");
	await fetch(
		`https://long-gold-llama-suit.cyclic.app/contactMessages/${key}`,
		{
			method: "DELETE",
			headers: { Authorization: `Bearer ${token}` },
		}
	).then(async (res) => {
		if (res.status === 200) {
			alert("message deleted");
		} else if (res.status === 400) {
			alert("error");
		} else if (res.status === 401) {
			alert("unauthorized");
		} else {
			alert("server error");
		}
	});
	location.reload;
}

//function to delete firebase comments

// function deleteEditArticle(articleId) {
// 	const blogs = JSON.parse(localStorage.getItem("articles"));
// 	for (let i = 0; i < blogs.length; i++) {
// 		if (blogs[i].id == articleId) {
// 			blogs.splice(i, 1);
// 			localStorage.setItem("articles", JSON.stringify(blogs));
// 			break;
// 		}
// 	}
// 	location.reload();
// }
// function saveEditArticle() {
// 	const demoName = document.getElementById("demoName").value;
// 	const descriptionEdit = editor1.getData();
// 	const demoMessage = document.getElementById("demoMessage").value;
// 	const image = document.getElementById("image").value;

// }

async function addArticle() {
	document
		.getElementById("addArticleButton")
		.addEventListener("click", function () {
			let nameValue = document.querySelector("#name").value;
			// let description = document.getElementById("description").value;
			let image = document.getElementById("image").files[0];
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
			if (descriptionValue === "") {
				editorValueError.style.display = "block";
				setTimeout(() => {
					editorValueError.style.display = "none";
				}, 5000);
				return false;
			}
			if (description.length < 20) {
				editorValueMinError.style.display = "block";
				setTimeout(() => {
					editorValueMinError.style.display = "none";
				}, 5000);
			}
			// add article in the mongoDB database
			const token = localStorage.getItem("userAccess");
			const formData = new FormData();
			formData.append("title", nameValue);
			formData.append("description", descriptionValue);
			formData.append("image", image);

			fetch("https://long-gold-llama-suit.cyclic.app/blogs", {
				method: "POST",
				headers: { Authorization: `Bearer ${token}` },
				body: formData,
			}).then(async (res) => {
				if (res.status === 200) {
					const body = await res.json();
					const article = document.createElement("article");
					article.innerHTML = `<a href="#" class="image"><img src=${
						body.data.blog.image.url
					} alt=""/></a><h3>${body.data.blog.title}</h3><p>${
						body.data.blog.description.substr(0, 150) + "..."
					}</p><ul class="actions"><li><a href="../mainblog.html?${
						body.data.blog._id
					}" class="button">More</a></li><li onclick="return showEditFirebaseArticle('${
						body.data.blog._id
					}')"><a href="#" class="button">Edit</a></li><li  onclick="return deleteEditArticle('${
						body.data.blog._id
					}')"><a href="#" class="button">Delete</a></li></ul>`;
					document.getElementById("addedArticle").append(article);
					alert("Success");
				} else if (res.status === 400) {
					alert("Error");
				} else if (res.status === 401) {
					alert("unauthorized");
				} else if (res.status === 403) {
					alert("Should have an admin access to post an article");
				} else {
					alert("server error");
				}
			});

			//saving articles added to the local storage
			// const blogs = JSON.parse(localStorage.getItem("articles"));
			// const newBlog = {};
			// newBlog["id"] = Date.now().toString();
			// newBlog["title"] = nameValue;
			// newBlog["description"] = descriptionValue;
			// newBlog["likes"] = 0;
			// newBlog["comments"] = [];
			// const img = document.getElementById("image");
			// const reader = new FileReader();
			// reader.addEventListener("load", () => {
			// 	document.getElementById("image").src = reader.result;
			// 	const img = document.getElementById("image");
			// 	// 	blogs.push(newBlog);
			// 	// 	localStorage.setItem("articles", JSON.stringify(blogs));
			// });
			// reader.readAsDataURL(image.files[0]);

			// saveArticleMessage(nameValue, descriptionValue, image);
			// document.querySelector(".alert").style.display = "block";
			// setTimeout(() => {
			// 	document.querySelector(".alert").style.display = "none";
			// }, 3000);
			// location.reload();
		});
}
// const saveArticleMessage = (nameValue, descriptionValue, image) => {
// 	var newArticleContactForm = addArticleFormDB.push();
// 	newArticleContactForm.set({
// 		title: nameValue,
// 		description: descriptionValue,
// 		image: image,
// 		comments: [],
// 		likes: 0,
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

// function showEditArticleForm() {
// 	document.querySelectorAll(".editButtonForm").style.display = "block";
// }

function editArticleEdit() {
	let demoName = document.getElementById("demoName").value;
	let editorEdit = editor1.getData();
	let errordemoName = document.getElementById("demoNameText");
	let errorEdit = document.getElementById("demoMessageText");
	if (demoName === "") {
		errordemoName.style.display = "block";
		setTimeout(() => {
			errordemoName.style.display = "none";
		}, 5000);
		return false;
	}
	if (editorEdit === "") {
		editorEdit.style.display = "block";
		setTimeout(() => {
			editorEdit.style.display = "none";
		}, 5000);
		return false;
	}
}
