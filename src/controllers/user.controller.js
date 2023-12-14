import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const createUser = async (req, res, next) => {
  try {
    const data = await UserService.createUser(req.body);
    if(data==null){
      res.status(HttpStatus.NOT_ACCEPTABLE).json({
        code: HttpStatus.NOT_ACCEPTABLE,
        data: data,
        message: 'User Already Exists!'
      });
    }
    else{
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User Created Successfully!'
    });
   }
  } catch (error) {
    res.status(HttpStatus.NOT_ACCEPTABLE).json({
      code: HttpStatus.NOT_ACCEPTABLE,
      data: data,
      message: 'User Not Created!'
    });
    next(error);
  }
};


