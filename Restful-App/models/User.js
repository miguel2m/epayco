const {Schema,model} = require('mongoose');

const UserSchema = Schema({
    documento:{
        type: String,
        require:true,
        unique:true
    },
    nombre:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    celular:{
        type: String,
        require:true
    },
    saldo:{
        type: Number,
        require:true,
        default: 0
    }
});

module.exports = model('User',UserSchema);