import { Controller, Get, Inject } from '@nestjs/common';
import { SwapiUseCase } from '../application/useCases/swapiUseCase.service';
import { ISwapiUseCase } from '../application/useCases/swapiUseCase.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('swapi')
@ApiTags('dev/swapi')
export class SwapiController {
  constructor(@Inject(SwapiUseCase) private readonly swapiUseCase:ISwapiUseCase) {}

  @Get('people')
  findAndTranslatePeople(){
    return this.swapiUseCase.findAndTranslatePeopleToSpanish();
  }

  @Get('films')
  findAndTranslateFilms(){
    return this.swapiUseCase.findAndTranslateFilmsToSpanish();
  }

  @Get('species')
  findAndTranslateSpecies(){
    return this.swapiUseCase.findAndTranslateSpeciesToSpanish();
  }

  @Get('starships')
  findAndTranslateStarships(){
    return this.swapiUseCase.findAndTranslateStarshipsToSpanish();
  }

  @Get('planets')
  findAndTranslatePlanets(){
    return this.swapiUseCase.findAndTranslatePlanetsToSpanish();
  }

  @Get('vehicles')
  findAndTranslateVehicles(){
    return this.swapiUseCase.findAndTranslateVehiclesToSpanish();
  }
}
