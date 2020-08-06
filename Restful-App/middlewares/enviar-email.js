var nodemailer = require('nodemailer');
const { generarJWT } = require('../helpers/jwt'); // JWT Tokens

// email sender function
const sendEmail = async(req, res = response, next)=>{
    console.log(process.env.EMAIL_G);
    console.log( req.body.email);
    // Definimos el transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_G,
            pass: process.env.EMAIL_P
        }
    });
    // Generar JWT
    const token = await generarJWT( req.id, req.email );

    // Definimos el email
    let mailOptions = {
        from: 'Remitente',
        to:  req.body.email,
        subject: 'Token',
        text: `Toeken ${token}`
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: error
            });
            
        }else{
            return res.status(200).json({
                ok: true,
                msg: info
              });
        } 
    });

    next();
}


module.exports = {
    sendEmail
}