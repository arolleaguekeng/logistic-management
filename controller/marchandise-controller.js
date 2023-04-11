const client = require("../db/connect")
const mongoose = require('mongoose')

const marchandiseService = require('../services/marchandiseService')

exports.getAllMarchandises = async (req, res) => {
    try {
        const marchandises = await marchandiseService.getAllMarchandises()
        res.json({ data: marchandises, status: "Succes" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.addMarchandise = async (req, res) => {
    try {
        const marchandise = await marchandiseService.addMarchandise(req.body);
        res.json({ data: marchandise, status: "Succes" })
    } catch (err) {
        res.status(500).json({ error: err.message + "qsdqsdqsdqsdqsd" })
    }
}

exports.getMarchandiseById = async (req, res) => {
    try {
        const marchandise = await marchandiseService.getMarchandiseById(req.params.id)
        res.json({ data: marchandise, status: "Succes" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateMarchandise = async (req, res) => {
    try {
        const marchandise = await marchandiseService.updateMarchandise(req.params.id, req.body);

        res.json({ data: marchandise, status: "Succes" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteMarchandise = async (req, res) => {
    try {
        const marchandise = await marchandiseService.deleteMarchandise(req.params.id);

        res.json({ data: marchandise, status: "Succes" })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

