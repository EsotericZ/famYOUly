$(document).ready(function() {
	// const newFirstName = $('#newFirstName');
	// const newLastName = $('#newLastName');
	// const newRole = $('#newRole');
	// const newPhoneNumber = $('#newPhoneNumber');
	// const newLevel = $('#newLevel');
	// const newVisible = $('#newVisible');
	const updateBtn = $('.updateBtn');
	
    updateBtn.on('click', async function(event) {
		console.log(event.target)
		console.log('id', event.target.parentNode.parentNode.children[1].children[0].children[0].children[0].value);
        console.log('first', event.target.parentNode.parentNode.children[1].children[0].children[1].children[1].value);
		console.log('last', event.target.parentNode.parentNode.children[1].children[0].children[1].children[2].value);
		console.log('role', event.target.parentNode.parentNode.children[1].children[0].children[2].children[1].value);
		console.log('phone', event.target.parentNode.parentNode.children[1].children[0].children[3].children[1].value);
		console.log('level', event.target.parentNode.parentNode.children[1].children[0].children[4].children[1].value);
		console.log('visible', event.target.parentNode.parentNode.children[1].children[0].children[5].children[1]);
		console.log('visible', event.target.parentNode.parentNode.children[1].children[0].children[5].children[1].value);
		event.preventDefault();
		await $.post('/api/users/updateuser', {
			id: event.target.parentNode.parentNode.children[1].children[0].children[0].children[0].value,
			firstName: event.target.parentNode.parentNode.children[1].children[0].children[1].children[1].value,
			lastName: event.target.parentNode.parentNode.children[1].children[0].children[1].children[2].value,
			role: event.target.parentNode.parentNode.children[1].children[0].children[2].children[1].value,
			phoneNumber: event.target.parentNode.parentNode.children[1].children[0].children[3].children[1].value,
			level: event.target.parentNode.parentNode.children[1].children[0].children[4].children[1].value,
			// visible: event.target.parentNode.parentNode.children[1].children[0].children[5].children[1].value,
		});
			window.location.reload();

		// 	firstName: newFirstName.val(),
		// 	lastName: newLastName.val(),
        //     role: newRole.val(),
		// 	phoneNumber: newPhoneNumber.val(),
		// 	level: newLevel.val(),
		// 	visible: newVisible.val(),
		// });

        // how to grab specifc form input based on button
        // *this* can be impliment
        // pull values from the parent node
	});
});