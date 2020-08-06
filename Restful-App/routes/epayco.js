/**
 * Rutas de autenticacion
 * host + /api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator'); // Validator
const { validarCampos } = require('../middlewares/validar-campos');
const { generarJWT } = require('../helpers/jwt'); // JWT Tokens
const { validarJWT } = require('../middlewares/validar-jwt');// Valida Tokens

const router = Router();

//Crea un nuevo usuario
router.post(
  '/nuevo-usuario', 
  [
    check('documento','El documento es obligatorio').not().isEmpty(),
    check('nombre','El documento es obligatorio').not().isEmpty(),
    check('email','El documento es obligatorio').isEmail(),
    check('celular','El documento es obligatorio').not().isEmpty(),
    validarCampos
  ] ,(req, res) =>{
    const {docuemnto,nombre,email,celular}=  req.body;
    // Generar JWT
    //const token = await generarJWT( usuario.id, usuario.name );
    res.send('nuevo-usuario')
});

//recargar-saldo
router.post(
  '/recargar-saldo',
  [
    check('documento','El documento es obligatorio').not().isEmpty(),
    check('celular','El celular es obligatorio').not().isEmpty(),
    check('monto','El monto es obligatorio').isInt(),
    validarCampos
  ] ,
  (req, res) =>{
  const {docuemnto,cular,monto}=  req.body;
  res.send('recargar-saldo')
});

//pagar
router.post(
  '/pagar',
  [
    check('id_sesion','Debe estar registrado').isInt(),
    validarCampos
  ],
  (req, res) =>{
  const {id_sesion}=  req.body;
  //TODO Enviar por correo
  // Generar JWT
  //const token = await generarJWT( usuario.id, usuario.name );
  res.send('pagar')
});

//confirmar
router.post(
  '/confirmar',
  [
    check('id_sesion','Debe estar registrado').isInt(),
    check('token_pago','Debe estar registrado').isInt(),
    validarCampos,
    validarJWT
  ],
  (req, res) =>{
  
  //Valida Token
  return res.status(200).json({
      ok:true,
      msg: 'Token ok'
  });
});

//consultar-saldo
router.get('/consultar-saldo',
  [
    check('documento','El documento es obligatorio').not().isEmpty(),
    check('celular','El celular es obligatorio').not().isEmpty(),
    validarCampos
  ] ,
  (req, res) =>{
  const {docuemnto,cular}=  req.body;
  res.json({ok:true})
});


//Iniciar sesion
router.post(
  '/login', 
  [
    check('email','El documento es obligatorio').isEmail(),
    check('password','La contraseña es obligatorio').not().isEmpty(),
    validarCampos
  ] ,(req, res) =>{
    const {email,documento}=  req.body;
    res.send('login')
});

//Cerrar sesion
router.post(
  '/logout', 
  [
    check('email','El documento es obligatorio').isEmail(),
    check('password','La contraseña es obligatorio').not().isEmpty(),
    validarCampos
  ] ,(req, res) =>{
    const {email,documento}=  req.body;
    res.send('logout')
});


module.exports = router;