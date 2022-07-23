import mongoose from 'mongoose';

const SalasSchema = new mongoose.Schema(
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
    bloco_id: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Salas', SalasSchema);
