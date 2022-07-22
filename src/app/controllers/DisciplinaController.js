import disciplinas from '../models/Disciplinas';
import Disciplinas from '../schemas/Disciplinas';

class DisciplinaController {
  async show(req, res) {
    const response = await Disciplinas.find();
    return res.json(response);
  }

  async create(req, res) {
    const response = new Disciplinas(req.body);
    await response.save();
    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }
}
export default new DisciplinaController();
