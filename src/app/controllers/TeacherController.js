import teachers from '../models/Teachers';
import Professor from '../schemas/Professor';

class TeacherController {
  async show(req, res) {
    const response = await Professor.find();
    return res.json(response);
  }

  async create(req, res) {
    const response = new Professor(req.body);
    await response.save();

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }

  async update(req, res) {
    const teacherExists = await teachers.findOne({
      where: { id: req.params.id },
    });
    if (teacherExists) {
      await teacherExists.update(req.body);
      return res.status(200).json({ message: 'atualizado com sucesso' });
    }
    return res.status(400).json({ message: 'ususario nao encontrado' });
  }
}
export default new TeacherController();
