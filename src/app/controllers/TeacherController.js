import teachers from '../models/Teachers';

class TeacherController {
  async show(req, res) {
    const response = await teachers.findAll({});
    return res.json(response);
  }

  async create(req, res) {
    const response = await teachers.create(req.body);

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }
}
export default new TeacherController();
