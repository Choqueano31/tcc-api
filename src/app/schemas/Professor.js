import mongoose from 'mongoose';

const ProfessoresSchema = new mongoose.Schema(
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
    disciplina_id: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Professores', ProfessoresSchema);
