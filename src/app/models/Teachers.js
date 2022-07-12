import { Model, DataTypes } from 'sequelize';

class teachers extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        teams_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        disciplina_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.disciplinas, {
      foreignKey: 'disciplina_id',
    });
  }
}
export default teachers;
