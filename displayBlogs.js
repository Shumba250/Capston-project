// function blogSummary() {
// 	let blogs = JSON.parse(localStorage.getItem("articles"));
// 	for (let i = 0; i < blogs.length; i++) {
// 		let summaryBlog = document.createElement("div");
// 		summaryBlog.className = "col-4 col-6-medium col-12-small";
// 		summaryBlog.innerHTML = `<article class="box style2">
//         <a href="#" class="image featured"
//             ><img src=${blogs[i].image} alt=""
//         /></a>
//         <h3>
//             <a href="mainblog.html>${blogs[i].id}" target="_blank"
//                 >${blogs[i].title}</a
//             >
//         </h3>
//         <p>
//            ${blogs[i].description.substr(0, 50) + "..."}
//         </p>
//         <h4><a  href="mainblog.html?${
// 					blogs[i].id
// 				}" target="_blank">Read more</a></h4>
//     </article>`;
// 		document.getElementById("summaryBlogs").append(summaryBlog);
// 	}
// }
function blogSummary() {
	var addArticleDatabase = firebase.database().ref("AddArticle");
	addArticleDatabase.once("value", function (snapshot) {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const data = childSnapshot.val();
			let summaryBlog = document.createElement("div");
			summaryBlog.className = "col-4 col-6-medium col-12-small";
			summaryBlog.innerHTML = `<article class="box style2">
                    <a href="#" class="image featured"
                        ><img src=${data.image}  alt=""
                    /></a>
                    <h3>
                        <a href="mainblog.html>${key}" target="_blank"
                            >${data.title}</a
                        >
                    </h3>
                    <p>
                       ${data.description.substr(0, 50) + "..."}
                    </p>
                    <h4><a  href="mainblog.html?${key}" target="_blank">Read more</a></h4>
                </article>`;
			document.getElementById("summaryBlogs").append(summaryBlog);
		});
	});
}
