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
    // console.log("name", eventName.val())
    // console.log("notes", eventNotes.val())
    // console.log("s date", eventStartDate.val())
    // console.log("e date", eventEndDate.val())
    // console.log("all day", document.querySelector('.adbox').checked)
    // console.log("s time", eventStartTime.val())
    // console.log("e time", eventEndTime.val())
    // console.log("local", eventLocation.val())
    // console.log("type", eventType.val())
    // console.log("fam", eventFamilyName.val())
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
});