import mongoose from 'mongoose';

const TimetablesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    bloco_id: {
      type: String,
      allowNull: false,
    },
    title: {
      type: String,
      allowNull: false,
    },
    creatable: {
      type: Boolean,
    },
    horary: {
      type: Boolean,
      allowNull: true,
    },
    cards: {
      type: Array,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Timetables', TimetablesSchema);
