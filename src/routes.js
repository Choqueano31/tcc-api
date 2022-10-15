import { Router } from 'express';
// import multer from 'multer';
import BlocoController from './app/controllers/BlocoController';
import ClassroomController from './app/controllers/ClassroomController';
import DisciplinaController from './app/controllers/DisciplinaController';
import TeacherController from './app/controllers/TeacherController';
import TimeTableController from './app/controllers/TimeTableController';
import UserMongoController from './app/controllers/UserMongoController';
// import configMulter from './config/multer';


// // middleware
// // import authMiddleware from './app/middlewares/auth';


const routes = new Router();
// const upload = multer(configMulter);

routes.get('/', (req, res) => res.json({ online: true }));
routes.post('/bloco', BlocoController.create);
routes.get('/bloco', BlocoController.show);
routes.get('/bloco/:id', BlocoController.index);
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
routes.get('/professor/:id', TeacherController.index);
routes.put('/professor/:id', TeacherController.update);
routes.put('/professorRestrict/:id', TeacherController.updateRestrict);
routes.put('/professorremoverestrict/:id', TeacherController.removeRestrict);
routes.delete('/professor/:id', TeacherController.delete);

routes.post('/timetable', TimeTableController.create);
routes.get('/timetable', TimeTableController.show);
routes.get('/timetable/:id', TimeTableController.index);
routes.put('/timetable/:id/:id2', TimeTableController.update);

routes.post('/createusernmongo', UserMongoController.store);
routes.post('/sessionmongo', UserMongoController.session);


// // routes.use(authMiddleware); // irá valer apenas p/ rotas declaradas depois dessa linha

export default routes;
