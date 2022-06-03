import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EstudiantesSchema } from './schemas/estudiantes.schema';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Estudiantes', schema: EstudiantesSchema },
    ]),
  ],
  providers: [EstudiantesService],
  controllers: [EstudiantesController],
})
export class EstudiantesModule {}
