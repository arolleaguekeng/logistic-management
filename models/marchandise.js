const mongoose = require('mongoose')
const Schema = mongoose.Schema
const marchandiseSchema = new Schema(
    {
        id: Number,
        nom: String,
        quantite: Number,
        prixUnitaire: Number,
        pod: Number
     }
)

module.exports = mongoose.model('Marchandise', marchandiseSchema)
