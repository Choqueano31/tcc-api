import { Model, DataTypes } from 'sequelize';

class disciplinas extends Model {
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
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        teams_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        classroom_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.teachers, {
      foreignKey: 'disciplina_id',
    });

    // this.belongsTo(Associado, {
    //   foreignKey: 'id',
    // });
  }
}
export default disciplinas;
