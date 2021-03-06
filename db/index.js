require('dotenv').config()

module.exports = require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
