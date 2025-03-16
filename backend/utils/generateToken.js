import jwt from 'jsonwebtoken'; // Import jwt

const generateToken = (res, userId) => {
    const token = jwt.sight({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    // Set JWT as HttpOnly cookie
    res.cookie( 'jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })
}

export default generateToken;
// This file generates a JWT token and sets it as an HttpOnly cookie.