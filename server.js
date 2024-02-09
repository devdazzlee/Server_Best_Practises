import express from 'express'
const app = express()
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT
import Main from './Routes/Main.js'
import { userModel } from './DB/Schema.js';
import bodyParser from 'body-parser';
app.use(bodyParser.json());

app.use('/',Main )
app.post('/add', (req, res) => {
    console.log(req.body);
    try {
        const { email, name, price, description } = req.body;
        let add_user = new userModel({
            email: email,
            name: name,
            price: price,
            description: description,
        });
        add_user.save()
            .then(() => {
                res.status(200).send("User added successfully");
            })
            .catch(error => {
                console.log("error: ", error);
                res.status(500).send("Error occurred while adding user");
            });
    } catch (error) {
        console.log("error: ", error);
        res.status(500).send("Error occurred while adding user");
    }
});

app.listen(PORT,()=>{
console.log(`Server Listen At Port ${PORT}`)
});