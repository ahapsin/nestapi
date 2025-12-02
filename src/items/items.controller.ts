import { Body, Controller, Get, Post } from '@nestjs/common';

import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems() {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    const user = await this.itemsService.create(createItemDto);
    return {
      message: 'Data berhasil disimpan',
      data: user,
    };
  }
}
