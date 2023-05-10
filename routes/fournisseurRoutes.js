const express = require('express')
const {
    addFournisseur,
    getAllFournisseurs,
    getOneFournisseur,
    editFournisseur,
    deleteFournisseur
} = require('../controller/fournisseurController')
const router = express.Router() 


router.route("/fournisseurs").get(getAllFournisseurs).post(addFournisseur)
router.route("/fournisseurs/:id").get(getOneFournisseur).put(editFournisseur).delete(deleteFournisseur)

module.exports = router;
