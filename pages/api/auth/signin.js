import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

async function handler(req, res) {

    if (req.method !== "POST") return

    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ status: "failed", message: "Error in connected to DB" })
    }

    const { email, password, name, lastName } = req.body;
    console.log(email, password, name, lastName);
    
    const secretKey = process.env.SECRET_KEY
    const expiration = 24 * 60 * 60

    if (!email || !password) {
        return res
            .status(422)
            .json({ status: "failed", message: "invalid data" })
    }

    const user = await User.findOne({ email: email })

    if (!user) {
        return res
            .status(404)
            .json({ status: "failed", message: "User Doesn't Exist " })
    }

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
        return res
            .status(422)
            .json({ status: "failed", message: "Username or Password Is Incorrect " })
    }

    const token = sign({ email, name, lastName }, secretKey, { expiresIn: expiration })

    const serialized = serialize("token", token,
        { httpOnly: true, maxAge: expiration, path: "/" }
    )
    res
        .status(200)
        .setHeader("Set-Cookie", serialized)
        .json({ status: "success", message: "Logged in",
             data: { 
                email: user.email,
                 name: user.name,
                  lastName: user.lastName 
                } 
            })
}


export default handler