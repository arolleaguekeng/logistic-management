const mongoose = require('mongoose')
const Schema = mongoose.Schema
const marchandiseSchema = new Schema(
    {
        nom: { type: String, required: true,  },
        quantite: { type: Number, required: true, },
        prixUnitaire: { type: Number, required: true, },
        poid: { type: Number, required: true, },
        image: { type: String, required: true,  },
        created: { type: String, required: true,  },
     }
)

module.exports = mongoose.model('Marchandise', marchandiseSchema)
