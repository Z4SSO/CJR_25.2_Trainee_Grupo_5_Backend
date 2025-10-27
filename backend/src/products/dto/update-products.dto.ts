import { PartialType } from "@nestjs/mapped-types";
import { ProductsDto } from "./products.dto";

export class UpdateProductsDto extends PartialType(ProductsDto) {}