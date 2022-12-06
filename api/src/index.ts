import path from 'node:path';
import http from 'node:http';
import { Server } from 'socket.io';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3333;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running on port http:${port}.`);
    });
  })
  .catch((error) => console.log(error));


