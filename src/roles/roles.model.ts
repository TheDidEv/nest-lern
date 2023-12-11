import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttr {
    value: string,
    description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttr>{
    @ApiProperty({ example: '1', description: 'unique id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'admin', description: 'value role' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: 'administrator', description: 'role description' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}