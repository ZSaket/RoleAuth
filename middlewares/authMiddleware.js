const { verifyToken } = require("../config/jwt");


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ message: "Invalid token." });

  req.user = decoded;
  next();
};

const roleMiddleware = (allowedRoles) => (req, res, next) => {
  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ message: "Access denied." });
  }
  next();
};

module.exports = { authMiddleware, roleMiddleware };
