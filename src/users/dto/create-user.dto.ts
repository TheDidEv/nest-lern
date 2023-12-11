import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'someEmail@gmail.com', description: "email" })
    readonly email: string;

    @ApiProperty({ example: 'somepassword', description: "password" })
    readonly password: string;
}