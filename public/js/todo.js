$(document).ready(function() {
	const todoField = $('#todoField');
	const addTodoBtn = $("#addTodoBtn");
	addTodoBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/homepage', {
			task: todoField.val(),
		});
		window.location.reload();
	});
});
