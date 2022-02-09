$(document).ready(function() {
    const kidFirstName = $('#kidFirstName');
    const kidLastName = $('#kidLastName');
    const kidNickname = $('#kidNickname');
    const kidPronouns = $('#kidPronouns');
    const kidBirthday = $('#kidBirthday');
    const kidFamilyName = $('#kidFamilyName');
    const saveChild = $('#saveChild');
	
    saveChild.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/children/createchild', {
            firstName: kidFirstName.val(),
            lastName: kidLastName.val(),
            nickname: kidNickname.val(),
            pronouns: kidPronouns.val(),
            birthday: kidBirthday.val(),
            familyName: kidFamilyName.val(),
		});
        window.location.reload();
	});
});