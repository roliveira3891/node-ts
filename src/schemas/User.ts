import { Schema, model, Document } from 'mongoose'
import { UserInterface } from '../interfaces/user'

export interface UserModel extends UserInterface, Document {
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return (this.firstName.trim() + ' ' + this.lastName.trim())
}

export default model<UserInterface>('User', UserSchema)
