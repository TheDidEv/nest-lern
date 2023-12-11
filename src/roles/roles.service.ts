import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) { }

    async createRole(roleDto: CreateRoleDto) {
        const roleCreate = await this.roleRepository.create(roleDto);
        return roleCreate;
    }

    async getRole(value: string) {
        const role = await this.roleRepository.findOne({ where: { value } });
        return role;
    }
}
