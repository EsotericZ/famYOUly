$(document).ready(function () {
    const childInfo = $('#childInfo');
// medical
    const addMedicalBtn = $('#addMedicalBtn');
    const medications = $('#medications');
    const allergies = $('#allergies');
    const healthInsurance = $('#healthInsurance');
    
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
    const listItems = $('#listItems');
    const listIdModal = $('#listIdModal');
    const editListBtn = $('#editListBtn');
    const editListItems = $('#editListItems');
    const editListId = $('#editListId');

    
    addMedicalBtn.on('click', async function(event) {
        event.preventDefault();
        console.log('In the medical event');
        console.log(childInfo);
        await $.post('/api/info/medical', {
            medications: medications.val(),
            allergies: allergies.val(),
            healthInsurance: healthInsurance.val(),
            childId: childInfo.attr("data-childId"),
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
        console.log("new update");
        window.location.reload();
    });





    addContactBtn.on('click', async function(event) {
        event.preventDefault();
        console.log('In the contact event');
        console.log(childInfo);
        await $.post('/api/info/contact', {
            firstName: firstName.val(),
            lastName: lastName.val(),
            number: number.val(),
            relation: relation.val(),
            childId: childInfo.attr("data-childId"),
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
        console.log("updated contact");
        window.location.reload();
    });









    addListBtn.on('click', async function(event) {
        event.preventDefault();
        console.log("I'm hit");
        await $.post('/api/info/list', {
            item: item.val(),
            childId: childInfo.attr("data-childId"),
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