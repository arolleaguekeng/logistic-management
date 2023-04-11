const Fournisseur = mongoose.model('Fournisseur',{
    id: Number,
    nom: String,
    email: String,
    phoneNumber: String,
   })