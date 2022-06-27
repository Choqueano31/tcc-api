import disciplinas from '../models/Disciplinas';

class DisciplinaController {
  async show(req, res) {
    const response = await disciplinas.findAll({});
    return res.json(response);
  }

  async create(req, res) {
    const response = await disciplinas.create(req.body);

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }
}
export default new DisciplinaController();
