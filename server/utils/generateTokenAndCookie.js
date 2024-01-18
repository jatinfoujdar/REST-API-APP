import jwt from "jsonwebtoken";

const generateTokenAndCookie = (userId,res)=>{
const token = jwt.sign({userId},process.env.JWTSECRET,{
    expiresIn: '15d'
})
res.cookie("jwt",token,{
    httpOnly: true,
    maxAge: 15 * 24 * 600 * 60 * 1000,
    sameSite: "strict",
})
return token;

}

export default generateTokenAndCookie;