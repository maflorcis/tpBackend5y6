import Receta from "../models/receta"
import { validationResult } from "express-validator";

export const listarRecetas = async (req, res)=>{try {
    
    const listaRecetas = await Receta.find()
//buscar las recetas
 res.status(200).json(listaRecetas)
 }catch (error){
     console.log(error)
     res.status(404).json({
         mensaje:'Error al intentar buscar una receta'
     })
 }
}

export const crearRecetas = async(req, res) => {
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
      const recetaNuevo = new Receta(req.body);
      //guardar esa receta en la BD
      await recetaNuevo.save();
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


  export const obtenerReceta = async(req, res) =>{
    try{
        //obtener el parámetro
        console.log(req.params.id)
        //buscar el documento que coincide con el parámetro
        const recetaBuscado = await Receta.findById(req.params.id)
        res.status(200).json(recetaBuscado)
        //responder con la receta encontrada

    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje:'Error no se pudo encontrar el producto solicitado'
        })
    }

}

export const editarReceta = async (req, res)=>{
    try{
      //buscar la receta por el id, luego modificar los datos con el body
      await Receta.findByIdAndUpdate(req.params.id,req.body);
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
        mensaje: 'Error en la receta solicitada no pudo ser eliminada'
      })
    }
  }