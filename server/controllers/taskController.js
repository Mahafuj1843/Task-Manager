const { createError } = require("../utils/error");
const mongoose = require("mongoose");
const Task = require('../models/Task')

exports.createTask = async (req,res,next)=>{
    try{
        req.body.userId = req.user.id
        var newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(200).send("New Task Created");
    }catch(err){
        next(err);
    }
}

exports.deleteTask = async (req,res,next) =>{
    try{
        const task = await Task.findById({_id:req.params.id, userId:req.user.id});
        if(!task) return next(createError(404, "Task not found."));
        else {
            await task.remove();
            res.status(200).json({ message:"Task has been deleted."})
        }
    }catch(err){
        next(err);
    }
}

exports.updateTask = async (req,res,next) =>{
    try{
        const task = await Task.findById(
            {_id:req.params.id, userId:req.user.id}
        );
        if(!task) return next(createError(404, "Task not found."));
        else{
            const updatedTask = await Task.findByIdAndUpdate(
                {_id:req.params.id, userId:req.user.id},
                { $set : req.body}, 
                { new : true});
            res.status(200).json({message:"Successfully updated."})
        }
    }catch(err){
        next(err);
    }
}

exports.listTaskByStatus = async (req,res,next) =>{
    try {
        const task = await Task.find({status: req.params.status, userId: req.user.id},
            {_id:1,title:1,desc:1,status:1,
            createDate:{
                $dateToString:{
                    date:"$createdAt",
                    format: "%d-%m-%Y"
                }
            }})
        if(task) res.status(200).json({task: task})
        else res.status(404).send("Not found.")
    }catch(err){
        next(err);
    }
}

exports.taskStatusCount = async (req,res,next) =>{
    try {
        const task = await Task.aggregate([
             {$match:  {userId: mongoose.Types.ObjectId(req.user.id)}},
            {$group:{_id: "$status", total:{$sum:1}}}
        ])
        res.status(200).send(task)
    }catch(err){
        next(err);
    }
}

