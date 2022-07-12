import { Model, DataTypes } from 'sequelize';

class classrooms extends Model {
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
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.teams, {
      foreignKey: 'teams_id',
    });

    // this.belongsTo(Associado, {
    //   foreignKey: 'id',
    // });
  }
  // static associate(models) {
  //   /**
  //    * pertence a ...
  //    * esse model de usuario pertence ao model de file
  //    */
  //   // this.belongsTo(models.usuarios, {
  //   //   foreignKey: 'usuario_id',
  //   // });
  // }
}
export default classrooms;
