import {Router} from "express";
import { check } from "express-validator";
import {borrarReceta, crearRecetas, editarReceta, listarRecetas, obtenerReceta } from "../controllers/recetas.controllers";

const router = Router();

router
  .route("/recetas")
.get(listarRecetas)

.post(
    [
      check("nombreReceta")
        .notEmpty()
        .withMessage("La receta es un dato obligatorio")
        .isLength({ min: 2, max: 180 })
        .withMessage(
          "El nombre de la receta debe tener entre 2 y 180 caracteres"
        )],
    crearRecetas
  );

router
  .route("/recetas/:id")
  .get(obtenerReceta)
  .put(editarReceta)
  .delete(borrarReceta);


export default router;