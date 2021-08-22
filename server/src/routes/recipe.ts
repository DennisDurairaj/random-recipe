import express from "express";
import controller from "../controllers/recipe";
const router = express.Router();

router.get("/recipes", controller.getRecipeList);
router.get("/recipes/:id", controller.getRecipe);

export = router;
