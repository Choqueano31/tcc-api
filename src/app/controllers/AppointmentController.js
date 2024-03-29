// /* eslint-disable no-use-before-define */
// import * as Yup from 'yup';
// import { startOfHour, parseISO, isBefore, format, subHours } from 'date-fns';
// import pt from 'date-fns/locale/pt';

// import user from '../models/User';
// import File from '../models/File';
// import Appointment from '../models/Appointment';
// import Notification from '../schemas/Notification';

// import CancellationMail from '../jobs/CancellationMail';
// import Queue from '../../lib/Queue';

// class AppointmentController {
//   async index(req, res) {
//     const { page = 1 } = req.query;

//     const appointments = await Appointment.findAll({
//       where: { user_id: req.userId, canceled_at: null },
//       order: ['date'],
//       limit: 20,
//       offset: (page - 1) * 20,
//       attributes: ['id', 'date', 'past', 'cancelable'],
//       include: [
//         {
//           model: user,
//           as: 'provider',
//           attributes: ['id', 'name', 'email'],
//           include: [
//             {
//               model: File,
//               as: 'avatar',
//               attributes: ['id', 'path', 'url'],
//             },
//           ],
//         },
//       ],
//     });

//     return res.json(appointments);
//   }

//   async store(req, res) {
//     const schema = Yup.object().shape({
//       provider_id: Yup.number().required(),
//       date: Yup.date().required(),
//     });

//     if (!(await schema.isValid(req.body))) {
//       return res.status(400).json({ error: 'Validation fails' });
//     }

//     const { provider_id, date } = req.body;

//     const isProvider = await user.findOne({
//       where: { id: provider_id, provider: true },
//     });

//     if (!isProvider) {
//       return res
//         .status(401)
//         .json({ error: 'You can only create appointments with providers' });
//     }

//     /**
//      * Check for past dates
//      */
//     const hourStart = startOfHour(parseISO(date)); // deixando sempre as horas inteiras

//     if (isBefore(hourStart, new Date())) {
//       return res.status(400).json({ error: 'Past dates are not permitted' });
//     }

//     /**
//      * Check date availability
//      */
//     const checkAvailability = await Appointment.findOne({
//       where: {
//         provider_id,
//         canceled_at: null,
//         date: hourStart,
//       },
//     });

//     if (checkAvailability) {
//       return res
//         .status(400)
//         .json({ error: 'Appointment date is not available' });
//     }

//     const appointment = await Appointment.create({
//       user_id: req.userId,
//       provider_id,
//       date,
//     });

//     /**
//      * Notify appointment provider
//      */

//     const user1 = await user.findByPk(req.userId);
//     const formatDate = format(hourStart, "'dia' dd 'de' MMMM', às' H:mm'h' ", {
//       locale: pt,
//     });

//     await Notification.create({
//       user: provider_id,
//       content: `Novo agendamento de ${user1.name} para ${formatDate}`,
//     });

//     return res.json(appointment);
//   }

//   async delete(req, res) {
//     const { id } = req.params;
//     const appointment = await Appointment.findByPk(id, {
//       include: [
//         {
//           model: user,
//           as: 'provider',
//           attributes: ['name', 'email'],
//         },
//         {
//           model: user,
//           as: 'user',
//           attributes: ['name'],
//         },
//       ],
//     });

//     /**
//      * If not who scored
//      */
//     if (appointment.user_id !== req.userId) {
//       return res.status(401).json({
//         error: "you don't have permission to cancel this appointment.",
//       });
//     }

//     /**
//      * Date check
//      * Can only cancel 2 hours before
//      */

//     const dateWithSub = subHours(appointment.date, 2);

//     if (isBefore(dateWithSub, new Date())) {
//       return res
//         .status(401)
//         .json({ error: 'You can only cancel appointments 2 hours in advance' });
//     }

//     appointment.canceled_at = new Date();

//     await appointment.save();

//     await Queue.add(CancellationMail.key, { appointment });

//     return res.json(appointment);
//   }
// }

// export default new AppointmentController();
