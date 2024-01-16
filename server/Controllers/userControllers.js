import User from "../Models/userModel.js"


const signupUser = async(req,res)=>{
     try {
        const {name , email,username,password} = req.body;
        const user = await User.findone({$or:[{email},{username}]});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }
        
        
     } catch (error) {
        res.status(500).json({message: error.message})
        console.log("Error in SignupUser:" , error.message);
     }
}




export {signupUser};