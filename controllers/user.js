import express from 'express';


const listarUsuarios = async (req, res = express.request) =>{
    const usuarios = await UsuarioScheme.find()
                    .populate('tareas', 'title');
    try {
        res.status(200).json({
            ok:true, 
            usuarios,
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            ok:false, 
            msg: 'Error Interno',
        })
    }
}