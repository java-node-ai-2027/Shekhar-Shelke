import jwt from "jsonwebtoken";

const authenticateToken =
    (req, res, next) => {

        const authHeader =
            req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({
                message:
                    "Access token missing"
            });
        }


        const token =
            authHeader.split(" ")[1];


        try {

            const decoded =
                jwt.verify(
                    token,
                    process.env.ACCESS_TOKEN_SECRET
                );


            req.user = decoded;

            next();

        } catch (error) {

            return res.status(401).json({
                message:
                    "Access token expired or invalid"
            });
        }
    };

export default authenticateToken;