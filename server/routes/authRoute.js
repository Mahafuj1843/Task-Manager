const express = require('express');
const { register, login, logout, updateProfile,changePassword, forgotPassword, resetPassword } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router()

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.put('/updateProfile', verifyToken, updateProfile);
router.put('/change/password', verifyToken, changePassword);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);

module.exports = router