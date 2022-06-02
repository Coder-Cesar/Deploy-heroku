import * as mongoose from 'mongoose';

export const EstudiantesSchema = new mongoose.Schema({
  Nombre: String,
  Direccion: String,
  Telefono: Number,
});
