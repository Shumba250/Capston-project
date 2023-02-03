
async function blogSummary() {
	const token = localStorage.getItem("userAccess");
	const dbArticles = await fetch(
		"https://long-gold-llama-suit.cyclic.app/blogs",
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);
	let articles = await dbArticles.json();
	let blogs = articles.data.blog;
	console.log(blogs);
	for (let i = 0; i < blogs.length; i++) {
		let summaryBlog = document.createElement("div");
		summaryBlog.className = "col-4 col-6-medium col-12-small";
		summaryBlog.innerHTML = `<article class="box style2">
        <a href="#" class="image featured"
            ><img src=${blogs[i].image.url} alt=""
        /></a>
        <h3>
            <a href="mainblog.html>${blogs[i]._id}" target="_blank"
                >${blogs[i].title}</a
            >
        </h3>
        <p>
           ${blogs[i].description.substr(0, 50) + "..."}
        </p>
        <h4><a  href="mainblog.html?${
					blogs[i]._id
				}" target="_blank">Read more</a></h4>
    </article>`;
		document.getElementById("summaryBlogs").append(summaryBlog);
	}
}
// function blogSummary() {
// 	var addArticleDatabase = firebase.database().ref("AddArticle");
// 	addArticleDatabase.once("value", function (snapshot) {
// 		snapshot.forEach((childSnapshot) => {
// 			const key = childSnapshot.key;
// 			const data = childSnapshot.val();
// 			let summaryBlog = document.createElement("div");
// 			summaryBlog.className = "col-4 col-6-medium col-12-small";
// 			summaryBlog.innerHTML = `<article class="box style2">
//                     <a href="#" class="image featured"
//                         ><img src=${data.image}  alt=""
//                     /></a>
//                     <h3>
//                         <a href="mainblog.html>${key}" target="_blank"
//                             >${data.title}</a
//                         >
//                     </h3>
//                     <p>
//                        ${data.description.substr(0, 50) + "..."}
//                     </p>
//                     <h4><a  href="mainblog.html?${key}" target="_blank">Read more</a></h4>
//                 </article>`;
// 			document.getElementById("summaryBlogs").append(summaryBlog);
// 		});
// 	});
// }

