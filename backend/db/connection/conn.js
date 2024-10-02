const config = {
    user: process.env.USER_SERVER,
    password: process.env.PASSWORD_SERVER,
    server: process.env.SERVER,
    database: process.env.NAME_DATABASE,//DENILSONTREINAMENTO
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

module.exports = config;