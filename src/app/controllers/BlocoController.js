import classrooms from '../models/Classrooms';
import disciplinas from '../models/Disciplinas';
import teachers from '../models/Teachers';
import teams from '../models/Teams';

class BlocoController {
  async show(req, res) {
    const response = await teams.findAll({
      include: [
        { model: classrooms },
        { model: disciplinas, include: [{ model: teachers }] },
      ],
    });
    return res.json(response);
  }

  async create(req, res) {
    const response = await teams.create(req.body);

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }
}
export default new BlocoController();
