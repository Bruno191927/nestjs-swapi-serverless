import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateProductDto } from '../domain/dto/create-product.dto';
import { ProductUseCase } from '../application/useCases/productUseCase.service';
import { IProductUseCase } from '../application/useCases/productUseCase.interface';
import { ApiTags } from '@nestjs/swagger';

@Controller('product')
@ApiTags('dev/product')
export class ProductController {
  constructor(@Inject(ProductUseCase) private readonly productUseCase:IProductUseCase) {}

  @Get()
  findAll(){
    return this.productUseCase.findAll();
  }

  @Post()
  create(@Body() createProductoDto:CreateProductDto){
    return this.productUseCase.create(createProductoDto);
  }

  @Get('/:id')
  findById(@Param('id') id:string){
    return this.productUseCase.findById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id:string){
    return this.productUseCase.deleteById(id);
  }
}
