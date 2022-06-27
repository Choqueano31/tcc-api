import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class usuarios extends Model {
  static init(sequelize) {
    // sequelize => aqui recebemos nossa conexção
    // Todos os valores que pode receber na hora da criação
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        email: { type: DataTypes.STRING, allowNull: true, unique: true },
        cpf: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        password_hash: { type: DataTypes.STRING, allowNull: false }, // nunca vai exister na base de dados
        admin: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        avatar_id: { type: DataTypes.INTEGER, allowNull: true },
        associado_id: {
          type: DataTypes.INTEGER,

          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },

      {
        tableName: 'usuarios',
        sequelize,
      }
    );

    // criptografando a senha antes de salvar o usuario
    this.addHook('beforeSave', async user1 => {
      if (user1.password_hash) {
        user1.password_hash = await bcrypt.hash(user1.password_hash, 8);
      }
    });

    return this;
  }

  static associate(models) {
    /**
     * pertence a ...
     * esse model de usuario pertence ao model de file
     */
    this.belongsTo(models.arquivos, {
      as: 'avatar',
      foreignKey: 'avatar_id',
    });
    this.belongsTo(models.associadosteam, {
      foreignKey: 'associado_id',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default usuarios;
