import {Router} from "express"; 
import { obtenerReceta, crearReceta, listarRecetas, editarReceta, borrarReceta } from "../controllers/recetas.controllers";
import { check } from "express-validator";

//ojo, Router no es lo mismo que router.
const router = Router();

router
  .route("/recetas")
  .get(listarRecetas)
  .post([
      check("nombreReceta")
        .notEmpty()
        .withMessage("El nombre de la receta es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El nombre de la receta debe tener entre 2 y 50 caracteres"
        ),
     check('resumen')
        .notEmpty()
        .withMessage("El resumen es un dato obligatorio")
        .isLength({ min: 2, max: 10000 })
        .withMessage(
          "Los ingredientes deben tener entre 2 y 10000 caracteres"
        ),
      check("dificultad")
        .notEmpty()
        .withMessage("La dificultad es un dato obligatorio")
        .isIn(['muy facil','facil','intermedio','dificil','experto'])
        .withMessage('La dificultad debe ser correcta'
        ),
      check('ingredientes')
        .notEmpty()
        .withMessage("Los ingredientes son un dato obligatorio")
        .isLength({ min: 2, max: 10000 })
        .withMessage(
          "Los ingredientes deben tener entre 2 y 10000 caracteres"
        ),
      check('categoria')
        .notEmpty()
        .withMessage("Los categoria es un dato obligatorio")
        .isLength({ min: 2, max: 10000 })
        .isIn(['Desayuno/Merienda','Plato principal','Postre','Ensalada','Aperitivo'])
        .withMessage('La categoría elegida debe ser correcta'
        ),
      check('pasos')
        .notEmpty()
        .withMessage("Los pasos son un dato obligatorio")
        .isLength({ min: 2, max: 20000 })
        .withMessage(
          "Los pasos deben tener entre 2 y 20000 caracteres"
        ),
     check('imagen')
        .notEmpty()
        .withMessage("La imagen es un dato obligatorio")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe enviar una URL valida'
        ),
    ],
    crearReceta);

router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put([
      check("nombreReceta")
        .notEmpty()
        .withMessage("El nombre de la receta es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
          "El nombre de la receta debe tener entre 2 y 50 caracteres"
        ),
     check('resumen')
        .notEmpty()
        .withMessage("El resumen es un dato obligatorio")
        .isLength({ min: 2, max: 10000 })
        .withMessage(
          "Los ingredientes deben tener entre 2 y 10000 caracteres"
        ),
      check("dificultad")
        .notEmpty()
        .withMessage("La dificultad es un dato obligatorio")
        .isIn(['muy facil','facil','intermedio','dificil','experto'])
        .withMessage('La dificultad debe ser correcta'
        ),
      check('ingredientes')
        .notEmpty()
        .withMessage("Los ingredientes son un dato obligatorio")
        .isLength({ min: 2, max: 10000 })
        .withMessage(
          "Los ingredientes deben tener entre 2 y 10000 caracteres"
        ),
      check('categoria')
        .notEmpty()
        .withMessage("Los categoria es un dato obligatorio")
        .isLength({ min: 2, max: 10000 })
        .isIn(['Desayuno/Merienda','Plato principal','Postre','Ensalada','Aperitivo'])
        .withMessage('La categoría elegida debe ser correcta'
        ),
      check('pasos')
        .notEmpty()
        .withMessage("Los pasos son un dato obligatorio")
        .isLength({ min: 2, max: 20000 })
        .withMessage(
          "Los pasos deben tener entre 2 y 20000 caracteres"
        ),
     check('imagen')
        .notEmpty()
        .withMessage("La imagen es un dato obligatorio")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage('Debe enviar una URL valida'
        ),
    ],
    editarReceta)
  .delete(borrarReceta);

export default router;


      // check("dificultad")
      //   .notEmpty()
      //   .withMessage("La dificultad es un dato obligatorio")
      //   .isIn(["&#9733;&#9734;&#9734;&#9734;&#9734;","&#9733;&#9733;&#9734;&#9734;&#9734;", "&#9733;&#9733;&#9733;&#9734;&#9734;", "&#9733;&#9733;&#9733;&#9733;&#9734;", "&#9733;&#9733;&#9733;&#9733;&#9733;"])
      //   .withMessage('La dificultad debe ser correcta'
      //   ),