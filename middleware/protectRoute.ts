const jwt = require('jsonwebtoken');
import User from '../models/user'

const protectRoute = async (req:any, res:any, next:any) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({ error: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

		next();
	} catch (error:any) {
		res.status(500).json({ error: "Internal server error" });
	}
};

export default protectRoute;