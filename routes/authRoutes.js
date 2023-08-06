import  express  from "express";
import {registerController,
    loginController,forgotPasswordController,testController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController
} 
from "../controller/authController.js"  // importing 
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";


//router object
const router = express.Router();

//routing 
//register ||  Method post 

router.post("/register",registerController); // Handle POST request to /api/users

//login  post
router.post('/login',loginController);

//forget password
router.post("/forgot-password",forgotPasswordController)

//test route 

router.get("/test",requireSignIn,isAdmin ,testController  );

//protected auth routes -user 
router.get("/user-auth",requireSignIn, (req,res)=>{
    res.status(200).send({
        ok :true
    })     
}  );

//protected admin routes 
router.get("/admin-auth",requireSignIn, isAdmin,(req,res)=>{
    res.status(200).send({
        ok :true
    })     
}  );


//update profle

//update profile
router.put("/profile", requireSignIn, updateProfileController);


//orders
router.get("/orders", requireSignIn, getOrdersController);


//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router