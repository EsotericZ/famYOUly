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
    const editContactBtn = $('#editContactBtn');
    const editFirstName = $('#editFirstName');
    const editLastName = $('#editLastName');
    const editNumber = $('#editNumber');
    const editRelation = $('#editRelation');
    const editContactId = $('#editContactId');
// list
    const addListBtn = $('#addListBtn');
    const item = $('#item');
    const editListBtn = $('#editListBtn');
    const editListItems = $('#editListItems');
    const editListId = $('#editListId');

    
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

    addContactBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/contact', {
            firstName: firstName.val(),
            lastName: lastName.val(),
            number: number.val(),
            relation: relation.val(),
            childId: childIdModal.val(),
        });
        window.location.reload();
    });

    editContactBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/updatecontact', {
            firstName: editFirstName.val(),
            lastName: editLastName.val(),
            number: editNumber.val(),
            relation: editRelation.val(),
            id: editContactId.val(),
        });
        window.location.reload();
    });

    addListBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/list', {
            item: item.val(),
            childId: childIdModal.val(),
        });
        window.location.reload();
    });

    editListBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/updatelist', {
            item: editListItems.val(),
            id: editListId.val(),
        });
        window.location.reload();
    });
});