// retrieve data from database
async function showAllDatabase() {
	const token = localStorage.getItem("userAccess");
	await fetch("https://long-gold-llama-suit.cyclic.app//blogs", {
		headers: { Authorization: `Bearer ${token}` },
	})
		.then(async (res) => {
			if (res.status === 200) {
				const body = await res.json();
				const result = body.data.blog;
				result.forEach((art) => {
					const article = document.createElement("article");
					article.innerHTML = `<a href="#" class="image"><img src=${
						art.image.url
					} alt=""/></a><h3>${art.title}</h3><p>${
						art.description.substr(0, 150) + "..."
					}</p><ul class="actions"><li><a href="../mainblog.html?${
						art._id
					}" class="button">More</a></li><li onclick="return showEditFirebaseArticle('${
						art._id
					}')"><a href="#" class="button">Edit</a></li><li  onclick="return deleteEditArticle('${
						art._id
					}')"><a href="#" class="button">Delete</a></li></ul>`;
					document.getElementById("addedArticle").append(article);
				});
			} else {
				alert("server error");
			}
		})
		.catch((error) => console.error(error));
}
