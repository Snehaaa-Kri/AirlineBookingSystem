import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

const auth= async(req,res,next)=>{
    try {
        const token= req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");

        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            })
        }
        try {
            const decode= jwt.verify(token,process.env.SECRET_KEY)
            console.log("Decode in auth : ",decode);
            req.user=decode
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Token is not valid"
            })
        }
        next();
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"Something went wrong while validating token "
        })
    }
}

const isAdmin = (req, res, next) =>{
  try{
    if(req.user && req.user.role){
      next();
    }
    else {
      return res.status(403).json({
        success: false,
        message: "Access denied: Admins only!"
      })
    }
  }
  catch(err){
    console.log("Error in isAdmin middleware: ", err);
    return res.status(400).json({
      success: false,
      message: "Error while checking admin status"
    })
  }
}
export {auth, isAdmin}