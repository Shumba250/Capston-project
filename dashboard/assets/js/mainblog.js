function mainBlog() {
	var addArticleDatabase = firebase.database().ref("AddArticle");
	let splittedURL = window.location.href.split("?").reverse();
	blogId = splittedURL[0];
	addArticleDatabase.once("value", function (snapshot) {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const data = childSnapshot.val();
			if (key == blogId) {
				let blogsSection = document.createElement("section");
				blogsSection.innerHTML = `<header class="main">
                        <h1>${data.title}</h1>
                    </header>
                
                    <span class="image main"><img src=${data.image} alt="" /></span>
                
                    <p>${data.description}</p>
                    <div id="commentDiv" class="commentDiv">
                        <span>mudakikwa aimable</span>
                        <span> ,mudakikwaaimable05@gmail.com</span>
                    </div>
                    <p onclick="return displayCommentForm()" id="comment">
                        <strong>Click here to leave a comment</strong>
                    </p>
                
                    <!-- Form -->
                    <form onsubmit="return false" id="commentForm" action="#">
                        <h3>Comment Form</h3>
                        <div class="alert">comment Successful</div>
                        <div class="row gtr-uniform">
                            <div class="col-6 col-12-xsmall">
                                <input
                                    type="text"
                                    name="demoName"
                                    id="commentName"
                                    value=""
                                    placeholder="Name"
                                />
                                <small id="demoNameText" class="error"
                                    >this field can't be empty</small
                                >
                            </div>
                            <div class="col-6 col-12-xsmall">
                                <input
                                    type="email"
                                    name="demoEmail"
                                    id="commentEmail"
                                    value=""
                                    placeholder="Email"
                                />
                                <small id="demoEmailText" class="error"
                                    >this field can't be empty</small
                                >
                                <small id="demoMessageText2" class="error"
                                    >invalid email address</small
                                >
                            </div>
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
			}
		});
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
