const { createError } = require("../utils/error");
const Task = require('../models/Task')

exports.createTask = async (req,res,next)=>{
    try{
        req.body.userId = req.user.id
        console.log(req.body)
        var newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
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
            res.status(200).json("Task has been deleted.")
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
            res.status(200).json(updatedTask)
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
        if(task) res.status(200).send(task)
        else res.status(404).send("Not found.")
    }catch(err){
        next(err);
    }
}

exports.taskStatusCount = async (req,res,next) =>{
    try {
        const task = await Task.aggregate([
            {$group:{_id: "$status", total:{$sum:1}}}
        ])
        res.status(200).send(task)
    }catch(err){
        next(err);
    }
}

