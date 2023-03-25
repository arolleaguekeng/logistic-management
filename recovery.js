require('dotenv').config()
const { MongoClient } = require('mongodb')


// pour recupérer le mot de passe stocké dans le fichier  .env
// NB faire npm i dotenv
const client = new MongoClient(process.env.MONGO_URL)


// Connection à mongodb
async function main() {
    await client.connect()
    console.log('Connection OK!')
    // Creation de la base de donnée
    const db = client.db('logistique')
    const collection = db.collection('documents')

    //Create
    try {
        // const inserData = await collection.insertMany([
        //     {
        //         name: 'Pharaon',
        //         age: 39,
        //         sexe: 'Masculin',
        //         hobby: 'Coding'
        //     },{
        //         name: 'Piyoy',
        //         age: 39,
        //         sexe: 'Masculin',
        //         hobby: 'Coding'
        //     },
        //     {
        //         name: 'Steff',
        //         age: 39,
        //         sexe: 'Masculin',
        //         hobby: 'Coding'
        //     }
        // ])

        // console.log(`Succesful insert document =>`, inserData)
    } catch (e) { throw e; }

    //Read
    try {
        // const fineData = await collection.findOne({ name: 'Pharaon' })
        // console.log('Founded Document:',fineData)

        // const fineMultipleData = await collection.find({ age: 39 })
        // console.log('Founded Documents:',await fineMultipleData.toArray())
    } catch (e) { throw e; }

    //Update
    try {
        // const updateData = collection.updateOne({name: 'Pharaon'},{
        //     $set: { name:'GOST', sexe:"GOD" }
        // })
        // console.log(await updateData)

        // const updateAges = collection.updateMany({age: 39},{
        //     $set: { name:'GOST', sexe:"GOD" }
        // })
        // console.log(await updateData)
    } catch (e) { throw e; }

    //Delete
    try {
        const deleteData = await collection.deleteOne({ name: 'Pauline' })
        console.log(await deleteData)
    } catch (e) { throw e; }
    return 'done !'
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())