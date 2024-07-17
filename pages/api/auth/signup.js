import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB"

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
        return res.status(422).json({ status: "failed", message: "invalid data" })
    }

    const existing = await User.findOne({ email: email })
    if (existing) {
        return res.status(422).json({ status: "failed", message: "User exist already" })
    }
    
    const hashedPassword = await hashPassword(password)

    const newUser = await User.create({ email: email, password: hashedPassword })
    console.log(newUser);


    res.status(201).json({ status: "successfully", message: "user created" })




}


export default handler