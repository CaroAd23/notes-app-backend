import { NotesService } from './notes.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private service: NotesService) {}

  @Post()
  create(@Body() body) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
