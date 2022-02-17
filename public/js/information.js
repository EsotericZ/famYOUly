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
    const editContactBtn = $('.editContactBtn');
    const deleteContactBtn = $('.deleteContactBtn');
    // list
    const addListBtn = $('.addListBtn');
    const item = $('#newItem');
    const deleteItemBtn = $('#deleteItemBtn');

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
        window.location.reload();
    });

    addContactBtn.on('click', async function(event) {
        event.preventDefault();
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
        const attribute = event.target.getAttribute("contname");
        const editFirstName = $(`#editFirstName[contname="${attribute}"]`).val();
        const editLastName = $(`#editLastName[contname="${attribute}"]`).val();
        const editNumber = $(`#editNumber[contname="${attribute}"]`).val();
        const fixedPhoneNumber = editNumber.replace('(', '').replace(') ', '').replace('-', '');
        const editRelation = $(`#editRelation[contname="${attribute}"]`).val();
        const editContactId = $(`#editContactId[contname="${attribute}"]`).val();
        event.preventDefault();
        await $.post('/api/info/updatecontact', {
            firstName: editFirstName,
            lastName: editLastName,
            number: fixedPhoneNumber,
            relation: editRelation,
            id: editContactId,
        });
        window.location.reload();
    });

    deleteContactBtn.on('click', async function(event) {
        const attribute = event.target.getAttribute("delname");
        const deleteId = $(`#deleteContactId[delname="${attribute}"]`).val();
        await $.post('/api/info/deletecontact', {
            id: deleteId,
        });
        window.location.reload();
    });

    addListBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/list', {
            item: item.val(),
            childId: childInfo.attr("data-childId"),
        });
        window.location.reload();
    });

    deleteItemBtn.on('click', async function(event) {
        event.preventDefault();
        await $.post('/api/info/deletelist', {
            id: list.attr("dataname"),
        });
        window.location.reload();
    });
});