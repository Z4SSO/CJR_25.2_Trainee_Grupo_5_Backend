//model ProductImages {
//  id         Int      @id @default(autoincrement())
//  product_id Int
//  product    Products @relation(fields: [product_id], references: [id], onDelete: Cascade)
//  image_url  String
//  order      Int
//}

import { IsUrl } from "class-validator";


export class CreateProductsImageDto {

    @IsUrl()
    image_url: String;

}


