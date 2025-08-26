import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() catDto: CatDto) {
    return this.catsService.create(catDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() catDto: CatDto) {
    return this.catsService.update(id, catDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
