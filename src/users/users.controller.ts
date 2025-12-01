import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Get()
  findAll() {
    return this.usersServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersServices.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersServices.create(createUserDto);
    return {
      message: 'Data berhasil disimpan',
      data: user,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersServices.remove(id);
  }
}
