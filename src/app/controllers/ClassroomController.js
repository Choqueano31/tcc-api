/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
// import Bloco from '../schemas/Bloco';
import Salas from '../schemas/Salas';

class ClassroomController {
  async show(req, res) {
    const response = await Salas.find();
    // for (let i = 0; i < response.length; i++) {
    //   const findBloc = await Bloco.findOne({ _id: response[i].bloco_id });
    //   if (findBloc) {
    //     response[i].bloco = findBloc;
    //   }
    // }
    return res.json(response);
  }

  async index(req, res) {
    const response = await Salas.find({ bloco_id: req.params.id });
    if (response.length > 0) {
      return res.json(response);
    }
    return res.status(400).json();
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
    const nameAlreadyExists = await Salas.findOne({
      nome: req.body.nome,
    });
    if (nameAlreadyExists && nameAlreadyExists._id != req.params.id)
      return res.status(400).json({ message: 'nome já está sendo utilizado' });

    const classToUpdate = await Salas.findOne({
      _id: req.params.id,
    });
    if (classToUpdate) {
      await classToUpdate.update({ $set: req.body });
      return res.status(200).json({ message: 'Atualização feita com sucesso' });
    }
    return res.status(400).json({ message: 'erro ao tentar atualizar' });
  }

  async updateRestrict(req, res) {
    const classExists = await Salas.findOne({
      _id: req.params.id,
    });
    if (classExists) {
      await classExists.update({ $push: { restrict: req.body } });
      return res.status(200).json({ message: 'atualizado com sucesso' });
    }
    return res.status(400).json({ message: 'ususario nao encontrado' });
  }

  async removeRestrict(req, res) {
    const classExists = await Salas.findOne({
      _id: req.params.id,
    });
    if (classExists) {
      await classExists.update({ $pull: { restrict: { id: req.body.id } } });
      return res.status(200).json({ message: 'atualizado com sucesso' });
    }
    return res.status(400).json({ message: 'ususario nao encontrado' });
  }

  async delete(req, res) {
    const classExist = await Salas.findOne({
      _id: req.params.id,
    });
    if (classExist) {
      await classExist.remove();
      return res.json({ message: 'Class exlcuida com sucesso' });
    }
    return res
      .status(400)
      .json({ message: 'nao foi possivel excluir, tente novamente' });
  }
}
export default new ClassroomController();
