/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import Bloco from '../schemas/Bloco';
import Disciplinas from '../schemas/Disciplinas';
import Salas from '../schemas/Salas';

class DisciplinaController {
  async show(req, res) {
    const response = await Disciplinas.find();
    for (let i = 0; i < response.length; i++) {
      const findBloc = await Bloco.findOne({ _id: response[i].bloco_id });
      const findSala = await Salas.findOne({ _id: response[i].sala_id });
      if (findBloc) {
        response[i].bloco = findBloc;
      }
      if (findSala) {
        response[i].sala = findSala;
      }
    }
    return res.json(response);
  }

  async index(req, res) {
    const response = await Disciplinas.find({ bloco_id: req.params.id });
    if (response.length > 0) {
      return res.json(response);
    }
    return res.status(400).json();
  }

  async create(req, res) {
    const response = new Disciplinas(req.body);
    await response.save();
    if (response) {
      res.json('Dados criados com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }

  async update(req, res) {
    // const nameAlreadyExists = await Disciplinas.findOne({
    //   nome: req.body.nome,
    // });
    // if (nameAlreadyExists)
    //   return res.status(400).json({ message: 'nome já está sendo utilizado' });

    const classToUpdate = await Disciplinas.findOne({
      _id: req.params.id,
    });
    if (classToUpdate) {
      await classToUpdate.update({ $set: req.body });
      return res.status(200).json({ message: 'Atualização feita com sucesso' });
    }
    return res.status(400).json({ message: 'erro ao tentar atualizar' });
  }

  async delete(req, res) {
    const classExist = await Disciplinas.findOne({
      _id: req.params.id,
    });
    if (classExist) {
      await classExist.remove();
      return res.json({ message: 'Dados exlcuidos com sucesso' });
    }
    return res
      .status(400)
      .json({ message: 'nao foi possivel excluir, tente novamente' });
  }
}
export default new DisciplinaController();
