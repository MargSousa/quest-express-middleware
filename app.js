const express = require('express');
const app = express();
const PORT = 3000;

const superMiddleware = require('./routes/index');

app.use('/superMiddleware', superMiddleware);

app.get('/', (req, res, next) => {
  res.send('Hello Homepage');
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('Something went wrong...')
  } else {
    console.log(`Listening to port ${PORT}`)
  }
});
