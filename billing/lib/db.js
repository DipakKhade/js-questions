import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to mongoDB')
        
    }
    catch(err){
console.log('failed to connect')
    }
}