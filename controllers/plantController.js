const Plant = require('../models/plant')
// Get Index
const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        res.json(plants)
    } catch (error) {
        return res.status(500).send(e.message)
    }
}

//Get Show
 const getPlantsById = async (req, res) => {
    try {
        const { id } = req.params
        const plant = await Plant.findById(id)
        if (plant) {
            return res.json(plant)
        }
        return res.status(404).send('plant with ID not found.')
    }
    catch(e) {
        return res.status(500).send(e.message)
    }
 }

//Create => Post
const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({plant})
    } 
    catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

//Update => Put
const updatePlant = async (req, res) => {
    try {
        let { id } = req.params
        let plant = await Plant.findByIdAndUpdate(id, req.body, { new: true })
        if (plant) {
            return res.status(200).json(plant)
        }
        throw new Error("Plant not found")
    } 
    catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete => Delete
const deletePlant = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Plant deleted")
        }
        throw new Error("Plant not found")
    } 
    catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    getAllPlants,
    getPlantsById,
    createPlant,
    updatePlant,
    deletePlant
}