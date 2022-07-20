import mongoose from 'mongoose';

const BlocoSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: String,
      allowNull: false,
    },
    turno: {
      type: Number,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Bloco', BlocoSchema);
