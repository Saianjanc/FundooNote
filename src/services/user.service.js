import User from '../models/user.model';

export const createUser = async (body) => {
  const userCheck = await User.exists(body)
  if (!userCheck){
    const data = await User.create(body)
  return data;
  }
};

export const checkUser = async (email,password) => {
  const data = await User.findOne({email})
  if(data!=null){
  if(data.password === password){
      return data
    }else{return 0}
  }
};