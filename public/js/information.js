$(document).ready(function () {
// medical
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
// contact
    const addContactBtn = $('#addContactBtn');
    const firstName = $('#firstName');
    const lastName = $('#lastName');
    const number = $('#number');
    const relation = $('#relation');
    // const childIdModal = $('#childIdModal');
    const editContactBtn = $('#editContactBtn');
    const editFirstName = $('#editFirstName');
    const editLastName = $('#editLastName');
    const editNumber = $('#editNumber');
    const editRelation = $('#editRelation');
    const editContactId = $('#editContactId');

    
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
        console.log(medications, allergies, healthInsurance, editMedId);
        window.location.reload();
    });

    addContactBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/contact', {
            medications: medications.val(),
            allergies: allergies.val(),
            healthInsurance: healthInsurance.val(),
            childId: childIdModal.val(),
        });
        window.location.reload();
    });

    editContactBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/updatemedical', {
            medications: editMedications.val(),
            allergies: editAllergies.val(),
            healthInsurance: editHealthInsurance.val(),
            id: editMedId.val(),
        });
        console.log(medications, allergies, healthInsurance, editMedId);
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