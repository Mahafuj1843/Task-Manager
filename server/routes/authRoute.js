const express = require('express');
const { register, login, logout, updateProfile,changePassword, forgotPassword, resetPassword, profileDetails } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/authMiddleware');

const router = express.Router()

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile/details',verifyToken, profileDetails);
router.put('/updateProfile', verifyToken, updateProfile);
router.put('/change/password', verifyToken, changePassword);
router.post('/forgotPassword', forgotPassword);
router.put('/resetPassword/:resetToken', resetPassword);

module.exports = router