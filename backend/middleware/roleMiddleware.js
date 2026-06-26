

const roleMiddleware = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "SOMETHNG IS WRONG",
                success: false
            })
        }

        next()

    }
}

module.exports = roleMiddleware