import { Module } from '@nestjs/common';
import { ProjectsProvider } from './projects.provider';
import { ProjectsController } from './projects.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [ProjectsProvider],
  controllers: [ProjectsController],
  imports: [DbModule]
})
export class ProjectsModule {}
