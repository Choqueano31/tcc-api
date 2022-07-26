/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import Bloco from '../schemas/Bloco';
import Disciplinas from '../schemas/Disciplinas';
import Professor from '../schemas/Professor';
import Salas from '../schemas/Salas';

class TeacherController {
  async show(req, res) {
    const response = await Professor.find();
    for (let i = 0; i < response.length; i++) {
      const findBloc = await Bloco.findOne({ _id: response[i].bloco_id });
      const finddisc = await Disciplinas.findOne({
        _id: response[i].disciplina_id,
      });
      const findSala = await Salas.findOne({
        _id: finddisc.sala_id,
      });
      if (findSala) {
        finddisc.sala = findSala;
      }
      if (findBloc) {
        response[i].bloco = findBloc;
      }
      if (finddisc) {
        response[i].disciplina = finddisc;
      }
    }
    return res.json(response);
  }

  async index(req, res) {
    const response = await Professor.find({ bloco_id: req.params.id });
    for (let i = 0; i < response.length; i++) {
      const findBloc = await Bloco.findOne({ _id: response[i].bloco_id });
      const finddisc = await Disciplinas.findOne({
        _id: response[i].disciplina_id,
      });
      const findSala = await Salas.findOne({
        _id: finddisc.sala_id,
      });
      if (findSala) {
        finddisc.sala = findSala;
      }
      if (findBloc) {
        response[i].bloco = findBloc;
      }
      if (finddisc) {
        response[i].disciplina = finddisc;
      }
    }
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
    const teacherExists = await Professor.findOne({
      _id: req.params.id,
    });
    if (teacherExists) {
      await teacherExists.update({ $set: req.body });
      return res.status(200).json({ message: 'atualizado com sucesso' });
    }
    return res.status(400).json({ message: 'ususario nao encontrado' });
  }

  async delete(req, res) {
    const teacherExists = await Professor.findOne({
      _id: req.params.id,
    });
    if (teacherExists) {
      await teacherExists.remove();
      return res.status(200).json({ message: 'Dados Excluidos com sucesso' });
    }
    return res.status(400).json({ message: 'usuario nao encontrado' });
  }
}
export default new TeacherController();
