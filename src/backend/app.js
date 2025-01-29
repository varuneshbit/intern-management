const express = require('express');
const mongoose = require('mongoose');
const Intern = require('./models/Intern');
const fs = require('fs');
const path = require('path');
const connectDb = require('./db');
const busboy = require('connect-busboy');

const app = express();
app.use(express.json());
app.use(busboy({ immediate: true }));  // Initialize busboy middleware immediately

app.post('/add-intern', (req, res) => {
    const internData = {};

    if (!req.busboy) {
        return res.status(400).send('Busboy not initialized');
    }

    req.busboy.on('file', (fieldname, file, filename) => {
        if (!filename) {
            return res.status(400).send('No file uploaded');
        }

        const filePath = path.join(__dirname, 'uploads', filename);
        const fstream = fs.createWriteStream(filePath);

        file.pipe(fstream);

        fstream.on('close', () => {
            internData[fieldname] = filePath;
        });

        fstream.on('error', (err) => {
            console.error('File stream error:', err);
            return res.status(500).send('File upload failed');
        });
    });

    req.busboy.on('field', (fieldname, val) => {
        internData[fieldname] = val;
    });

    req.busboy.on('finish', async () => {
        if (!internData.resume) {
            return res.status(400).send('File upload failed');
        }
        try {
            const intern = new Intern(internData);
            await intern.save();
            res.status(201).json(intern);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    });

    req.pipe(req.busboy);
});

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ICD', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(5000, () => {
    console.log('Server running on port 5000');
    connectDb();  // Call the db connection method
})).catch(err => console.error(err));
