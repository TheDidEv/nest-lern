import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
        private roleService: RolesService) { }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRole("USER");
        await user.$set('roles', [role.id]);//$set - дозволяє перезаписати значення в БД
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });//{ include: { all: true } } - повертає всі поля з таблиць які повязані з юзером
        return users;
    }
}
