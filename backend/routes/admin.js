const express = require('express');
const router = express.Router();

// Mock database for admins
let admins = [];

// Endpoint to add an admin by email
router.post('/add', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    admins.push(email);
    return res.status(201).json({ message: 'Admin added', email });
});

// Endpoint to get all admins
router.get('/', (req, res) => {
    return res.status(200).json(admins);
});

// Endpoint to remove an admin by email
router.delete('/remove', (req, res) => {
    const { email } = req.body;
    admins = admins.filter(admin => admin !== email);
    return res.status(200).json({ message: 'Admin removed', email });
});

module.exports = router;