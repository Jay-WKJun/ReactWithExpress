import mongoose from 'mongoose';


const db = () => {
    mongoose.connect("mongodb://localhost:27017/ReactExpressProject", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB!!!!!");
const handleError = (error) => console.log(`Error on DB connection : ${error}`);
const handleDisconnect = () => console.log("DisConnected!!! bye~~~");

db.once("open", handleOpen);
db.on("error", handleError);
db.on("disconnect", handleDisconnect);
};


module.exports = db;