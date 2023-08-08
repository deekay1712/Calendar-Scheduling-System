const allowedOrigins = [
    'http://127.0.0.1:5500'
];

export const corsOptions = {
    origin: (origin, callback) => {
        // remove !origin during production
        if (allowedOrigins.indexOf(origin) !== -1 ) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionSuccessStatus: 200 
}
