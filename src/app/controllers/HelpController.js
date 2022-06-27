// import Helps from '../models/Help';

// class HelpController {
//   async store(req, res) {
//     const response = await Helps.create(req.body);
//     return res.status(200).json(response);
//   }

//   async show(req, res) {
//     const response = await Helps.findAll();
//     if (response) {
//       return res.status(200).json(response);
//     }
//     return res.status(406).json({ error: 'Nenhum Usuário encontrado!' });
//   }

//   async index(req, res) {
//     const { id } = req.params;
//     const response = await Helps.findOne({
//       where: { usuario_id: id },
//     });
//     if (response) {
//       return res.status(200).json(response);
//     }
//     return res.status(406).json({ error: 'Nenhum Usuário encontrado!' });
//   }
// }
// export default new HelpController();
