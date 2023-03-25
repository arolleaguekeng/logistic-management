require('dotenv').config()
const mongoose = require('mongoose')


main().catch(err => console.log(err))

// Connection à mongodb
async function main() {
   await mongoose.connect(process.env.MONGO_URL)

   const User = mongoose.model('User',{
    name: String,
    age: Number
   })

   const firstPerson = new User({
    name: 'Pharaon',
    age: 30
   })


   console.log(firstPerson)
   await firstPerson.save()
}

