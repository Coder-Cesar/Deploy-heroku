import {
  Controller,
  Get,
  Delete,
  Post,
  Put,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiantes } from './estudiantes.interface';

@Controller('estudiantes')
export class EstudiantesController {
  constructor(private estudiantesService: EstudiantesService) {}
  @Get()
  //GET http://localhost:3000/estudiantes
  ObtenerTodos(): Promise<Estudiantes[]> {
    return this.estudiantesService.todos();
  }

  @Get(':id')
  //GET http://localhost:3000/estudiantes/{id}
  ObtenerUno(@Param('id') id): Promise<Estudiantes> {
    return this.estudiantesService.uno(id);
  }

  @Post()
  //POST http://localhost:3000/estudiantes/
  crear(@Body() body: Estudiantes): Promise<Estudiantes> {
    return this.estudiantesService.crear(body);
  }

  @Put(':id')
  //PUT http://localhost:3000/estudiantes/1
  actualizar(
    @Param('id') id,
    @Body() estudiante: Estudiantes,
  ): Promise<Estudiantes> {
    return this.estudiantesService.update(id, estudiante);
  }
  @Delete(':id')
  //DELETE http://localhost:3000/estudiantes/1
  async delete(@Res() res, @Param('id') id): Promise<Estudiantes> {
    const borrar = await this.estudiantesService.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Student Deleted Successfully',
      estudiante: borrar,
    });
  }
}
