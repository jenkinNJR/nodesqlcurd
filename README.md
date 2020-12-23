﻿# nodesqlcurd
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const upload = multer();
const Joi = require('joi');



const app = express();
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(fileUpload());
app.get('/', (req, res) => {
    res.redirect('/valid');
});
app.get('/valid', (req, res) => {
    res.send('valid');
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.url);
    console.log(req.originalUrl);
    console.log(req.path);
});
// app.use(express.json());

app.post('/valid', (req, res) => {


    userValidation(req.body, res);


    /* {
         "name": "jenkins",
         "email": "jenkins@gmail.com",
         "phone": "521616329",
         "address": "pottyial house manchakonam thiruprappu po",
         "zip": "629161"
     } */
})

const userValidation = (valid, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        phone: Joi.number().required(),
        address: Joi.string().required(),
        zip: Joi.number().required()
    });
    const result = schema.validate(valid);
    if (result.error == null) {
        // valid

        console.log("valid");
        return res.json(valid);
    } else {

        // res.json(result.error);
        console.log("not valid");
        return res.json(result.error.details[0].message);
    }
}


// url encoded form data
app.post('/validform/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})


//file upload

app.post('/file', (req, res) => {
    console.log(req.files.image.name);
    res.send("file");
})

app.listen(3000, () => {
    console.log('app listen to port 3000');
})
