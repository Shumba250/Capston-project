// retrieve data from firebase
function showAllDatabase() {
	var addArticleDatabase = firebase.database().ref("AddArticle");
	addArticleDatabase.once("value", function (snapshot) {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const data = childSnapshot.val();
			const article = document.createElement("article");
			article.innerHTML = `<a href="#" class="image"
	   ><img src=${data.image} alt=""
   /></a>
   <h3>${data.title}</h3>
   <p>
	   ${data.description.substr(0, 150) + "..."}
   </p>
   <ul class="actions">
	   <li><a href="../mainblog.html?${key}" class="button">More</a></li>
	   <li onclick="return showEditFirebaseArticle('${key}')"><a href="#" class="button">Edit</a></li>
	   <li  onclick="return deleteEditArticle('${key}')"><a href="#" class="button">Delete</a></li>
   </ul>`;
			document.getElementById("addedArticle").append(article);
		});
	});
}
