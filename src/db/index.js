import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
import express from 'express';
export async function connectdatabase() {
    const app = express();
    try {
        const mongoDb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on('error', err => {
            throw err;
        });
    } catch (err) {
        console.log("MongoDb Connection Failed", err);
        process.exit(1);
    }
    console.log('Database connected');
}