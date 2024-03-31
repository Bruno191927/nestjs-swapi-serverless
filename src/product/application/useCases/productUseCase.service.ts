import { CreateProductDto } from "src/product/domain/dto/create-product.dto";
import { IProductUseCase } from "./productUseCase.interface";
import { Inject, Injectable } from "@nestjs/common";
import { IProductRepository } from "src/product/domain/repository/product.interface";
import { ProductRepository } from "src/product/domain/repository/product.repository";

@Injectable()
export class ProductUseCase implements IProductUseCase {
    constructor(@Inject(ProductRepository) private readonly productRepository: IProductRepository) { }
    findAll(): Promise<any> {
        return this.productRepository.findAll();
    }
    create(createProductDto: CreateProductDto): Promise<any> {
        return this.productRepository.create(createProductDto);
    }
    findById(id: string): Promise<any> {
        return this.productRepository.findById(id);
    }
    deleteById(id: string): Promise<any> {
        return this.productRepository.deleteById(id);
    }

}