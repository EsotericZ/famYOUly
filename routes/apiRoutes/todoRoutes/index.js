const router = require('express').Router();

const { 
    createTodo, 
    completedTodo 
} = require('../../../controllers/todoController');

router.post('/', createTodo);
router.post('/complete', completedTodo);


module.exports = router;