// import * as Yup from 'yup';
// import Hotels from '../models/Hotels';

// class HotelsController {
//   async store(req, res) {
//     const schema = Yup.object().shape({
//       usuario_id: Yup.number().required(),
//       id_ap: Yup.number().required(),
//       entry_date: Yup.date().required(),
//       exit_date: Yup.date().required(),
//       status: Yup.number().required(),
//       obs: Yup.string(),
//       occurrence: Yup.string(),
//     });
//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Preencha todos os campos!' });
//     }
//     const finishStadia = await Hotels.findOne({
//       where: { usuario_id: req.body.usuario_id },
//     });
//     if (finishStadia) {
//       if (finishStadia.status !== 2) {
//         return res.status(406).json({
//           error: `Associado não pode ser alocado, pois já está com estadia aberta. `,
//         });
//       }
//     }

//     const response = await Hotels.create(req.body);

//     if (response) {
//       return res.status(200).json({ success: 'Estadia criada com sucesso.' });
//     }
//     return res.status(200).json(response);
//   }

//   async show(req, res) {
//     const response = await Hotels.findAll();
//     return res.status(200).json(response);
//   }

//   async update(req, res) {
//     const { id } = req.params;
//     const response = await Hotels.update(req.body, { where: { id } });

//     if (response) {
//       return res.status(200).json({ success: 'Alteração feita com sucesso!' });
//     }
//     return res.status(406).json({
//       error: 'Não foi possível realizar a alteração, tente novamente!',
//     });
//   }

//   async delete(req, res) {
//     const { id } = req.params;
//     const response = await Hotels.destroy({ where: { id } });
//     if (response) {
//       return res
//         .status(200)
//         .json({ success: 'Cadastro no Hotel deletado com sucesso!' });
//     }
//     return res
//       .status(406)
//       .json({ error: 'Não foi possível deletar o cadastro no hotel' });
//   }
// }
// export default new HotelsController();
