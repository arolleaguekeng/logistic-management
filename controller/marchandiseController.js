const Marchandise = require('../models/MarchandiseModel')


const express = require('express');
const app = express();


exports.addMarchandise =
  async (req, res) => {
    try {
      console.log(req.body);
      const {
        nom,
        quantite,
        prixUnitaire,
        poid,
        image,
        created
      } = req.body;

      const marchandise = new Marchandise({
        nom,
        quantite,
        prixUnitaire, 
        poid, 
        image,
        created
      });

      const savedMarchandise = await marchandise.save();

      res.status(201).json({
        message: 'Marchandise created successfully',
        marchandise: savedMarchandise
      });
      console.log(res);

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

   
exports.getOneMarchandise =
  async (req, res) => {
    try {
      console.log("Try to get one");
      console.log(req.params.id)

      const marchandises = await Marchandise.find({ _id: req.params.id });
      console.log(marchandises)
      res.status(200).json(marchandises);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  exports.getAllMarchandises =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const marchandises = await Marchandise.find();
      console.log(marchandises)
      res.status(200).json(marchandises);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.editMarchandise = async (req, res) => {
  try {
    console.log('try to update marchanise')
    const marchandise = await Marchandise.updateOne({ _id: req.params.id }, req.body)
    const newMarchandise = await Marchandise.findById({ _id: req.params.id });
    res.json({ marchandise: newMarchandise })
  } catch (err) { 
    res.status(500).json({ error: err.message })
  }
}



exports.deleteMarchandise = async (req, res) => {
  try {
    const marchandise = await Marchandise.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Marchandise Delete Successfull", marchandise: marchandise })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


