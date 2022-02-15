$(document).ready(function () {
    const newMedBtn = $('#newMedBtn');
    const medications = $('#medications');
    const allergies = $('#allergies');
    const healthInsurance = $('#healthInsurance');
    const childIdModal = $('#childIdModal');

    const newContactBtn = $('#newContactBtn');
    const firstNameContact = $('#firstNameContact');
    const lastNameContact = $('#lastNameContact');
    const numberContact = $('#numberContact');
    const relationContact = $('#relationContact');

    const newListBtn = $('#newListBtn');
    const item = $('#item');


    
    newMedBtn.on('click', function(event) {
        event.preventDefault();
        await $.post('/api/info/medical', {
            medications: medications.val(),
            allergies: allergies.val(),
            healthInsurance: healthInsurance.val(),
            childId: childId.val(),
        });
        window.location.reload();
    });

    newContactBtn.on('click', function(event) {
        event.preventDefault();
        await $.post('/api/info/contact', {
            firstName: firstNameContact.val(),
            lastName: lastNameContact.val(),
            number: numberContact.val(),
            relation: relationContact.val(),
            childId: childId.val(),
        });
        window.location.reload();
    });

    newListBtn.on('click', function(event) {
        event.preventDefault();
        await $.post('/api/info/list', {
            item: item.val(),
            childId: childId.val(),
        });
        window.location.reload();
    });


});