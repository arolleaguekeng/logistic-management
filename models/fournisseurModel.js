const mongoose = require('mongoose')

    const Schema = mongoose.Schema
    const fournisseurSchema = new Schema(
        {
        nom: { type: String, required: true,  },
        email: { type: String, required: true,  },
        phone: { type: String, required: true,  }
        }
    )
   
   module.exports = mongoose.model('Fournisseur', fournisseurSchema)
   