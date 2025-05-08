const express = require('express')
const app = express()
const port = 3000


app.post('/register', (req, res) => {
  console.log(req.body);
});
app.post('/login', (req, res) => {
  console.log(req.body);
});
app.get('/users', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
