import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './modules/notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://notes_postgres_5i3h_user:RTfxAYH0anymaY3t368qQhsHDOrDeuIb@dpg-d4g7936fu37c739poch0-a/notes_postgres_5i3h',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    NotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
