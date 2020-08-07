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
  ], (req, res) => {
    const { docuemnto, nombre, email, celular } = req.body;

    res.json({ ok: true })
  });

//recargar-saldo
router.post(
  '/recargar-saldo',
  [
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    check('monto', 'El monto es obligatorio').isInt(),
    validarCampos
  ],
  (req, res) => {
    const { docuemnto, cular, monto } = req.body;
    res.json({ ok: true })
  });

//pagar
router.post(
  '/pagar',
  [
    check('token', 'El token es obligatorio').isString(),
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
    check('token', 'Debe estar registrado').not().isEmpty(),
    validarCampos,
    validarJWT
  ],
  (req, res) => {
      //Se utiliza el middleware validarJWT
    
  });

//consultar-saldo
router.post('/consultar-saldo',
  [
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    validarCampos
  ],
  (req, res) => {
    const { docuemnto, celular } = req.body;
    res.json({ ok: true })
  });


//Iniciar sesion
router.post(
  '/login',
  [
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
  ],async (req, res) => {
    const { email } = req.body;
    // Generar JWT
    const token = await generarJWT(  req.email );
    //TODO enviar UID
    
    res.status(200).json({ ok: true ,   token })
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