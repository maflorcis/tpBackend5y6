import { validationResult } from "express-validator";
import Receta from "../models/receta";


export const listarRecetas = async(req, res) => {
    try {
        //buscar todas las recetas en la BD
        const listaRecetas = await Receta.find();
        //responder al usuario que todo salio bien
        res.status(200).json(listaRecetas)
      } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar buscar las recetas'
        })
      }


};

export const crearReceta = async(req, res) => {
  try {
    //manejar los errores de express-validator
    const errores = validationResult(req);
    //errores.isEmpty() retorna true cuando no hay errores, retorna false cuando hay errores
    // pregunto si hay errores
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }

    //extraer del body los datos
    console.log(req.body);
    //agregar la validacion correspondiente
    const recetaNueva = new Receta(req.body);
    //guardar esa receta en la BD
    await recetaNueva.save();
    //responder al usuario que todo salio bien
    res.status(201).json({
        mensaje: 'La receta fue correctamente creada'
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: 'Error al intentar agregar una receta'
    })
  }
};


export const obtenerReceta = async (req, res)=>{
  try{
    //obtener el parametro
    console.log(req.params.id)
    //pedirle a la BD buscar el documento que coincide con el id del parametro
    const recetaBuscada = await Receta.findById(req.params.id);
    //responder con la receta encontrada
    res.status(200).json(recetaBuscada);
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error no se pudo encontrar la receta'
    })
  }
}
export const editarReceta = async (req, res)=>{
  try{
    //buscar la receta  por el id, luego modificar los datos con el body
    await Receta.findByIdAndUpdate(req.params.id,req.body);
    const errores = validationResult(req);
    //errores.isEmpty() retorna true cuando no hay errores, retorna false cuando hay errores
    // pregunto si hay errores
    if(!errores.isEmpty()){
      return res.status(400).json({
        errores: errores.array()
      })
    }
     //responder al frontend
    res.status(200).json({
      mensaje: 'La receta fue editada correctamente'
    })
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error la receta solicitada no pudo ser modificada'
    })
  }
}
export const borrarReceta = async (req, res)=>{
  try{
  //buscar una receta por el id y borrar
  await Receta.findByIdAndDelete(req.params.id)
  //responder al frontend si pude eliminar la receta
  res.status(200).json({
    mensaje: 'La receta fue correctamente eliminada'
  })
  }catch(error){
    console.log(error)
    res.status(404).json({
      mensaje: 'Error la receta solicitada no pudo ser eliminada'
    })
  }
}