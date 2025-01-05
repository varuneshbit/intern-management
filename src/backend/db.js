const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/ICD', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            ssl: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDb;