import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(), // Agrega colores a los registros
        winston.format.simple()
    ),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'app.log' })
    ]
});

export default logger