import { baseApi } from "../../../common/utils/axiosconfig";
import { ISwapiRepository } from "./swapi.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SwapiRepository implements ISwapiRepository{
    translateToSpanish<T>(listToTranslate: T[],entityToAdapter:Record<string, string>):T[] {
        const adapterToSpanish = listToTranslate.map((itemToTranslate) => {
            const translatedItem: any = {};
            for (const [key, value] of Object.entries(itemToTranslate)) {
                const translatedKey = entityToAdapter[key.toLowerCase()];
                if (translatedKey) {
                    translatedItem[translatedKey] = value;
                }
            }
            return translatedItem;
        });
        return adapterToSpanish;
    }

    async getUrl<T>(urlPath:string): Promise<T> {
        try {
            const result = await baseApi.get<T>(`/${urlPath}/?format=json`);
            return result.data;
        } catch (error) {
            console.log(error);
        }
    }
}