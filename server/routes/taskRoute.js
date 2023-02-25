const express = require('express');
const { createTask, deleteTask, updateTask, listTaskByStatus, taskStatusCount } = require('../controllers/taskController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router()

router.post('/create', verifyToken, createTask);
router.delete('/:id', verifyToken, deleteTask);
router.put('/:id', verifyToken, updateTask);
router.get('/:status', verifyToken, listTaskByStatus);
router.get('/status/count', verifyToken, taskStatusCount);

module.exports = router