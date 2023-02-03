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

async function displayMessages() {
	const token = localStorage.getItem("userAccess");
	await fetch("https://long-gold-llama-suit.cyclic.app/contactMessages", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}).then(async (res) => {
		if (res.status === 200) {
			const body = await res.json();
			const contactMessage = body.data.messages;
			contactMessage.forEach(async (msg) => {
				let textMessage = document.createElement("tr");
				textMessage.innerHTML = `<tr>
			<td>${msg.name}</td>
			<td>${msg.subject}</td>
			<td>${msg.message}</td>
			<td>${msg.email}</td>
			<td onclick="return deleteFirebaseMessages('${msg._id}')" class="deleteComment" type="button">delete</td>
		</tr>`;
				document.getElementById("tbodyMessage").append(textMessage);
			});
		} else if (res.status === 400) {
			alert("error");
		} else if (res.status === 401) {
			alert("unathorized");
		} else {
			alert("server error");
		}

	});
}
