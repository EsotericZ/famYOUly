$(document).ready(function () {
    const addMedicalBtn = $('#addMedicalBtn');
    const medications = $('#medications');
    const allergies = $('#allergies');
    const healthInsurance = $('#healthInsurance');
    const childIdModal = $('#childIdModal');
    const editMedicalBtn = $('#editMedicalBtn');
    const editMedications = $('#editMedications');
    const editAllergies = $('#editAllergies');
    const editHealthInsurance = $('#editHealthInsurance');
    const editMedId = $('#editMedId');

    // const newContactBtn = $('#newContactBtn');
    // const firstNameContact = $('#firstNameContact');
    // const lastNameContact = $('#lastNameContact');
    // const numberContact = $('#numberContact');
    // const relationContact = $('#relationContact');

    // const newListBtn = $('#newListBtn');
    // const item = $('#item');
    
    addMedicalBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/medical', {
            medications: medications.val(),
            allergies: allergies.val(),
            healthInsurance: healthInsurance.val(),
            childId: childIdModal.val(),
        });
        window.location.reload();
    });

    editMedicalBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/updatemedical', {
            medications: editMedications.val(),
            allergies: editAllergies.val(),
            healthInsurance: editHealthInsurance.val(),
            id: editMedId.val(),
        });
        window.location.reload();
    });

    // newContactBtn.on('click', function(event) {
    //     event.preventDefault();
    //     await $.post('/api/info/contact', {
    //         firstName: firstNameContact.val(),
    //         lastName: lastNameContact.val(),
    //         number: numberContact.val(),
    //         relation: relationContact.val(),
    //         childId: childId.val(),
    //     });
    //     window.location.reload();
    // });

    // newListBtn.on('click', function(event) {
    //     event.preventDefault();
    //     await $.post('/api/info/list', {
    //         item: item.val(),
    //         childId: childId.val(),
    //     });
    //     window.location.reload();
    // });


});