export interface ISwapiUseCase{
    findAndTranslateFilmsToSpanish():Promise<any>;
    findAndTranslatePeopleToSpanish():Promise<any>;
    findAndTranslatePlanetsToSpanish():Promise<any>;
    findAndTranslateSpeciesToSpanish():Promise<any>;
    findAndTranslateStarshipsToSpanish():Promise<any>;
    findAndTranslateVehiclesToSpanish():Promise<any>;
}