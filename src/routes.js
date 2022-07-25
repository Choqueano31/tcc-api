import { Router } from 'express';
// import multer from 'multer';
import BlocoController from './app/controllers/BlocoController';
import ClassroomController from './app/controllers/ClassroomController';
import DisciplinaController from './app/controllers/DisciplinaController';
import TeacherController from './app/controllers/TeacherController';
import TimeTableController from './app/controllers/TimeTableController';
// import configMulter from './config/multer';

// controller
// import UserController from './app/controllers/UserController';
// import SessionController from './app/controllers/SessionController';
// import FileController from './app/controllers/FileController';
// import ProviderController from './app/controllers/ProviderController';
// import AppointmentController from './app/controllers/AppointmentController';
// import NotificationController from './app/controllers/NotificationController';
// import AvailableController from './app/controllers/AvailableController';

// // middleware
// // import authMiddleware from './app/middlewares/auth';
// import ScheduleController from './app/controllers/ScheduleController';
// // import AssociatesController from './app/controllers/AssociatesController';
// import CityController from './app/controllers/CityController';
// import UnityController from './app/controllers/UnityController';
// import AssociadosteamController from './app/controllers/AssociadosteamController';
// import CidadesController from './app/controllers/CidadesController';
// import HelpController from './app/controllers/HelpController';
// import HotelsController from './app/controllers/HotelsController';
// import BedroomsController from './app/controllers/BedroomsController';

const routes = new Router();
// const upload = multer(configMulter);

routes.get('/', (req, res) => res.json({ online: true }));
routes.post('/bloco', BlocoController.create);
routes.get('/bloco', BlocoController.show);
routes.get('/blocoCount', BlocoController.count);
routes.put('/bloco/:id', BlocoController.update);
routes.delete('/bloco/:id', BlocoController.delete);

routes.post('/salas', ClassroomController.create);
routes.get('/salas', ClassroomController.show);
routes.get('/salas/:id', ClassroomController.index);
routes.put('/salas/:id', ClassroomController.update);
routes.delete('/salas/:id', ClassroomController.delete);

routes.post('/disciplinas', DisciplinaController.create);
routes.get('/disciplinas', DisciplinaController.show);
routes.get('/disciplinas/:id', DisciplinaController.index);
routes.put('/disciplinas/:id', DisciplinaController.update);
routes.delete('/disciplinas/:id', DisciplinaController.delete);

routes.post('/professor', TeacherController.create);
routes.get('/professor', TeacherController.show);
routes.put('/professor/:id', TeacherController.update);
routes.delete('/professor/:id', TeacherController.delete);

routes.post('/timetable', TimeTableController.create);
routes.get('/timetable', TimeTableController.show);
routes.put('/timetable/:id/:id2', TimeTableController.update);
// routes.post('/user', UserController.store);
// routes.post('/sessions', SessionController.store);

// routes.get('/providers', ProviderController.index);
// routes.get('/providers/:providerId/available', AvailableController.index);

// // routes.use(authMiddleware); // irá valer apenas p/ rotas declaradas depois dessa linha

// routes.put('/user', UserController.update);
// routes.get('/user', UserController.show);

// routes.get('/appointments', AppointmentController.index);
// routes.post('/appointments', AppointmentController.store);
// routes.delete('/appointments/:id', AppointmentController.delete);

// routes.get('/schedule', ScheduleController.index);

// routes.get('/notifications', NotificationController.index);
// routes.put('/notifications/:id', NotificationController.update);

// routes.post('/files', upload.single('file'), FileController.store);

// // routes.get('/associates', AssociatesController.show);
// // routes.post('/associatesCreate', AssociatesController.store);
// // routes.post('/associatesFind', AssociatesController.index);

// routes.post('/associadosteamcreate', AssociadosteamController.store);
// routes.get('/associadosteam', AssociadosteamController.show);
// routes.get('/associadosteamindividual/:cpf', AssociadosteamController.index);

// routes.get('/cidadesmigration', CidadesController.Show);
// routes.get('/cities', CityController.show);
// routes.post('/citiesCreate', CityController.store);

// routes.get('/unity', UnityController.show);
// routes.post('/unityCreate', UnityController.store);

// routes.post('/helpUser', HelpController.store);
// routes.get('/helpUserList', HelpController.show);
// routes.get('/helpUserIndividual/:id', HelpController.index);

// routes.post('/Hotelcreate', HotelsController.store);
// routes.get('/HotelList', HotelsController.show);
// routes.put('/Hotelupdate/:id', HotelsController.update);
// routes.delete('/Hoteldelete/:id', HotelsController.delete);

// routes.post('/bedroomscreate', BedroomsController.store);
// routes.get('/bedroomslist', BedroomsController.show);
// routes.put('/bedroomupdate/:id', BedroomsController.update);
// routes.delete('/bedroomdelete/:id', BedroomsController.delete);

export default routes;
