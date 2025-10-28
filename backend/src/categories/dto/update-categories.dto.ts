import { CategoriesDto } from "./create-categories.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateCategoriesDto extends PartialType(CategoriesDto) {}