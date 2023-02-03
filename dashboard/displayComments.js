async function displayComments() {
	const token = localStorage.getItem("userAccess");
	await fetch(`http://localhost:3000/signups/${cmnt.userId}`, {
		headers: { Authorization: `Bearer ${token}` },
	}).then(async (res) => {
		if (res.status === 200) {
			const body = res.json();
			const blogComments = body.data.comments
			blogComments.forEach((cmnt) => {
				let textMessage = document.createElement("tr");
				textMessage.innerHTML = `<tr>
					<td>${cmnt.name}</td>
					<td>${cmnt.email}</td>
					<td>${cmnt.comment}</td>
					<td onclick="return deleteFirebaseComments('${key}')" class="deleteComment" type="button">delete</td>
				</tr>`;
				document.getElementById("tbodycomment").append(textMessage);
			});
		}
	});
}
