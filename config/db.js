import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URL);
        console.log(`connect to mongodb database ${(await conn).connection.host}`);
    } catch (error) {
        console.log(`error in mongo ${error}`)
    }
}
export default connectDB;
