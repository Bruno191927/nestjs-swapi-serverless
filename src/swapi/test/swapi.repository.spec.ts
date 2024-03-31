import { SwapiRepository } from '../domain/repository/swapi.repository';

describe('SwapiRepository', () => {
  let swapiRepository: SwapiRepository;

  beforeEach(() => {
    swapiRepository = new SwapiRepository();
  });

  describe('translateToSpanish', () => {
    it('should translate entities to Spanish', () => {
      const entitiesToTranslate = [{ name: 'Luke Skywalker' }];
      const entityToAdapter = { name: 'nombre' };
      const translatedEntities = swapiRepository.translateToSpanish(entitiesToTranslate, entityToAdapter);
      expect(translatedEntities).toEqual([{ nombre: 'Luke Skywalker' }]);
    });
  });
});