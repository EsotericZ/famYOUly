$(document).ready(function () {
    console.log(req.session.childId);
    if (req.session.childId) {
        console.log('success');
    }
    let child;
    await $.get(`/api/info/${req.session.childId}`)
        .then((data) => {
            console.log(data);
            child = data
        })


});

//     const addContactButton = $('#')