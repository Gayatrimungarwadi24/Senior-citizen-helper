const express = require('express');
const Tutorial = require('../models/Tutorial');
const router = express.Router();

// Get all tutorials
router.get('/', async (req, res) => {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
});

// Create a new tutorial (admin only)
router.post('/', async (req, res) => {
    const { title, content, videoURL, category } = req.body;
    const tutorial = new Tutorial({ title, content, videoURL, category });
    await tutorial.save();
    res.status(201).json(tutorial);
});

// Get a single tutorial by ID
router.get('/:id', async (req, res) => {
    const tutorial = await Tutorial.findById(req.params.id);
    res.json(tutorial);
});

// Update a tutorial
router.put('/:id', async (req, res) => {
    const { title, content, videoURL, category } = req.body;
    const tutorial = await Tutorial.findByIdAndUpdate(req.params.id, { title, content, videoURL, category });
    res.status(200).json({ message: 'Tutorial updated' });
});

// Delete a tutorial
router.delete('/:id', async (req, res) => {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Tutorial deleted' });
});

module.exports = router;
