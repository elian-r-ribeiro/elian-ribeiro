import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjectsModule } from './projects/projects.module';
import { TechnologiesModule } from './technologies/technologies.module';
@Module({
  imports: [DbModule, ProjectsModule, TechnologiesModule],
  controllers: [AppController],
})
export class AppModule {}
