const express = require('express');
const Task = require('../models/TaskScheme');

const crearTask = async (req, res = express.request ) => {
    const task = new Task( req.body);
    try{
        task.user = req.uid;
        const saved = await task.save();
        res.json({
            ok: true,
            task: saved
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }

}


const listarTask = async (req, res = express.request) => {
    const tasks = await Task.find().populate('user', 'name');
    try{
        res.status(200).json({
            ok: true,
            tasks
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Internal Error'
        })
    }



}

const actualizarTask = async (req, res = express.request) => {
    try{
        const {id} = req.params;
        const task = await Task.findById(id).populate("user", "_id");
        if (!task){
            return res.status(404).json({
                ok : false,
                msg: `No existe una tarea con el id proporcionado`,

            });
        }
        if (task.user.id !== req.uid){
            return res.status(403).json({
                ok:false,
                msg: 'No se puede ver la tarea por los permisos'
            });
        }
        const { title } = req.body;
        const newTask = await Task.findByIdAndUpdate(id, {title}, {new: true});

        return res.status(200).json({
            ok:true,
            newTask,
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: "Internal error",
        });

    }


};

const eliminarTask = (req, res = express.request) => {


}

module.exports = {
    crearTask,
    listarTask, 
    actualizarTask,
    eliminarTask
}