import express from "express" ; 
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {  categoryControlller, createCategoryController, deleteCategoryController, singlecategoryControlller, updateCategoryController } from "../controller/categoryController.js";

const router = express.Router();

//routes
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)


//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );

  //get all category
  router.get('/get-category',categoryControlller)

  //get single category
  router.get('/single-category/:slug',singlecategoryControlller)

  //delete 
  router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController);



  export default router
  