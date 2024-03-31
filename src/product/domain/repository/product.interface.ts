import { CreateProductDto } from "../dto/create-product.dto";

export interface IProductRepository{
    findAll():Promise<any>;
    create(createProductDto:CreateProductDto):Promise<any>;
    findById(id:string):Promise<any>;
    deleteById(id:string):Promise<any>;
}