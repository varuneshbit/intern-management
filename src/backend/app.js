const express = require('express');
const mongoose = require('mongoose');
const Intern = require('./models/Intern'); // Import the model
const Busboy = require('busboy');
const fs = require('fs'); // To handle file system operations
const path = require('path'); // For file path handling
const dbConn = require('./db');
const connectDb = require('./db');

const app = express();
app.use(express.json()); // To parse JSON requests

// Create a new intern
app.post('/add-intern', (req, res) => {
    const busboy = Busboy({ headers: req.headers });
    const internData = {};
    
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        const filePath = path.join(__dirname, 'uploads', filename); // Change this as needed
        file.pipe(fs.createWriteStream(filePath));
        internData[fieldname] = filePath; // Save the file path in internData
    });

    busboy.on('field', (fieldname, val) => {
        internData[fieldname] = val; // Save field data
    });

    busboy.on('finish', async () => {
        try {
            const intern = new Intern(internData);
            await intern.save();
            res.status(201).send(intern);
        } catch (error) {
            res.status(400).send(error);
        }
    });

    req.pipe(busboy);
});

// Get all active interns in a specific team (T&P, PS, Special Lab)
app.get('/active-interns/:team', async (req, res) => {
    try {
        const team = req.params.team;
        const interns = await Intern.find({ team, workingStatus: 'Working' });
        res.status(200).send(interns);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ICD', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(5000, () => { 
        console.log('Server running on port 5000')
        dbConn,connectDb()
    }))
    .catch(err => console.error(err));
