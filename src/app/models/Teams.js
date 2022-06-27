import { Model, DataTypes } from 'sequelize';

class teams extends Model {
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
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.classrooms, {
      foreignKey: 'teams_id',
    });
    this.hasMany(models.disciplinas, {
      foreignKey: 'teams_id',
    });
    this.hasMany(models.teachers, {
      foreignKey: 'teams_id',
    });
    // this.belongsTo(Associado, {
    //   foreignKey: 'id',
    // });
  }
}
export default teams;
