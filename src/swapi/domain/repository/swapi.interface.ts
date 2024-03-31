export interface ISwapiRepository{
    translateToSpanish<T>(entityDto:T[],itemToTranslate:Record<string, string>):T[];
    getUrl<T>(urlPath:string): Promise<T>
}