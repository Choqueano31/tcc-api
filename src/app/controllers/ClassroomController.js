import classrooms from '../models/Classrooms';

class BlocoController {
  async show(req, res) {
    const response = await classrooms.findAll({});
    return res.json(response);
  }

  async create(req, res) {
    const response = await classrooms.create(req.body);

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }
}
export default new BlocoController();
