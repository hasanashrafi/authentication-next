/**
 * The above function is an asynchronous JavaScript handler that logs out a user by setting a cookie
 * with an empty token and a maxAge of 0.
 * @param req - The `req` parameter in the code snippet represents the request object, which contains
 * information about the incoming HTTP request such as the request method, headers, parameters, and
 * body. In this specific code snippet, the `req` object is being used to check if the request method
 * is not "GET"
 * @param res - The `res` parameter in the code snippet refers to the response object in a Node.js HTTP
 * server. It is used to send a response back to the client making the request. In this specific code
 * snippet, the `res` object is used to set a cookie with the name "token" and
 * @returns In the provided code snippet, a handler function is defined to handle incoming requests. If
 * the request method is not a "GET" method, the function will return early without further processing.
 */

import { serialize } from "cookie";

async function handler(req, res) {
    if (req.method !== "GET") return;

    const serialized = serialize("token", "", { path: "/", maxAge: 0 })

    res
        .status(200)
        .setHeader("Set-Cookie", serialized)
        .json({ status: "success", message: "Logged Out" })
}
export default handler