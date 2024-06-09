require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_URL);
    } catch (error) {
        console.error('Connect failure');
        process.exit(1);
    }
}

module.exports = { connect };
