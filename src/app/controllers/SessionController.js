// import jwt from 'jsonwebtoken';
// import * as Yup from 'yup';

// import user from '../models/User';
// import File from '../models/File';

// import authConfig from '../../config/auth';

// class SessionController {
//   async store(req, res) {
//     const schema = Yup.object().shape({
//       cpf: Yup.number().required(),
//       password: Yup.string().required(),
//     });

//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Validation fails' });
//     }

//     const { cpf, password } = req.body;

//     const user1 = await user.findOne({
//       where: { cpf },
//       include: [
//         {
//           model: File,
//           as: 'avatar',
//           attributes: ['id', 'path', 'url'],
//         },
//       ],
//     });

//     if (!user1) {
//       return res.status(401).json({ error: 'User not found' });
//     }

//     if (!(await user1.checkPassword(password))) {
//       return res.status(401).json({ error: 'Password does not match' });
//     }

//     const { id, name, avatar } = user1;

//     return res.json({
//       user: {
//         id,
//         name,
//         cpf,
//         avatar,
//       },
//       token: jwt.sign({ id }, authConfig.secrete, {
//         expiresIn: authConfig.expiresIn,
//       }),
//     });
//   }
// }

// export default new SessionController();
