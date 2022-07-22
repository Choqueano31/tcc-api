/* eslint-disable no-underscore-dangle */
import classrooms from '../models/Classrooms';
import disciplinas from '../models/Disciplinas';
import teachers from '../models/Teachers';
import teams from '../models/Teams';
import Bloco from '../schemas/Bloco';
import Disciplinas from '../schemas/Disciplinas';
import Professor from '../schemas/Professor';

class BlocoController {
  async show(req, res) {
    // const response = await Bloco.findAll({
    //   include: [
    //     { model: classrooms },
    //     { model: disciplinas },
    //     { model: teachers, include: [{ model: disciplinas }] },
    //   ],
    // });
    const response = await Bloco.find();
    for (let i = 0; i < response.length; i++) {
      const findSala = await Disciplinas.find({ bloco_id: response[i]._id });
      console.log(findSala);
      // if (findSala.length > 0) {

      // }
    }

    return res.json(response);
  }

  async create(req, res) {
    // const blocoExist = await teams.findOne({ where: { nome: req.body.nome } });
    const blocoExist = await Bloco.findOne({ nome: req.body.nome });

    if (blocoExist) {
      return res.json({ message: 'bloco já cadastrado' });
    }
    const response = new Bloco(req.body);
    await response.save();

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }

  async delete(req, res) {
    const blocoExist = await Bloco.deleteOne({ _id: req.params.id });
    if (blocoExist) {
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
    const response = await Bloco.count();
    result.blocoCount = response;
    const response2 = await Professor.count();
    result.professoresCount = response2;
    const response3 = await Disciplinas.count();
    result.disciplinasCount = response3;

    return res.json(result);
  }

  async update(req, res) {
    const nameAlreadyExists = await Bloco.findOne({ nome: req.body.nome });
    if (nameAlreadyExists)
      return res.status(400).json({ message: 'nome já está sendo utilizado' });

    const blocToUpdate = await Bloco.findOne({ _id: req.params.id });
    if (blocToUpdate) {
      await blocToUpdate.updateOne({ $set: req.body });
      return res.status(200).json({ message: 'Atualização feita com sucesso' });
    }
    return res.status(400).json({ message: 'erro ao tentar atualizar' });
  }
}
export default new BlocoController();
