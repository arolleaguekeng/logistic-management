const { MongoClient } = require("mongodb");
const mongoose = require('mongoose')
function connect(url, callback){
    mongoose.connect(
        url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (error) =>{
            if(error){
                callback(error)
            }else{
                callback()
            }
        })
}
function db(){
    return new Db(client, "dbOk")
}

function closeConnexion(){
    if(client){
        client.close();
        client = null;
    }
}

module.exports = {connect, db, closeConnexion}
