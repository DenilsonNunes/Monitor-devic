const jwt = require('jsonwebtoken');




const authMiddleware = async (req, res, next) => {

    const authHeader = req.header('Authorization');

    const token = authHeader && authHeader.split(' ')[1]


    if (!token) return res.status(401).json({ error: 'Acesso negado' });


    try {

        const decoded = jwt.verify(token, process.env.SECRET); 

        const { userCodFunc } = decoded;

        req.userCodFunc = userCodFunc;

        next();

    } catch (error) {

        res.status(401).json({ error: 'Não autorizado' });

    }

};

module.exports = authMiddleware;
