// import city from '../models/City';
// // import Unidades from '../models/Unidades';
// import unidades from '../models/Unity';

// class Unity {
//   async show(req, res) {
//     const response = await unidades.findAll({
//       include: [
//         {
//           model: city,
//           attributes: ['nome'],
//         },
//       ],
//     });

//     return res.status(200).json(response);
//   }

//   async store(req, res) {
//     // const list = await Unidades.findAll();

//     // for (let i = 0; i < list.length; i++) {
//     //   if (list[i].nome !== '') {
//     //     const b = {
//     //       nome: list[i].nome,
//     //       tipo: list[i].tipo,
//     //       cidade_id: 1,
//     //     };
//     //     await unidades.create(b);
//     //   }
//     // }
//     const response = await unidades.create(req.body);

//     return res.status(200).json(response);
//   }
// }
// export default new Unity();
