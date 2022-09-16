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
    restrict: {
      type: Array,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Salas', SalasSchema);
