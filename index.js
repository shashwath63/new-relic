require('newrelic');
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',//to set the log level
  format: winston.format.json(),//to format the log in json
  defaultMeta: { service: 'user-service' },//to add default meta data
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),//to store error logs in error.log file
    new winston.transports.File({ filename: 'combined.log' }),//to store all logs in combined.log file
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}//to add console transport in development environment
const  express = require('express');
const app = express();

app.get('/', (req, res) => {
    logger.log('route hit');
    if (Math.random() < 0.5) {
		logger.error("there was an err");
	}
    res.json({ message: 'hi there' });
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
