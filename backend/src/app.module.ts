import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrRatingsModule } from './str_ratings/str_ratings.module';
import { ProductsRatingsModule } from './products_ratings/products_ratings.module';

@Module({
  imports: [StrRatingsModule, ProductsRatingsModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
