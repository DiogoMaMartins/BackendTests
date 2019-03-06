const express = require('express');
const router = express.Router();
 const checkAuth = require('../middleware/check-auth.js') 
var todoList = require('../controller/appController');

router.use(checkAuth)
    // todoList Routes
router.route('/tasks')
.get(todoList.list_all_tasks)
.post(todoList.create_a_task);

router.route('/tasks/:taskId')
.get(todoList.read_a_task)
.put(todoList.update_a_task)
.delete(todoList.delete_a_task);

module.exports = router;
      
