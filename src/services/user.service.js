import User from '../models/user.model';
import bcrypt from 'bcrypt'

export const createUser = async (body) => {
  const email = body.email
  const userCheck = await User.findOne({email})
  if (!userCheck){
    const salt = 10
    const hash = bcrypt.hashSync(body.password, salt);
    console.log("Message---------",hash);
    body.password=hash
    const data = await User.create(body)
  return data;
  }
  else{
    throw new Error("User Email Already Exists!")
  }
};

export const userLogin = async (email,password) => {
  const data = await User.findOne({email})
  if(data!=null){
  if(bcrypt.compareSync(password,data.password)){
      return data
    }else{
      throw new Error("Password does not Match!")
    }
  }else{
    throw new Error("Email does not Exists!")
  }
};