const mongoose = require('mongoose');
const dotenv = require('dotenv')

//load
dotenv.config()

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
    })

    console.log(`mongoDb connected: {conn.connection.host}`);
    } catch (error){
        console.log(error.message);
        process.exit(1)
        
    }
    
    
}

module.exports = connectDB