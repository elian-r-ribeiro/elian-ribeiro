import { Module } from '@nestjs/common';
import { TechnologiesController } from './technologies.controller';
import { TechnologiesProvider } from './technologies.provider';
import { DbModule } from 'src/db/db.module';


@Module({
  controllers: [TechnologiesController],
  providers: [TechnologiesProvider],
  imports: [DbModule]
})
export class TechnologiesModule {}
