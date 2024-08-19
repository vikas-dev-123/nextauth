import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)// yeah exclamation sign yeah indicate kr rha hai ki yeah hme string hi dega for type safety.
       const connection = mongoose.connection

       connection.on('connected', () => {
        console.log('Connected to MongoDB')
       })

       connection.on('error', (err) => {
        console.log('MongoDB Connection Error, please make sure db is up and running :' + err)
        process.exit()
      
    })


    } catch (error) {
        console.log('Something went wrong in connecting to DB');
        console.log(error);
    }
}