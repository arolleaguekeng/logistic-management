const express = require('express');
const db = require('./util/db');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')
const marchandiseRoutes = require('./routes/marchandiseRoutes')
const fournisseurRoutes = require('./routes/fournisseurRoutes')

/*--------- MONGODB CONNECTION ---------*/
db.connectDb()

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
}));

app.get('/', (req, res) =>{
    console.log("hello");
    res.status(200).json("Welcome to Logistique Api");
})
app.use('/api', marchandiseRoutes);
app.use('/api', fournisseurRoutes);

app.listen(port, () => {
    console.log(`our application is running at port ${port}`)
})

