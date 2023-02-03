async function mainBlog() {
	const token = localStorage.getItem("userAccess");
	let splittedURL = window.location.href.split("?").reverse();
	blogId = splittedURL[0];
	fetch(`https://long-gold-llama-suit.cyclic.app/blogs/${blogId}`, {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	}).then(async (res) => {
		if (res.status == 200) {
			const body = await res.json();
			const data = body.data.blog;
			let blogsSection = document.createElement("section");
			blogsSection.innerHTML = `<header class="main">
                        <h1>${data.title}</h1>
                    </header>
                
                    <span class="image main"><img src=${data.image.url} alt="" /></span>
                
                    <p>${data.description}</p>
                    <div class="commentlikesdiv">
                    <div class="icons"><i class="fa-solid fa-thumbs-up fa-3x"></i><p class="iconNumber">${data.likes.length}</p></div>
                    <div class="comm"><i class="fa-solid fa-message fa-3x"></i><p class="commNumber">${data.comments.length}</p></div>
                    </div>
                    <div id="commentDiv" class="commentDiv">
                    </div>
                    
                    <p onclick="return displayCommentForm()" id="comment">
                        <strong>Click here to leave a comment</strong>
                    </p>

                    <!-- Form -->
                    <form onsubmit="return false" id="commentForm" action="#">
                        <h3>Comment Form</h3>
                        <div class="alert">comment Successful</div>
                        <div class="row gtr-uniform">
                            <div class="col-12">
                                <textarea
                                    name="demoMessage"
                                    id="commentMessage"
                                    placeholder="Enter your comment here"
                                    rows="6"
                                ></textarea>
                                <small id="demoMessageText" class="error"
                                    >this can't be empty</small
                                >
                                <small id="demoMessageText1" class="error"
                                    >atleast 15 characters</small
                                >
                            </div>
                            <div class="col-12">
                                <ul class="actions">
                                    <li>
                                        <input
                                            id="submitCommentButton"
                                            onclick="return commentSubmit();"
                                            type="submit"
                                            value="Send Comment"
                                            class="primary"
                                        />
                                    </li>
                                    <li>
                                        <input
                                            onclick="return commentReset()"
                                            type="reset"
                                            value="Reset"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>`;

			document.getElementById("innerSection").append(blogsSection);

			const blogComments = data.comments;
			blogComments.forEach(async (cmnt) => {
				const user = await (
					await fetch(
						`https://long-gold-llama-suit.cyclic.app/signups/${cmnt.userId}`
					)
				).json();
				const commentDiv = document.createElement("div");
				commentDiv.classList.add("singleComment");
				commentDiv.innerHTML = `<i class="fa-solid fa-user fa-2x"></i><h4>${
					user.data.user.firstName
				}</h4><h5>${new Date(cmnt.createdAt).toLocaleString()}</h5><p>${
					cmnt.comment
				}</p>`;
				document.querySelector("div.commentDiv").appendChild(commentDiv);
			});
			document
				.querySelector("i.fa-thumbs-up")
				.addEventListener("click", async (e) => {
					e.preventDefault();
					try {
						await fetch(
							`https://long-gold-llama-suit.cyclic.app/blogs/${blogId}/likes`,
							{
								method: "PUT",
								headers: { Authorization: `Bearer ${token}` },
							}
						).then(async (res) => {
							if (res.status === 200) {
								const response = await res.json();
								document.querySelector(".iconNumber").innerHTML =
									response.likes;
								alert("Success");
							} else if (res.status === 404) {
								alert("bad response");
							} else if (res.status === 401) {
								alert("unauthorized");
							} else if (res.status === 403) {
								alert("only users allowed to like");
							} else {
								alert("server error");
							}
						});
					} catch (error) {
						console.log(error);
					}
				});
		}
	});
}

// function mainBlog() {
// 	let blogs = JSON.parse(localStorage.getItem("articles"));
// 	let splittedURL = window.location.href.split("?").reverse();
// 	blogId = splittedURL[0];
// 	for (let i = 0; i < blogs.length; i++) {
// 		if (blogs[i].id == blogId) {
// 			let blogsSection = document.createElement("section");
// 			blogsSection.innerHTML = `<header class="main">
//         <h1>${blogs[i].title}</h1>
//     </header>

//     <span class="image main"><img src=${blogs[i].image} alt="" /></span>

//     <p>${blogs[i].description}</p>
//     <div id="commentDiv" class="commentDiv">
//         <span>mudakikwa aimable</span>
//         <span> ,mudakikwaaimable05@gmail.com</span>
//     </div>
//     <p onclick="return displayCommentForm()" id="comment">
//         <strong>Click here to leave a comment</strong>
//     </p>

//     <!-- Form -->
//     <form onsubmit="return false" id="commentForm" action="#">
//         <h3>Comment Form</h3>
//         <div class="row gtr-uniform">
//             <div class="col-6 col-12-xsmall">
//                 <input
//                     type="text"
//                     name="demoName"
//                     id="demoName"
//                     value=""
//                     placeholder="Name"
//                 />
//                 <small id="demoNameText" class="error"
//                     >this field can't be empty</small
//                 >
//             </div>
//             <div class="col-6 col-12-xsmall">
//                 <input
//                     type="email"
//                     name="demoEmail"
//                     id="demoEmail"
//                     value=""
//                     placeholder="Email"
//                 />
//                 <small id="demoEmailText" class="error"
//                     >this field can't be empty</small
//                 >
//                 <small id="demoMessageText2" class="error"
//                     >invalid email address</small
//                 >
//             </div>
//             <div class="col-12">
//                 <textarea
//                     name="demoMessage"
//                     id="demoMessage"
//                     placeholder="Enter your comment here"
//                     rows="6"
//                 ></textarea>
//                 <small id="demoMessageText" class="error"
//                     >this can't be empty</small
//                 >
//                 <small id="demoMessageText1" class="error"
//                     >atleast 15 characters</small
//                 >
//             </div>
//             <div class="col-12">
//                 <ul class="actions">
//                     <li>
//                         <input
//                             id="submitCommentButton"
//                             onclick="return commentSubmit()"
//                             type="submit"
//                             value="Send Comment"
//                             class="primary"
//                         />
//                     </li>
//                     <li>
//                         <input
//                             onclick="return commentReset()"
//                             type="reset"
//                             value="Reset"
//                         />
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </form>`;
// 			document.getElementById("innerSection").append(blogsSection);
// 		}
// 		break;
// 	}
// }
