const express = require('express')
const {
    addMarchandise,
    getAllMarchandises,
    getMarchandiseById,
    updateMarchandise,
    deleteMarchandise
} = require('../controller/marchandise-controller')
const router = express.Router()


router.route("/marchandises").get(getAllMarchandises).post(addMarchandise)
router.route("/marchandise/:id").get(getMarchandiseById).put(updateMarchandise).delete(deleteMarchandise)

module.exports = router;
