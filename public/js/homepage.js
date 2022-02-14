$(document).ready(function() {
  const kidFirstName = $('#kidFirstName');
  const kidLastName = $('#kidLastName');
  const kidNickname = $('#kidNickname');
  const kidPronouns = $('#kidPronouns');
  const kidBirthday = $('#kidBirthday');
  const kidFamilyName = $('#kidFamilyName');
  const saveChild = $('#saveChild');
  const addTodoBtn = $('#addTodoBtn');
  const newTodo = $('#newTodo');
  const todoBox = $('.todoBox');
  const infoBtn = $('.infoBtn');
  const eventBtn = $('#eventBtn');
  const eventName = $('#eventName');
  const eventNotes = $('#eventNotes');
  const eventStartDate = $('#eventStartDate');
  const eventEndDate = $('#eventEndDate');
  const eventAllDay = $('#eventAllDay');
  const eventStartTime = $('#eventStartTime');
  const eventEndTime = $('#eventEndTime');
  const eventLocation = $('#eventLocation');
  const eventType = $('#eventType');
  const eventFamilyName = $('#eventFamilyName');
  const updateEventBtn = $('.updateEventBtn');
  const updateKidBtn = $('.updateKidBtn');

  saveChild.on('click', async function(event) {
    event.preventDefault();
    await $.post('/api/children/createchild', {
      firstName: kidFirstName.val(),
      lastName: kidLastName.val(),
      nickname: kidNickname.val(),
      pronouns: kidPronouns.val(),
      birthday: kidBirthday.val(),
      familyName: kidFamilyName.val(),
    });
      window.location.reload();
  });

  addTodoBtn.on('click', async function(event) {
    event.preventDefault();
    await $.post('/api/todos', {
      task: newTodo.val(),
    });
      window.location.reload();
  });

  todoBox.on('click', async function(event) {
    event.preventDefault();
    // console.log(event.target.parentNode.children[0].value);
    await $.post('/api/todos/complete', {
      id: event.target.parentNode.children[0].value,
    });
      window.location.reload();
  });

  // infoBtn.on('click', async function(event) {
  //   event.preventDefault();
  //   console.log(event.target.getAttribute('data-child'));
  //   const childId = event.target.getAttribute('data-child');
  //   await $.post('/api/info/set', {
  //     childId
  //   })
    // sessionStorage.setItem('childId');
    // console.log(sessionStorage.getItem('childId'));
    // let child;
    // await $.get(`/api/info/${childId}`)
    //   .then((data) => {
    //     console.log(data);
    //     child = data
    //   })
    // res.render('information', {
    //   children: child
    // });
    // window.location.href = '/info';
  // });

  eventBtn.on('click', async function(event) {
    event.preventDefault();
    await $.post('/api/events/newevent', {
      title: eventName.val(),
      notes: eventNotes.val(),
      start: eventStartDate.val(),
      end: eventEndDate.val(),
      allDay: document.querySelector('.adbox').checked,
      startTime: eventStartTime.val(),
      endTime: eventEndTime.val(),
      location: eventLocation.val(),
      eventType: eventType.val(),
      familyName: eventFamilyName.val(),
    });
      window.location.reload();
  });
  
  updateEventBtn.on('click', async function(event) {
    const attribute = event.target.getAttribute('eventdata');
    const newId = $(`#newId[eventdata="${attribute}"]`).val();
    const newTitle = $(`#newTitle[eventdata="${attribute}"]`).val();
    const newNote = $(`#newNote[eventdata="${attribute}"]`).val();
    const newLocation = $(`#newLocation[eventdata="${attribute}"]`).val();
    const newStartDate = $(`#newStartDate[eventdata="${attribute}"]`).val();
    const newEndDate = $(`#newEndDate[eventdata="${attribute}"]`).val();
    const newStartTime = $(`#newStartTime[eventdata="${attribute}"]`).val();
    const newEndTime = $(`#newEndTime[eventdata="${attribute}"]`).val();
    const newEventType = $(`#newEventType[eventdata="${attribute}"]`).val();
    event.preventDefault();
    await $.post('/api/events/updateevent', {
      id: newId,
      title: newTitle,
      notes: newNote,
      location: newLocation,
      start: newStartDate,
      end: newEndDate,
      startTime: newStartTime,
      endTime: newEndTime,
      eventType: newEventType,
    });
      window.location.reload();
  });
    
  updateKidBtn.on('click', async function(event) {
    const attribute = event.target.getAttribute('kiddata');
    const newId = $(`#newId[kiddata="${attribute}"]`).val();
    const newFirst = $(`#newFirst[kiddata="${attribute}"]`).val();
    const newLast = $(`#newLast[kiddata="${attribute}"]`).val();
    const newNickName = $(`#newNickName[kiddata="${attribute}"]`).val();
    const newPronouns = $(`#newPronouns[kiddata="${attribute}"]`).val();
    const newBirthday = $(`#newBirthday[kiddata="${attribute}"]`).val();
    event.preventDefault();
    console.log(newPronouns)
    await $.post('/api/children/updatechild', {
      id: newId,
      firstName: newFirst,
      lastName: newLast,
      nickname: newNickName,
      pronouns: newPronouns,
      birthday: newBirthday,
    });
      window.location.reload();
  });
});