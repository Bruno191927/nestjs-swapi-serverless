import { Inject, Injectable } from "@nestjs/common";
import { ISwapiRepository } from "../../domain/repository/swapi.interface";
import { SwapiRepository } from "../../domain/repository/swapi.repository";
import { FilmDto, PeopleDto, PlanetDto, SpecieDto, StarshipDto, SwapiResponseDto, VehicleDto } from "../../domain/dto";
import { filmAdapter, peopleAdapter, planetAdapter, specieAdapter, starshipAdapter, vehicleAdapter } from "../../domain/adapter";
import { ISwapiUseCase } from "./swapiUseCase.interface";

@Injectable()
export class SwapiUseCase implements ISwapiUseCase{

    constructor(@Inject(SwapiRepository) private readonly swapiRepository:ISwapiRepository){}

    async findAndTranslateFilmsToSpanish(): Promise<any> {
        const swapiResponse = await this.swapiRepository.getUrl<SwapiResponseDto<FilmDto>>('films');
        const swapiFilmsTranslate = this.swapiRepository.translateToSpanish(swapiResponse.results,filmAdapter);
        return swapiFilmsTranslate;
    }

    async findAndTranslatePeopleToSpanish(): Promise<any> {
        const swapiResponse = await this.swapiRepository.getUrl<SwapiResponseDto<PeopleDto>>('people');
        const swapiPeopleTranslate = this.swapiRepository.translateToSpanish(swapiResponse.results,peopleAdapter);
        return swapiPeopleTranslate;
    }

    async findAndTranslatePlanetsToSpanish(): Promise<any> {
        const swapiResponse = await this.swapiRepository.getUrl<SwapiResponseDto<PlanetDto>>('planets');
        const swapiPlanetsTranslate = this.swapiRepository.translateToSpanish(swapiResponse.results,planetAdapter);
        return swapiPlanetsTranslate;
    }

    async findAndTranslateSpeciesToSpanish(): Promise<any> {
        const swapiResponse = await this.swapiRepository.getUrl<SwapiResponseDto<SpecieDto>>('species');
        const swapiPlanetsTranslate = this.swapiRepository.translateToSpanish(swapiResponse.results,specieAdapter);
        return swapiPlanetsTranslate;
    }

    async findAndTranslateStarshipsToSpanish(): Promise<any> {
        const swapiResponse = await this.swapiRepository.getUrl<SwapiResponseDto<StarshipDto>>('starships');
        const swapiStarshipsTranslate = this.swapiRepository.translateToSpanish(swapiResponse.results,starshipAdapter);
        return swapiStarshipsTranslate;
    }

    async findAndTranslateVehiclesToSpanish(): Promise<any> {
        const swapiResponse = await this.swapiRepository.getUrl<SwapiResponseDto<VehicleDto>>('vehicles');
        const swapiVehiclesTranslate = this.swapiRepository.translateToSpanish(swapiResponse.results,vehicleAdapter);
        return swapiVehiclesTranslate;
    }

}