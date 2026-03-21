const express = require('express');
const router = express.Router();

// Dummy data for bookings
let bookings = [];

// Create a new booking
router.post('/bookings', (req, res) => {
    const booking = req.body;
    bookings.push(booking);
    res.status(201).json(booking);
});

// Get all bookings
router.get('/bookings', (req, res) => {
    res.status(200).json(bookings);
});

// Get a booking by ID
router.get('/bookings/:id', (req, res) => {
    const bookingId = parseInt(req.params.id);
    const booking = bookings.find(b => b.id === bookingId);
    if (booking) {
        res.status(200).json(booking);
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
});

// Update a booking by ID
router.put('/bookings/:id', (req, res) => {
    const bookingId = parseInt(req.params.id);
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index !== -1) {
        bookings[index] = { ...bookings[index], ...req.body };
        res.status(200).json(bookings[index]);
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
});

// Delete a booking by ID
router.delete('/bookings/:id', (req, res) => {
    const bookingId = parseInt(req.params.id);
    bookings = bookings.filter(b => b.id !== bookingId);
    res.status(204).send();
});

module.exports = router;