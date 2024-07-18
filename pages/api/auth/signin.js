import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

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

    const { email, password } = req.body;
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

    const verifiedPassword = await verifyPassword(password, user.password)
    if (!verifiedPassword) {
        return res
            .status(422)
            .json({ status: "failed", message: "Username or Password Is Incorrect " })
    }
    
    // const newUser = await User.create({ email: email, password: hashedPassword })
    // console.log(newUser);


    // res.status(201).json({ status: "successfully", message: "user created" })




}


export default handler