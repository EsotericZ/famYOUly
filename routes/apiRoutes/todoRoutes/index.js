const router = require('express').Router();
const { createTodo, completedTodo } = require('../../../controllers/todoController');
// /api/todos
router.post('/', createTodo);
router.post('/complete', completedTodo);
module.exports = router;

