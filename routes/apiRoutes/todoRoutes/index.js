const router = require('express').Router();
<<<<<<< HEAD
const { createTodo, completedTodo, getAllTodos } = require('../../../controllers/todoController');
// /api/todos
router.post('/', createTodo);
router.post('/complete', completedTodo);
router.post('/todos', getAllTodos);
module.exports = router;
=======
const { 
    createTodo, 
    completedTodo 
} = require('../../../controllers/todoController');

router.post('/', createTodo);
router.post('/complete', completedTodo);
>>>>>>> main

module.exports = router;