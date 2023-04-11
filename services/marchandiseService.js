const client = require("../db/connect")
const mongoose = require('mongoose')

const MarchandiseModel = require('../models/marchandise')

exports.addMarchandise = async (marchandise) =>{
    return await MarchandiseModel.create(marchandise)
}

exports.getAllMarchandise = async () =>{
    return MarchandiseModel.find()
}


exports.getMarchandiseById = async(id) =>{
    return await MarchandiseModel.findById(id)
}

exports.updateMarchandise = async(id, marchandise) =>{
    return await MarchandiseModel.findByIdAndUpdate(id, blog)
}

exports.deleteMarchandise = async(id) =>{
    return await MarchandiseModel.findById(id)
}

