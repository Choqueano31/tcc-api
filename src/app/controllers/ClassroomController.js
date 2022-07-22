import classrooms from '../models/Classrooms';
import teams from '../models/Teams';
import Salas from '../schemas/Salas';

class ClassroomController {
  async show(req, res) {
    const response = await Salas.find();
    return res.json(response);
  }

  async create(req, res) {
    const response = new Salas(req.body);
    await response.save();

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }

  async update(req, res) {
    const nameAlreadyExists = await classrooms.findOne({
      where: { nome: req.body.nome },
    });
    if (nameAlreadyExists)
      return res.status(400).json({ message: 'nome já está sendo utilizado' });

    const classToUpdate = await classrooms.findOne({
      where: { id: req.params.id },
    });
    if (classToUpdate) {
      await classToUpdate.update(req.body);
      return res.status(200).json({ message: 'Atualização feita com sucesso' });
    }
    return res.status(400).json({ message: 'erro ao tentar atualizar' });
  }

  async delete(req, res) {
    const classExist = await classrooms.findOne({
      where: { id: req.params.id },
    });
    if (classExist) {
      await classExist.destroy();
      return res.json({ message: 'Class exlcuida com sucesso' });
    }
    return res
      .status(400)
      .json({ message: 'nao foi possivel excluir, tente novamente' });
  }
}
export default new ClassroomController();
