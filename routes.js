import express from 'express'; //  ES6 module import syntax

export const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.send({ message: 'Get successful', on: new Date() });
});

apiRoutes.get('/:id', (req, res) => {
  //  +req.params.id will cast the string to number
  res.send({
    message: 'Get successful',
    on: new Date(),
    id: +req.params.id
  });
});

apiRoutes.post('/', (req, res) => {
  res.send({ message: 'Post successful', on: new Date(), body: req.body });
});

apiRoutes.put('/', (req, res) => {
  res.send({ message: 'Put successful', on: new Date(), body: req.body });
});

apiRoutes.delete('/:id', (req, res) => {
  res.send({
    message: 'Delete successful',
    on: new Date(),
    id: +req.params.id
  });
});
