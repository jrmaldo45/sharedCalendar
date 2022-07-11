const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('./client/public'));

app.get('/', (req, res) => {
  res.send('success');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});