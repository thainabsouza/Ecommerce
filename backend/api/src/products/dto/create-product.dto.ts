import { IsString, IsOptional, IsNumber, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'O preço deve ser um número' })
  price: number;

  @IsOptional()
  @IsUrl({}, { message: 'URL principal inválida' })
  imageUrl?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem 1 inválida' })
  imgUrl1?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem 2 inválida' })
  imgUrl2?: string;

  @IsOptional()
  @IsUrl({}, { message: 'URL da imagem 3 inválida' })
  imgUrl3?: string;
}
