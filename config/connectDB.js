const mongoose = require("mongoose");

const config = require("config");

//connect to db using mongoose.connect

const connectDB = () => {
      mongoose
            .connect(config.get("MONGO_URI"), {
            
            useNewUrlParser: true,
            useUnifiedTopology:true


      })
      .then(console.log("mongoose is connect"))
      .catch(err=>{console.log(err)})
}

module.exports = connectDB;