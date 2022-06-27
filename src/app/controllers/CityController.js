// // import Cidades from '../models/Cidades';
// import city from '../models/City';

// class CityController {
//   async show(req, res) {
//     const response = await city.findAll();
//     return res.status(200).json(response);
//   }

//   async store(req, res) {
//     // const cities = await Cidades.findAll();

//     // // eslint-disable-next-line no-plusplus
//     // for (let i = 0; i < cities.length; i++) {
//     //   if (cities[i].nome !== '') {
//     //     const c = {
//     //       nome: cities[i].nome,
//     //     };
//     //     // eslint-disable-next-line no-await-in-loop
//     //     await city.create(c);
//     //   }
//     // }
//     const response = await city.create(req.body);

//     return res.status(200).json(response);
//   }
// }
// export default new CityController();
