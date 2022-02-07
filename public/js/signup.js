$(document).ready(function() {
	const familynameField = $('#familynameField');
	const firstnameField = $('#firstnameField');
	const lastnameField = $('#lastnameField');
	const emailField = $('#emailField');
	const passwordField = $('#passwordField');
	const roleField = $('#roleField');
	const signupBtn = $('#signupBtn');
	
    signupBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/users/signup', {
			familyName: familynameField.val(),
			firstName: firstnameField.val(),
			lastName: lastnameField.val(),
			email: emailField.val(),
			password: passwordField.val(),
			role: roleField.val(),
		});
		window.location.href = '/waitingapproval';
	});
});