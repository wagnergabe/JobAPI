require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// connect DB
const connectDB = require('./db/connect')

//routers

const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/login', jobsRouter)

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();