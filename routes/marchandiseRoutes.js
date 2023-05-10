const express = require('express')
const {
    addMarchandise,
    getAllMarchandises,
    getOneMarchandise,
    editMarchandise,
    deleteMarchandise
} = require('../controller/marchandiseController')
const router = express.Router() 


router.route("/marchandises").get(getAllMarchandises).post(addMarchandise)
router.route("/marchandises/:id").get(getOneMarchandise).put(editMarchandise).delete(deleteMarchandise)

module.exports = router;
