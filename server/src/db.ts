import mongoose, { Schema, model} from "mongoose";
import bcrypt from "bcrypt"
import { DATABASE_URI } from "./config"

mongoose.connect(DATABASE_URI)

const UserSchema = new Schema({
    email: { type: Schema.Types.String, require: true, unique: true, trim: true },
    firstName: { type: Schema.Types.String, require: true, trim: true },
    lastName: { type: Schema.Types.String, require: true, trim: true },
    password: {type: Schema.Types.String, require: true, trim: true }
})

UserSchema.methods.createHash = async function(plainTextPassword: string) {
    
    const saltRounds = 10;
    return await bcrypt.hash(plainTextPassword, saltRounds)

}

UserSchema.methods.validatePassword = async function(candidatePassword: string) {
    return await bcrypt.compare(candidatePassword, this.password)
}

export const UserModel = model("users", UserSchema)