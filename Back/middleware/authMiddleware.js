import jwt from 'jsonwebtoken';
import User from '../models/usersSchema.js';

export default async (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;
  console.log(token)

  // if (!token) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, 'YOUR_SECRET_KEY');
    const userId = decodedToken.userId;

    // Find the user by ID using async/await
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Attach the user object to the request
    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
