// import * as Yup from 'yup';
// import Bedrooms from '../models/Bedrooms';

// class BedroomsController {
//   async store(req, res) {
//     const schema = Yup.object().shape({
//       name: Yup.string().required(),
//       description: Yup.string().required(),
//       status: Yup.number().required(),
//     });
//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Preencha todos os campos!' });
//     }
//     const response = await Bedrooms.create(req.body);

//     return res.status(200).json(response);
//   }

//   async show(req, res) {
//     const response = await Bedrooms.findAll();
//     if (response) {
//       return res.status(200).json(response);
//     }
//     return res.status(406).json({ error: 'Nenhum quarto cadastrado' });
//   }

//   async update(req, res) {
//     console.log(req.body);
//     const { id } = req.params;
//     const bedroomExists = await Bedrooms.findOne({ where: { id } });
//     if (!bedroomExists) {
//       return res
//         .status(406)
//         .json({ error: 'Não foi encontrado o quarto selecionado' });
//     }
//     const response = await Bedrooms.update(req.body, { where: { id } });
//     if (response) {
//       return res.status(200).json({ sucess: 'Quarto atualizado com sucesso' });
//     }
//     return res
//       .status(406)
//       .json({ error: 'Não foi possível atualizar informações do quarto' });
//   }

//   async delete(req, res) {
//     const { id } = req.params;
//     const bedroomExists = await Bedrooms.findOne({ where: { id } });
//     if (!bedroomExists) {
//       return res
//         .status(406)
//         .json({ error: 'Não foi encontrado o quarto selecionado' });
//     }
//     const response = await Bedrooms.destroy({ where: { id } });
//     if (response) {
//       return res.status(200).json({ success: 'Quarto excluído com sucesso' });
//     }
//     return res
//       .status(406)
//       .json({ error: 'Não foi possível excluir o quarto ' });
//   }
// }

// export default new BedroomsController();
