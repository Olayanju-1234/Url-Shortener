const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URI');

const connectDatabase = async () => {
    try {

        await mongoose.connect(db, { useNewUrlParser: true });

        console.log('MongoDB connected...');

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;