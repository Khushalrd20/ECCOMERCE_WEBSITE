import  express  from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
  import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController,productListController, productPhotoController, realtedProductController, searchProductController, updateProductController,  productFiltersController } from "../controller/productController.js";
import formidable from "express-formidable"
const router = express.Router();

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//update 
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)


//get product
 router.get('/get-product', getProductController)   

//get single  product
 router.get('/get-product/:slug', getSingleProductController)
 
 //get photo 

 router.get('/product-photo/:pid',productPhotoController);

 //delete product 

 router.delete('/delete-product/:pid',deleteProductController);

 //filter product

router.post('/product-filters',productFiltersController);

//product routes

router.get('/product-count',productCountController);

//product per page 

router.get('/product-list/:page',productListController);

//search  product 

router.get('/search/:keyword',searchProductController);

//similar product

router.get("/related-product/:pid/:cid", realtedProductController);

  //category wise product 
  router.get("/product-category/:slug", productCategoryController);

  //payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

 export default router;