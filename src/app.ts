import express from 'express';

const app = express();
const port = 8000;
app.get('/', (req, res) => {
  res.send('ok');
});
app.listen(port,()=>{ console.log('App listening on 