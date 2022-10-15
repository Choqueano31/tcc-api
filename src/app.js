import express from 'express';
import path from 'path';
import cors from 'cors';
import Youch from 'youch';


import 'express-async-errors';

import routes from './routes';


// eslint-disable-next-line import/no-unresolved
import './database';

class App {
  constructor() {
    this.server = express();

    // Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {

    // para trabalharmos com JSON
    this.server.use(express.json());

    // configurando Cors
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON();
      return res.status(500).json(errors);
    });
  }
}

export default new App().server;
