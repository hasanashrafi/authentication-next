import User from "@/models/User";
import { verifyPassword, verifyToken } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

async function handler(req, res) {
   
    if (req.method !== "POST") return;

    try {
        await connectDB()
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ status: "failed", message: "Error in connect to DB" })
    }

    const secretKey = process.env.SECRET_KEY;
    const { name, lastName, password } = req.body;
    const { token } = req.cookies;


    if (!token) {
        return res
            .status(500)
            .json({ status: "failed", message: "You Are Not Logged In" })

    }

    const result = verifyToken(token, secretKey)
    if (!result)
        res.status(500).json({ status: "failed", message: "You Are Not Logged In" })

    const user = await User.findOne({ email: result.email })
    console.log(user);

    if (!user) {
        return res
            .status(404)
            .json({ status: "failed", message: "User Not Found" })
    }

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
        return res
            .status(422)
            .json({
                status: "failed",
                message: "Password incorrect!"
            })
    }

    user.name = name;
    user.lastName = lastName;
    user.save();

    res
        .status(200)
        .json({
            status: "success",
            message: "user data updated", data: {
                name,
                lastName,
                email: result.email
            }
        })


}

export default handler