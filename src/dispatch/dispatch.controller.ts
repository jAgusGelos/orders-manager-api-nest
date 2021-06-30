import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DispatchService } from './dispatch.service';
import { CreateDispatchDto } from './dto/create-dispatch.dto';
import { UpdateDispatchDto } from './dto/update-dispatch.dto';

@Controller('dispatch')
export class DispatchController {
  constructor(private readonly dispatchService: DispatchService) {}

  @Post()
  create(@Body() createDispatchDto: CreateDispatchDto) {
    return this.dispatchService.create(createDispatchDto);
  }

  @Get()
  findAll() {
    return this.dispatchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dispatchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDispatchDto: UpdateDispatchDto) {
    return this.dispatchService.update(+id, updateDispatchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dispatchService.remove(+id);
  }
}
