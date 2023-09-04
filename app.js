require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

//routers

const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('domain/api/v1/auth', authRouter)
app.use('domain/api/v1/login', jobsRouter)

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();