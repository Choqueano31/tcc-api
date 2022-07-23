import TimeTable from '../schemas/timeTable';

class TimeTableController {
  async create(req, res) {
    const response = new TimeTable(req.body);
    await response.save();

    if (response) {
      res.json('criado com sucesso');
    }
    return res.status(400).json('nao foi possivel criar');
  }

  async show(req, res) {
    const response = await TimeTable.find();
    return res.json(response);
  }

  async update(req, res) {
    const response = await TimeTable.findOneAndUpdate(
      {
        _id: req.params.id,
        'cards.id': req.params.id2,
      },
      {
        $set: {
          'cards.$': req.body,
        },
      }
    );
    if (response) {
      return res.status(200).json({ message: 'Atualização feita com sucesso' });
    }
    return res.status(400).json({ message: 'erro ao tentar atualizar' });
  }
}

export default new TimeTableController();
