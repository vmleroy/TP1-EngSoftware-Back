import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
      type: String, 
      required: true,
      length: {
        min: 3,
        max: 50,
        message: "name must be between 3 and 50 characters",
    }, 
    },
    email: {
      type: String, 
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: true,
      length: [6, "Password must be at least 6 characters"],
    },
    cpf: {
      type: String, 
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Adress', 
      required: true
    },
    roles: [{
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    }],
});

const users = mongoos.model('users', UserSchema);
export default users;