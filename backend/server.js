import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

import rutasUsuario from './rutas/rutasUsuario.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/usuarios/', rutasUsuario);

app.get('/', (req, res) => {
	res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
