// import * as Yup from 'yup';
// import User from '../models/User';
// import File from '../models/File';
// import associadosteam from '../models/Associadosteam';
// import unities from '../models/Unity';
// import city from '../models/City';

// class UserController {
//   async store(req, res) {
//     const schema = Yup.object().shape({
//       name: Yup.string().required(),
//       cpf: Yup.number().required(),
//       password_hash: Yup.string()
//         .required()
//         .min(6),
//     });

//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Validation fails' });
//     }

//     const userExists = await User.findOne({ where: { cpf: req.body.cpf } });

//     if (userExists) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     const { id, name, cpf } = await User.create(req.body);

//     return res.json({ id, name, cpf });
//   }

//   async update(req, res) {
//     const schema = Yup.object().shape({
//       name: Yup.string(),
//       cpf: Yup.number(),
//       oldPassword: Yup.string().min(6),
//       password: Yup.string()
//         .min(6)
//         .when('oldPassword', (oldPassword, field) =>
//           oldPassword ? field.required() : field
//         ),
//       confirmPassword: Yup.string().when('password', (password, field) =>
//         password ? field.required().oneOf([Yup.ref('password')]) : field
//       ),
//     });

//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Validation fails' });
//     }

//     const { cpf, oldPassword } = req.body;

//     const user = await User.findByPk(req.userId);

//     if (cpf !== user.cpf) {
//       const userExists = await User.findOne({ where: { cpf } });
//       if (userExists) {
//         return res.status(400).json({ error: 'User already exists' });
//       }
//     }

//     if (oldPassword && !(await user.checkPassword(oldPassword))) {
//       return res.status(400).json({ error: 'Password does not match' });
//     }

//     await user.update(req.body);

//     const { id, name, avatar } = await User.findByPk(req.userId, {
//       include: [
//         {
//           model: File,
//           as: 'avatar',
//           attributes: ['id', 'path', 'url'],
//         },
//       ],
//     });

//     return res.json({ id, name, cpf, avatar });
//   }

//   async show(req, res) {
//     const response = await User.findAll({
//       include: [
//         {
//           model: associadosteam,
//           include: [
//             {
//               model: unities,
//               attributes: ['id', 'nome', 'tipo'],
//               include: [
//                 {
//                   model: city,
//                   attributes: ['id', 'nome'],
//                 },
//               ],
//             },
//             { model: city, attributes: ['id', 'nome'] },
//           ],
//         },
//       ],
//       attributes: ['id', 'name', 'cpf', 'admin', 'avatar_id'],
//     });
//     return res.status(200).json(response);
//   }
// }

// export default new UserController();
