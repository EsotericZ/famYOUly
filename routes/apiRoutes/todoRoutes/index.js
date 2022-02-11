const router = require('express').Router();
const { createTodo, completedTodo, getAllTodos } = require('../../../controllers/todoController');
// /api/todos
router.post('/', createTodo);
router.post('/complete', completedTodo);
router.post('/todos', getAllTodos);
module.exports = router;

