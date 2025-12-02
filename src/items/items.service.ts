import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from './items.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Items)
    private itemsRepository: Repository<Items>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<User> {
    const newUser = this.itemsRepository.create(createItemDto);
    return this.itemsRepository.save(newUser);
  }
  async findAll(): Promise<Items[]> {
    return this.itemsRepository.find();
  }
}
