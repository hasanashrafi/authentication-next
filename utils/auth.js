/**
 * The code includes functions for hashing passwords, verifying passwords, and verifying tokens with a
 * secret key.
 * @param password - The `password` parameter is a string that represents the user's password. It is
 * used as input to hash the password for storage and verification.
 * @returns The `hashPassword` function returns the hashed password after hashing the input password
 * with a cost factor of 12. The `verifyPassword` function returns a boolean value indicating whether
 * the input password matches the hashed password. The `verifyToken` function returns an object with
 * the email extracted from the verified token if successful, otherwise it returns false.
 */

import { compare, hash } from "bcryptjs";
import { verify } from "jsonwebtoken";


async function hashPassword(password) {
    const hashedPassword = await hash(password, 12)
    return hashedPassword
}


async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword)
    console.log(isValid);
    return isValid
}
function verifyToken(token, secretKey) {
    try {
        const result = verify(token, secretKey)
        return { email: result.email }
    } catch (error) {
        return false;
    }
}





export { hashPassword, verifyPassword, verifyToken }