import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    const token = req.cookies.token;
    // console.log(token)
    if (!token) {
        return res.status(401).json({
            message: "Token is required"
        });
    }

    // const token = authHeader.split(" ")[1];
    
    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

export default authMiddleware;