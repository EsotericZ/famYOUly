$(document).ready(function () {
    const profileBtn = $('.profileBtn');

    profileBtn.on('click', async function (event) {
        const newId = $('#newId').val();
        const newFirstName = $('#newFirstName').val().trim();
        const newLastName = $('#newLastName').val().trim();
        const newEmail = $('#newEmail').val().trim();
        const newPhoneNumber = $('#newPhoneNumber').val().trim();
        const fixedPhoneNumber = newPhoneNumber.replace('(', '').replace(') ', '').replace('-', '');
      event.preventDefault();
      await $.post('/api/users/updateprofile', {
        id: newId,
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        phoneNumber: fixedPhoneNumber,
      });
      window.location.reload();
    });
});