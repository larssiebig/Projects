const express = require('express')
const Workout = require('../models/WorkoutModel')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workouts' }
)})

// GET one workout
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET one workout' })
})

// POST one new workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
})

// Delete one workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE one new workout' })
})

// Update one workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE one new workout' })
})

module.exports = router

