const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: 'New'
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }
  },{timestamps: true, versionKey: false}
  );

  const Task = mongoose.model("Task", TaskSchema)
  module.exports=Task