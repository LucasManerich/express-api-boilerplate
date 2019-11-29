const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ error: 'Token not found' })
    }
    
    const [, token] = authHeader.split(' ')
    
    if (!token) {
      return res.status(401).json({ error: 'Token malformatted' })
    }

    const decoded = await jwt.verify(token, process.env.HASH)

    req.userId = decoded.id
    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Not authorized' })
  }
}
