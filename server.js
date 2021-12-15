const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
const cors = require('cors')
const morgan = require('morgan')
//Transfer the body of every  request to JSON
const bodyParser = require('body-parser')

app.use(cors())
app.use(morgan('tiny'))




// Connect to Mongo database
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

  })
  // IF THE OPERATION SECCESS SEND THIS MESSAGE
  .then(() => console.log('MongoDB database Connected...'))
  // IT THE OPERATION FAILD SEND BACK THE ERROR
  .catch((err) => console.log(err))

// Send back a message to test the port
app.get('/', (req, res) => res.send('Hello World'))

// Define the server port
app.listen(PORT, () => console.log(`App is listening at http://localhost:${PORT}`))