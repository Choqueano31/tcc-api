// import * as Yup from 'yup';
// // import Associados from '../models/Associados';
// import associadosteam from '../models/Associadosteam';
// import city from '../models/City';
// // import Unidades from '../models/Unidades';
// import unities from '../models/Unity';
// import usuarios from '../models/User';

// class AssociadosteamController {
//   async store(req, res) {
//     // const response = await associadosteam.create(req.body);
//     // return res.json(response);
//     const schema = Yup.object().shape({
//       nome: Yup.string().required(),
//       nome_funcional: Yup.string(),
//       email: Yup.string()
//         .email()
//         .required(),
//       telefone_celular: Yup.string(),
//       telefone_fixo: Yup.string(),
//       matricula_governo: Yup.string(),
//       rg_policial: Yup.string(),
//       rg_bombeiro: Yup.string(),
//       policial_pensionista_id: Yup.number(),
//       unidade_id: Yup.number(),
//       cpf: Yup.string(),
//       cidade_id: Yup.number(),
//       endereco_bairro: Yup.string(),
//       endereco_logradouro: Yup.string(),
//       endereco_numero: Yup.string(),
//       status: Yup.string(),
//       data_nascimento: Yup.date(),
//     });
//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Preencha todos os campos!' });
//     }
//     // console.log('aqui primeiro');
//     const userExists = await usuarios.findOne({
//       where: { email: req.body.email },
//     });

//     if (userExists) {
//       return res
//         .status(400)
//         .json({ error: 'Já existe um usuário utilizando este email.' });
//     }
//     const associateExists = await associadosteam.findOne({
//       where: { nome: req.body.nome },
//     });
//     const associateExists2 = await associadosteam.findOne({
//       where: { email: req.body.email },
//     });
//     if (associateExists) {
//       return res.status(400).json({
//         error: 'Já existe um associado cadastrado com esse nome.',
//       });
//     }
//     if (associateExists2) {
//       return res.status(400).json({
//         error: 'Já existe um associado cadastrado com esse email.',
//       });
//     }
//     const response = await associadosteam.create(req.body);
//     return res.json(response);
//     // const list = await Associados.findAll();
//     // const b = [];
//     // // eslint-disable-next-line no-plusplus
//     // for (let i = 0; i < list.length; i++) {
//     //   if (list[i].unidade_id !== null) {
//     //     // console.log(list[i].unidade_id);
//     //     // eslint-disable-next-line no-await-in-loop
//     //     const response = await Unidades.findOne({
//     //       where: { id: list[i].unidade_id },
//     //     });

//     //     // eslint-disable-next-line no-await-in-loop
//     //     const response2 = await unities.findOne({
//     //       where: { nome: response.nome },
//     //     });

//     //     const data = {
//     //       nome: list[i].nome,
//     //       nome_funcional: list[i].nome_funcional,
//     //       email: list[i].email,
//     //       telefone_celular: list[i].telefone_celular,
//     //       telefone_fixo: list[i].telefone_fixo,
//     //       matricula_governo: list[i].matricula_governo,
//     //       cpf: list[i].cpf,
//     //       unidade_id: response2 ? response2.id : 1,
//     //       cidade_id: 1,
//     //       status: list[i].status,
//     //     };

//     //     // eslint-disable-next-line no-await-in-loop
//     //     const response6 = await associadosteam.create(data);
//     //     // return res.json(response);
//     //     if (response6) {
//     //       const data1 = {
//     //         name: response6.nome,
//     //         email: response6.email,
//     //         cpf: response6.cpf !== '' ? response6.cpf : null,
//     //         password_hash: '123456',
//     //         admin: false,
//     //         associado_id: response6.id,
//     //       };

//     //       // eslint-disable-next-line no-await-in-loop
//     //       const response2 = await usuarios.create(data1);
//     //     }
//     //   }
//     // }

//     // return res.status(200).json('funcionou');
//   }

//   async show(req, res) {
//     const response = await associadosteam.findAll({
//       include: [
//         {
//           model: unities,
//           attributes: ['id', 'nome', 'tipo'],
//           include: [
//             {
//               model: city,
//               attributes: ['id', 'nome'],
//             },
//           ],
//         },
//         {
//           model: city,
//           attributes: ['id', 'nome'],
//         },
//       ],
//     });
//     return res.json(response);
//   }

//   async index(req, res) {
//     const { cpf } = req.params;
//     const response = await associadosteam.findOne({
//       where: { cpf },
//     });
//     res.status(200).json(response);
//   }
// }
// export default new AssociadosteamController();
