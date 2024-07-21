import { verifyToken } from "@/utils/auth";

async function handler(req, res) {
    if (req.method !== "GET") return;

    const secretKey = process.env.SECRET_KEY
    const { token } = req.cookies
    console.log(token);

    if (!token) {
        return res
            .status(401)
            .json({ status: "failed", message: "You are not logged in!" })
    }

    const result = verifyToken(token, secretKey)
    if (result) {
        res.status(201)
            .json({ status: "success", message: "token is correct", data: result })
    } else {
        res
            .status(401)
            .json({ status: "failed", message: "You are unauthorized!" })
    }

}

export default handler