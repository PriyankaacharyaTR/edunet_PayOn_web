import express from 'express';
import { body } from 'express-validator';
import * as authController from '../controllers/auth.controller.js';
import passport from 'passport';

const router = express.Router();

// Validation middleware
const registerValidation = [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('phone').optional().isMobilePhone().withMessage('Please enter a valid phone number')
];

// Routes
router.post('/register', registerValidation, authController.register);
router.post('/login', authController.login);

// Google OAuth routes
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  authController.googleAuthCallback
);

export default router;