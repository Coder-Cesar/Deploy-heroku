import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModel } from './estudiantes/estudiantes.model';

@Module({
  imports: [
    EstudiantesModel,
    MongooseModule.forRoot(
      'mongodb+srv://Cesar:Cesar1984@estudiantes.lmqhx.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
