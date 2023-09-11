import dotenv from 'dotenv';
dotenv.config()

import connectDB from './db/connect.js'
import Bet from './models/bet.js'

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Bet.updateMany(
        { /* Filter criteria */ },
        { $rename: { "oddsMaker": "sportsBook" } } // Use $rename to rename the field
        )
        .then(result => {
            console.log(`${result.modifiedCount} documents updated.`);
        })
        .catch(err => {
            console.error(err);
        });
        console.log('success!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()