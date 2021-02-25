const mongoose = require("mongoose");

const schema = mongoose.Schema;

//create User schema

const userSchema = new schema({
      name: { type: String, require: true },
      email: { type: String, require: true },
      phone:{type:Number}
})

const User = mongoose.model("user", userSchema);
module.exports = User;