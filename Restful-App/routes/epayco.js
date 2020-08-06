/**
 * Rutas de autenticacion
 * host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator'); // Validator
var nodemailer = require('nodemailer');//Envia correos
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

    res.send('nuevo-usuario')
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
    res.send('recargar-saldo')
  });

//pagar
router.post(
  '/pagar',
  [
    check('id_sesion', 'El id de sesion es obligatorio').isString(),
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
    check('id_sesion', 'Debe estar registrado').not().isEmpty(),
    validarCampos,
    validarJWT
  ],
  (req, res) => {
      //Se utiliza el middleware validarJWT
    
  });

//consultar-saldo
router.get('/consultar-saldo',
  [
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('celular', 'El celular es obligatorio').not().isEmpty(),
    validarCampos
  ],
  (req, res) => {
    const { docuemnto, cular } = req.body;
    res.json({ ok: true })
  });


//Iniciar sesion
router.post(
  '/login',
  [
    check('email', 'El documento es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    validarCampos
  ], (req, res) => {
    const { email, documento } = req.body;
    //TODO enviar UID
    res.send('login')
  });

//Cerrar sesion
router.post(
  '/logout',
  [
    check('email', 'El documento es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatorio').not().isEmpty(),
    validarCampos
  ], (req, res) => {
    const { email, documento } = req.body;
    res.send('logout')
  });


module.exports = router;