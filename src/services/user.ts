import { omit } from 'lodash';
import UserModel, { UserDocument } from '../models/user';

export async function createUser(input: UserDocument) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function validatePassword({
  email,
  password
}: {
  email: UserDocument['email'];
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), 'password');
}
