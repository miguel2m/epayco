/**
 * Rutas de autenticacion
 * host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator'); // Validator
var nodemailer = require('nodemailer');//Envia correos
const { generarJWT } = require('../helpers/jwt'); // JWT Tokens

const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');// Valida Tokens
const { sendEmail } = require('../middlewares/enviar-email');// Valida Tokens

const User = require('../models/User')

const router = Router();

//Crea un nuevo usuario
router.post(
  '/nuevo-usuario',
  [
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    validarCampos
  ], async(req, res) => {
    const { docuemnto, nombre, email, celular } = req.body;
    try {
      let user =await User.findOne({email})
      if (!user){
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ ok: true })
      }
    } catch (error) {
      res.status(500).json({ ok: false, error: error.keyValue })
    }
    
  });

//recargar-saldo
router.put(
  '/recargar-saldo',
  [
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('nuevo_monto', 'El monto es obligatorio').isInt(),
    validarCampos
  ],
  async(req, res) => {
    const { id,docuemnto, celular,nuevo_monto } = req.body;
    try {
      
      let user =await User.findById(id)
      if (user){
        const recarga =parseInt(user.saldo)+parseInt(nuevo_monto);
        user.saldo = recarga;
        const recargarSaldo = await User.findByIdAndUpdate(id,user,{new:true});
        res.status(200).json({ ok:true ,user })
        
      }else{
        res.status(404).json({ error: `${uid} invalido` })
      }
    } catch (error) {
      res.status(500).json({ ok: false, error })
    }
    
  });

//pagar
router.post(
  '/pagar',
  [
    check('token', 'El token es obligatorio').isJWT(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos,
    sendEmail
  ],
  (req, res) => {
      //Se utiliza el middleware sendEmail
  });

//confirmar
router.post(
  '/confirmar',
  [
    validarJWT
  ],
  (req, res) => {
      //Se utiliza el middleware validarJWT
    
  });

//consultar-saldo
router.post('/consultar-saldo',
  [
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    validarCampos
  ],
  async(req, res) => {
    const { docuemnto, celular,id } = req.body;
    try {
      let user =await User.findById(id)
      if (user){
        
        res.status(200).json({ ok:true ,user })
      }else{
        res.status(404).json({ error: 'Documento no registrado' })
      }
    } catch (error) {
      res.status(500).json({ ok: false, error })
    }
    
  });


//Iniciar sesion
router.post(
  '/login',
  [
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
  ],async (req, res) => {
    const { email } = req.body;
    try {
      let user =await User.findOne({email})
      console.log(user)
      if (user){
        // Generar JWT
        const token = await generarJWT(  req.email );
        //TODO enviar UID
        res.status(200).json({ ok: true , token , user })
      }else{
        res.status(400).json({ ok: false , error: `Email no registrado` })
      }
    } catch (error) {
      res.status(500).json({ ok: false,  error })
    }
    
  });

//Cerrar sesion
router.post(
  '/logout',
  [
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
  ], (req, res) => {
    const { email} = req.body;
    res.status(200).json({ ok: true })
  });


module.exports = router;