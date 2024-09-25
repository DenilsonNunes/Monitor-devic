const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');


const authMiddleware = async (req, res, next) => {

    const authHeader = req.header('Authorization');

    const token = authHeader && authHeader.split(' ')[1]


    if (!token) return res.status(401).json({ error: 'Acesso negado' });


    try {

        //const decoded = jwt.verify(token, '8dIe08j9SqfYUNsE1wuYwrUMjslVMfJ45f1aa232268d'); //  process.env.SECRET
        const decoded = jwt.verify(token, process.env.SECRET); //  


        console.log('decoded', decoded);

        next();

    } catch (error) {

        res.status(401).json({ error: 'Não autorizado' });

    }

};

module.exports = authMiddleware;
