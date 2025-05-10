
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sdev255:sdev255pass@songdb.bzycmdo.mongodb.net/?retryWrites=true&w=majority&appName=SongDB", {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
});

module.exports = mongoose