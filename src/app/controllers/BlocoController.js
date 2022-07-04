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
    const blocoExist = await teams.findOne({ where: { nome: req.body.nome } });
    if (blocoExist) {
      return res.json({ message: 'bloco já cadastrado' });
    }
    const response = await teams.create(req.body);

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }

  async delete(req, res) {
    const blocoExist = await teams.findOne({ where: { id: req.params.id } });
    if (blocoExist) {
      await blocoExist.destroy();
      return res.json({ message: 'bloco exlcuido com sucesso' });
    }
    return res
      .status(400)
      .json({ message: 'nao foi possivel excluir, tente novamente' });
  }

  async count(req, res) {
    const result = {
      blocoCount: 0,
      professoresCount: 0,
      disciplinasCount: 0,
    };
    const response = await teams.count();
    result.blocoCount = response;
    const response2 = await teachers.count();
    result.professoresCount = response2;
    const response3 = await disciplinas.count();
    result.disciplinasCount = response3;

    return res.json(result);
  }
}
export default new BlocoController();
