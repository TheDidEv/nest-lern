import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) { }

    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }

    @Get('/:value')
    getByValue(@Param('value') value: string) {//@Param - щоб витягнути параметр
        return this.roleService.getRole(value);
    }
}
