import express from 'express';
const router = express.Router();

import * as userController from '../controllers/user.controller';

import jwt from 'json-web-token';

import userRoute from './user.route';
import noteRoute from './note.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', verifyToken,(req, res) => {
    jwt.decode(process.env.ACCESS_TOKEN,req.token,(err,token)=>{
      if (err) {
        throw new Error("Token Not Vaild!")
      } else {
        res.status(200).json({
          Message:'Welcome',
          token
        });
      }
    })
  });
  router.use('/users', userRoute);
  router.use('/note', noteRoute);

  return router;
};

function verifyToken (req, res, next){
  const tokenHead = req.headers.authorization
  if (tokenHead) {
    req.token = tokenHead
    next()
  } else{
    res.send({
      result:'Token is Invaild'
    })
  }
}

export default routes;
