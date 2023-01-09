function displayComments() {
	var retrieveContactForm = firebase.database().ref("commentForm");
	retrieveContactForm.once("value", function (snapshot) {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const data = childSnapshot.val();
			let textMessage = document.createElement("tr");
			textMessage.innerHTML = `<tr>
			<td>${data.name}</td>
			<td>${data.email}</td>
			<td>${data.comment}</td>
			<td onclick="return deleteFirebaseComments('${key}')" class="deleteComment" type="button">delete</td>
		</tr>`;
			document.getElementById("tbodycomment").append(textMessage);
		});
	});
}
