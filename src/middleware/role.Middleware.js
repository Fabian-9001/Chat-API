const roleMiddleware = (req, res, next) => {
    if (req.user.role === 'admin') {
        next()
    } else {
        res.status(401).json({ message: 'Permission Denied' })
    }
}

module.exports = roleMiddleware