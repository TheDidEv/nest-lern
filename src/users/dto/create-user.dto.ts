import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'someEmail@gmail.com', description: "email" })
     email: string;

    @ApiProperty({ example: 'somepassword', description: "password" })
     password: string;
}