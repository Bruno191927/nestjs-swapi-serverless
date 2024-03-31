import { Module } from '@nestjs/common';
import { ProductController } from './presentation/product.controller';
import { CommonModule } from 'src/common/common.module';
import { ProductRepository } from './domain/repository/product.repository';
import { ProductUseCase } from './application/useCases/productUseCase.service';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository,ProductUseCase],
  imports: [CommonModule]
})
export class ProductModule {}
