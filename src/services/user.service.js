import User from '../models/user.model';

export const createUser = async (body) => {
  const userCheck = await User.exists(body)
  if (!userCheck){
    const data = await User.create(body)
  return data;
  }
};