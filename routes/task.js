const express = require('express')
const router = express.Router();
const { validarJWT } = require('../middlewares/validar-token');
const { listarTask, crearTask, actualizarTask, eliminarTask } = require('../controllers/task.js');

router.use(validarJWT)

router.get('/Ltask', listarTask)
router.post('/createT', crearTask)
router.put('/ActualizarT', actualizarTask)
router.delete('/:id', eliminarTask)

module.exports = router