const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = ( req, res = response, next ) => {

    // x-token headers
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            error: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid, name } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        //sreq.uid = uid;
        //req.nombre = nombre;

            //Valida Token
        return res.status(200).json({
            ok: true,
            msg: 'Token ok'
        });
    } catch (error) {
        return res.status(401).json({
            ok: false,
            error: `Token no válido  ${error}`
        });
    }



    next();
}


module.exports = {
    validarJWT
}
