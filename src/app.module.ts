import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';

@Module({
  imports: [
    EstudiantesModule,
    MongooseModule.forRoot(
      'mongodb+srv://Cesar:Cesar1984@estudiantes.lmqhx.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
