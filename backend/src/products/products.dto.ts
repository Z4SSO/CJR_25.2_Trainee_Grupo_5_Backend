//import {StoreDto} from;
//import {CategoryDto} from;
//import {ProductsRatingsDto} from;
//import {ProductsImagesDto} from ;

export type ProductsDto = {
  store: StoreDto;
  category: CategoryDto;
  name: string;
  description?: string;
  price: number;
  stock: number;
  product_ratings: ProductsRatingsDto;
  product_images: ProductsImagesDto;
}