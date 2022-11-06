import mongoose, {Schema} from "mongoose";


//Schema es una clase de Moongose
const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:50, 
    },
    resumen:{
        type:String,
        required:true,
        minLength:2,
        maxLength:500
    },
    dificultad:{
        type:String,
        required:true
    },
     ingredientes:{
        type:String,
        required:true,
        minLength:2,
        maxLength:10000 
    },
    categoria:{
        type: String,
        required:true,
        minLength:2,
        maxLength:10000 
    },
    pasos:{
        type: String,
        required:true,
        minLength:2,
        maxLength:20000 
    },
    imagen:{
        type: String,
        required:true
    }
      

})

// aqui realizamos el modelo
const Receta = mongoose.model('receta', recetaSchema);

export default Receta;