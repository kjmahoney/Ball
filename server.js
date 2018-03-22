const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8000, () => {
  console.log(`port listening at ${port}`);
})
