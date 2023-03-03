import mongoose from "mongoose";
const Connection = async (Username, Password) => {
const URL=`mongodb://${Username}:${Password}@ac-z9uifkd-shard-00-00.q90oimj.mongodb.net:27017,ac-z9uifkd-shard-00-01.q90oimj.mongodb.net:27017,ac-z9uifkd-shard-00-02.q90oimj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xbgwgv-shard-0&authSource=admin&retryWrites=true&w=majority`    
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};
export default Connection;




   
