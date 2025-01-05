const mongoose = require('mongoose');

// Define the intern schema
const internSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true // Ensures unique ID for each intern
    },
    name: {
        type: String,
        required: true
    },
    yearOfPassing: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'], // Limits to predefined genders
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    educationDetails: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    resumeUpload: {
        type: String,
        required: true
    },
    team: {
        type: String,
        enum: ['Training and Placement', 'Personalized Skill', 'Special Lab'], // Only allows these teams
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    dateOfInterview: {
        type: String, // You can also use `Date` type for actual date handling
        required: true
    },
    selectionStatus: {
        type: String,
        enum: ['Selected', 'Unselected'],
        required: true
    },
    dateOfJoining: {
        type: String, // You can also use `Date`
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    workingStatus: {
        type: String,
        enum: ['Working', 'Rejected'], 
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

// Create the Intern model
const Intern = mongoose.model('Intern', internSchema);

module.exports = Intern;
