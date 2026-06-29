const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
          type: String,
        required: true,
        unique: true
    },
    city: {
          type: String,
          default: "GORAKHPUR"
    },
    age: {
        type: Number 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);