import { Test, TestingModule } from "@nestjs/testing";
import { ISwapiUseCase } from "../application/useCases/swapiUseCase.interface";
import { SwapiController } from "../presentation/swapi.controller";
import { SwapiUseCase } from "../application/useCases/swapiUseCase.service";
import { SwapiRepository } from "../domain/repository/swapi.repository";
import { HttpStatus } from "@nestjs/common";

describe('SwapiController', () => {
    let swapiController: SwapiController;
    let swapiUseCase: ISwapiUseCase;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [SwapiController],
        providers: [SwapiRepository,SwapiUseCase],
      }).compile();
  
      swapiController = module.get<SwapiController>(SwapiController);
      swapiUseCase = module.get<ISwapiUseCase>(SwapiUseCase);
    });
  
    it('findAndTranslateFilms should return "OK"', async () => {
        jest.spyOn(swapiUseCase, 'findAndTranslateFilmsToSpanish').mockResolvedValue('OK');
        const result = await swapiController.findAndTranslateFilms();
        expect(result).toBe("OK");
    });

    it('findAndTranslatePeople should return "OK"', async () => {
      jest.spyOn(swapiUseCase, 'findAndTranslatePeopleToSpanish').mockResolvedValue('OK');
      const result = await swapiController.findAndTranslatePeople();
      expect(result).toBe("OK");
    });
  
    it('findAndTranslatePlanet should return "OK"', async () => {
        jest.spyOn(swapiUseCase, 'findAndTranslatePlanetsToSpanish').mockResolvedValue('OK');
        const result = await swapiController.findAndTranslatePlanets();
        expect(result).toBe("OK");
    });
    
    it('findAndTranslateSpecies should return "OK"', async () => {
      jest.spyOn(swapiUseCase, 'findAndTranslateSpeciesToSpanish').mockResolvedValue('OK');
      const result = await swapiController.findAndTranslateSpecies();
      expect(result).toBe("OK");
    });

    it('findAndTranslateStarship should return "OK"', async () => {
        jest.spyOn(swapiUseCase, 'findAndTranslateStarshipsToSpanish').mockResolvedValue('OK');
        const result = await swapiController.findAndTranslateStarships();
        expect(result).toBe("OK");
    });

    it('findAndTranslateStarship should return "OK"', async () => {
        jest.spyOn(swapiUseCase, 'findAndTranslateStarshipsToSpanish').mockResolvedValue('OK');
        const result = await swapiController.findAndTranslateStarships();
        expect(result).toBe("OK");
    });

    it('findAndTranslateVehicles should return "OK"', async () => {
        jest.spyOn(swapiUseCase, 'findAndTranslateVehiclesToSpanish').mockResolvedValue('OK');
        const result = await swapiController.findAndTranslateVehicles();
        expect(result).toBe("OK");
    });
  });