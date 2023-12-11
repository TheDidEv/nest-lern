import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttr {
    email: string,
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr>{
    @ApiProperty({ example: '1', description: 'unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: '1wasd@gmail.com', description: 'unique email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'somePassword', description: 'password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'bande or no' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'was banned for somthing', description: 'blocking reason' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}