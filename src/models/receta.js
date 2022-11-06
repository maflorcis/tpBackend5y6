import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 150,
    }
})
//aquí realizamos el modelo

const Receta = mongoose.model('receta', recetaSchema);

export default Receta;