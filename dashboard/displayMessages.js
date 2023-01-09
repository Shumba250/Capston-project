// function displayMessages() {
// 	let contact = JSON.parse(localStorage.getItem("contacts"));
// 	for (let i = 0; i < contact.length; i++) {
// 		let textMessage = document.createElement("tr");
// 		textMessage.innerHTML = `<tr>
//         <td>${contact[i].time}</td>
//         <td>${contact[i].name}</td>
//         <td>${contact[i].subject}</td>
//         <td>${contact[i].message}</td>
//         <td>${contact[i].email}</td>
//     </tr>`;
// 		document.getElementById("tbodyMessage").append(textMessage);
// 	}
// }

//retireve data from firebase

function displayMessages() {
	var retrieveContactForm = firebase.database().ref("contactForm");
	retrieveContactForm.once("value", function (snapshot) {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const data = childSnapshot.val();
			let textMessage = document.createElement("tr");
			textMessage.innerHTML = `<tr>
			<td>${data.name}</td>
			<td>${data.subject}</td>
			<td>${data.message}</td>
			<td>${data.email}</td>
			<td onclick="return deleteFirebaseMessages('${key}')" class="deleteComment" type="button">delete</td>
		</tr>`;
			document.getElementById("tbodyMessage").append(textMessage);
		});
	});
}
