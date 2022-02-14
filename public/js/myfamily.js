$(document).ready(function () {
  const updateBtn = $('.updateBtn');
  const approveBtn = $('.approveBtn');
  const denyBtn = $('.denyBtn');
  const deleteBtn = $('.deleteBtn');

  updateBtn.on('click', async function (event) {
    const attribute = event.target.getAttribute('dataname');
    const newId = $(`#newId[dataname="${attribute}"]`).val();
    const newFirstName = $(`#newFirstName[dataname="${attribute}"]`).val().trim();
    const newLastName = $(`#newLastName[dataname="${attribute}"]`).val().trim();
    const newRole = $(`#newRole[dataname="${attribute}"]`).val().trim();
    const newPhoneNumber = $(`#newPhoneNumber[dataname="${attribute}"]`).val().trim();
    const newLevel = $(`#newLevel[dataname="${attribute}"]`).val();
    // const newVisible = $(`#newVisible[dataname="${attribute}"]`).val().trim();
    event.preventDefault();
    await $.post('/api/users/updateuser', {
      id: newId,
      firstName: newFirstName,
      lastName: newLastName,
      role: newRole,
      phoneNumber: newPhoneNumber,
      level: newLevel,
      // visible: newVisible.val(),
    });
    window.location.reload();
  });

  deleteBtn.on('click', async function (event) {
    // console.log(event.target)
    // console.log('id', event.target.parentNode.parentNode.children[2].children[0].value);
    event.preventDefault();
    await $.post('/api/users/deleteuser', {
      id: event.target.parentNode.parentNode.children[2].children[0].value,
    });
    window.location.reload();
  });

  approveBtn.on('click', async function (event) {
    // console.log(event.target)
    // console.log('id', event.target.parentNode.children[0].children[0].value);
    event.preventDefault();
    await $.post('/api/users/approveuser', {
      id: event.target.parentNode.children[0].children[0].value,
    });
    window.location.reload();
  });

  denyBtn.on('click', async function (event) {
    // console.log(event.target)
    // console.log('id', event.target.parentNode.children[0].children[0].value);
    event.preventDefault();
    await $.post('/api/users/deleteuser', {
      id: event.target.parentNode.children[0].children[0].value,
    });
    window.location.reload();
  });
});