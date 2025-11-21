import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepo: Repository<Note>,
  ) {}
  create(data: Partial<Note>) {
    const note = this.notesRepo.create(data);
    return this.notesRepo.save(note);
  }

  findAll() {
    return this.notesRepo.find();
  }

  findOne(id: number) {
    return this.notesRepo.findOneBy({ id });
  }

  update(id: number, data: Partial<Note>) {
    return this.notesRepo.update(id, data);
  }

  delete(id: number) {
    return this.notesRepo.delete(id);
  }
}
