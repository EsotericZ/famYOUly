$(document).ready(function() {
	// const newFirstName = $('#newFirstName');
	// const newLastName = $('#newLastName');
	// const newRole = $('#newRole');
	// const newPhoneNumber = $('#newPhoneNumber');
	// const newLevel = $('#newLevel');
	// const newVisible = $('#newVisible');
	const updateBtn = $('.updateBtn');
	
    updateBtn.on('click', async function(event) {
        console.log('first', event.target.parentNode.parentNode.children[1].children[0].children[0].children[1].value);
		console.log('last', event.target.parentNode.parentNode.children[1].children[0].children[0].children[1].value);
		console.log('role', event.target.parentNode.parentNode.children[1].children[0].children[1].children[1].value);
		console.log('phone', event.target.parentNode.parentNode.children[1].children[0].children[2].children[1].value);
		console.log('level', event.target.parentNode.parentNode.children[1].children[0].children[3].children[1].value);
		console.log('visible', event.target.parentNode.parentNode.children[1].children[0].children[4].children[1]);
		event.preventDefault();
        // alert(newFirstName.val())
        // alert(newLastName.val())
        // alert(newRole.val())
        // alert(newPhoneNumber.val())
        // alert(newLevel.val())
        // alert(newVisible.val())
		// await $.post('/api/users/updateuser', {
		// 	firstName: newFirstName.val(),
		// 	lastName: newLastName.val(),
        //     role: newRole.val(),
		// 	phoneNumber: newPhoneNumber.val(),
		// 	level: newLevel.val(),
		// 	visible: newVisible.val(),
		// });
		// window.location.href = '/';


        // how to grab specifc form input based on button
        // *this* can be impliment
        // pull values from the parent node
	});
});