var timeout = require('connect-timeout')
const morgan = require('morgan')
const passport = require('passport')
const cors = require('cors')
const path = require('path')
const express = require('express')

require('dotenv').config()
require('./config/db')
require('./config/passport');

const app = express()
app.use(timeout('5s'))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(haltOnTimedout)
// Have Node serve the files for our built React app
//app.use(express.static(path.resolve(__dirname, '../client/build')))
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/auth/google',
  passport.authenticate('admin_google', {
    scope:
      ['email', 'profile']
  }
  ));
app.get('/auth/google/callback',
  passport.authenticate('admin_google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
  }));
app.use('/api', require('./routes/api'))
// All other GET requests not handled before will return our React app
/* app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
}); */
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next()
}

app.listen(process.env.PORT_SERVER || 3001, () => {
  console.log(`Api listen port: ${process.env.PORT_SERVER || 3001}`)
})