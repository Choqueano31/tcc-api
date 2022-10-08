import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      allowNull: false,
    },
    senha: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
