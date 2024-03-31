import { Module } from '@nestjs/common';
import { SwapiModule } from './swapi/swapi.module';
import { CommonModule } from './common/common.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [SwapiModule, CommonModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
