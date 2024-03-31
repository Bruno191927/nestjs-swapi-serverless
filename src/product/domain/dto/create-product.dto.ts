import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    @ApiProperty()
    name: string;
    @IsNumber()
    @ApiProperty()
    stock: number;
    @IsString()
    @ApiProperty()
    description: string;
}
