const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const env=require('dotenv');
const app = express();

const StartUp = require("./models/Startup");

env.config();

const uri = process.env.DB_URI;
const PORT = process.env.PORT || 8000;

app.use(
    cors({
        origin: ['https://startup-info.vercel.app'],
        // origin: '*',
        methods: ["POST", "GET"],
        credentials:true
    }
));

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected on port " + PORT);
        });
    })
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
   res.send("Server is working"); 
});

app.get("/products", (req, res) => {

    const industryFilter = (req.query.industry === "ALL" ? "" : req.query.industry);
    const search = req.query.search;

    const query = {
        $and: [
            { IndustryVertical: { $regex: new RegExp(industryFilter, 'i') } },
            {
                $or: [
                    { StartupName: { $regex: new RegExp(search, 'i') } },
                    { IndustryVertical: { $regex: new RegExp(search, 'i') } },
                    { SubVertical: { $regex: new RegExp(search, 'i') } },
                ],
            },
        ],
    }


    StartUp.find(query).sort({ SNo: 1 })
        .then(result => {
            res.status(200).send(result);

        })
        .catch(err => res.status(400).send("Error fetching data"));
});

app.post('/addStartup', (req, res) => {
    const startup = new StartUp(req.body);

    startup.save()
        .then(result => {
            res.status(200).send("Startup Submitted");
        })
        .catch(err => res.status(400).send("Error submitting data"))
})
