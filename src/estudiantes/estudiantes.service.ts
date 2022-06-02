import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Estudiantes } from 'src/estudiantes/estudiantes.interface';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectModel('Estudiantes')
    private readonly estudiantesModel: Model<Estudiantes>,
  ) {}

  async todos(): Promise<Estudiantes[]> {
    return await this.estudiantesModel.find();
  }

  async uno(id: string): Promise<Estudiantes> {
    return await this.estudiantesModel.findOne({ _id: id });
  }

  async crear(estudiante: Estudiantes): Promise<Estudiantes> {
    const nuevo = new this.estudiantesModel(estudiante);
    return await nuevo.save();
  }

  async update(id: string, estudiante: Estudiantes): Promise<Estudiantes> {
    return await this.estudiantesModel.findByIdAndUpdate(id, estudiante, {
      new: true,
    });
  }

  async delete(id: string): Promise<Estudiantes> {
    return await this.estudiantesModel.findByIdAndRemove(id);
  }
}
