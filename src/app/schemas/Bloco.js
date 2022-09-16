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
      type: String,
      allowNull: false,
    },
    disciplinas: {
      type: Array,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Bloco', BlocoSchema);
