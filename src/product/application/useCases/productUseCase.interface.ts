import { CreateProductDto } from "src/product/domain/dto/create-product.dto";

export interface IProductUseCase{
    findAll():Promise<any>;
    create(createProductDto:CreateProductDto):Promise<any>;
    findById(id:string):Promise<any>;
    deleteById(id:string):Promise<any>;
}