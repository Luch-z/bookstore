const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://ricardopacja:ricardopacja777@cluster0.nhtnh.mongodb.net/");
        console.log("mongodb is connected successfully !");
    } catch (error) {
        console.log("Mongodb connection failed", error);
        process.exit(1);
    }
};

module.exports = connectToDB;