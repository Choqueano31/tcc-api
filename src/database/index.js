import Sequelize from 'sequelize';
import mongoose from 'mongoose';

// import user from '../app/models/User';
// import File from '../app/models/File';
// import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';
import Classrooms from '../app/models/Classrooms';
import Disciplinas from '../app/models/Disciplinas';
import teachers from '../app/models/Teachers';
import Teams from '../app/models/Teams';

const models = [Classrooms, Disciplinas, teachers, Teams];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // console.log(models[5].associate(this.connection.models));

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/TCC?appName=TCC',
      // 'mongodb+srv://almeida:24111994@cluster0.ps000.mongodb.net/TCC?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
