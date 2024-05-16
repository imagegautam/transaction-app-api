import UserSchema from "./UserSchema.js";

// inser user
export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};

//`@email` must be string get user by email
export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

export const getUser=()=>{
  return UserSchema.find()
}