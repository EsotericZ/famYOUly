$(document).ready(function () {
    const newMedBtn = $('#newMedBtn');
    const medications = $('#medications');
    const allergies = $('#allergies');
    const healthInsurance = $('#healthInsurance');
    const childIdModal = $('#childIdModal');
    
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
});