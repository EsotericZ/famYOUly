const router = require('express').Router();
<<<<<<< HEAD
const { createTodo, completedTodo } = require('../../../controllers/todoController');
// /api/todos
router.post('/', createTodo);
router.post('/complete', completedTodo);


=======

const { 
    createTodo, 
    completedTodo 
} = require('../../../controllers/todoController');

router.post('/', createTodo);
router.post('/complete', completedTodo);

>>>>>>> main

module.exports = router;