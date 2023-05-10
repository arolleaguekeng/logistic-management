const Fournisseur = require('../models/FournisseurModel')


const express = require('express');
const app = express();


exports.addFournisseur =
  async (req, res) => {
    try {
      console.log(req.body);
      const {
        nom,
        email,
        phone,
      } = req.body;

      const fournisseur = new Fournisseur({
        nom,
        email,
        phone,
      });

      const savedFournisseur = await fournisseur.save();

      res.status(201).json({
        message: 'Fournisseur created successfully',
        fournisseur: savedFournisseur
      });
      console.log(res);

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

   
exports.getOneFournisseur =
  async (req, res) => {
    try {
      console.log("Try to get one");
      console.log(req.params.id)

      const fournisseurs = await Fournisseur.find({ _id: req.params.id });
      console.log(fournisseurs)
      res.status(200).json(fournisseurs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  exports.getAllFournisseurs =
  async (req, res) => {
    try {
      console.log(req.body.uid)
      const fournisseurs = await Fournisseur.find();
      console.log(fournisseurs)
      res.status(200).json(fournisseurs);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


exports.editFournisseur = async (req, res) => {
  try {
    console.log('try to update marchanise')
    const fournisseur = await Fournisseur.updateOne({ _id: req.params.id }, req.body)
    const newFournisseur = await Fournisseur.findById({ _id: req.params.id });
    res.json({ fournisseur: newFournisseur })
  } catch (err) { 
    res.status(500).json({ error: err.message })
  }
}



exports.deleteFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Fournisseur Delete Successfull", fournisseur: fournisseur })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}


