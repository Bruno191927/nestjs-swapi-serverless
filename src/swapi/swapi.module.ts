import { Module } from '@nestjs/common';
import { SwapiController } from './presentation/swapi.controller';
import { SwapiRepository } from './domain/repository/swapi.repository';
import { SwapiUseCase } from './application/useCases/swapiUseCase.service';

@Module({
  controllers: [SwapiController],
  providers: [SwapiRepository,SwapiUseCase]
})
export class SwapiModule {}
