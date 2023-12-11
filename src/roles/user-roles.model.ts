import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { Role } from "./roles.model";

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles>{
    @ApiProperty({ example: '1', description: 'unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'admin', description: 'value role' })
    @ForeignKey(() => Role)
    @Column({ type: DataType.INTEGER })
    roleId: number;

    @ApiProperty({ example: 'administrator', description: 'role description' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;
}