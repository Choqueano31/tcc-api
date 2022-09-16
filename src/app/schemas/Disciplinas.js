import mongoose from 'mongoose';

const DisciplinasSchema = new mongoose.Schema(
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
    code: {
      type: String,
      allowNull: false,
    },
    bloco_id: {
      type: String,
      allowNull: false,
    },
    professor_id: {
      type: String,
      allowNull: false,
    },
    sala_id: {
      type: String,
      allowNull: false,
    },
    bloco: {
      type: Object,
    },
    sala: {
      type: Object,
    },
    professor: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Disciplinas', DisciplinasSchema);
