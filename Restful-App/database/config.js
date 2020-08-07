const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("DB_ONLINE")
    }catch(error){
        console.log(error)
        throw new Error('Error init database')
    }
}

module.exports ={
    dbConnection
}