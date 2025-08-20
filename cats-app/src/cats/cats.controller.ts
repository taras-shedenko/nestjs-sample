import {
  Controller,
  UseGuards,
  Post,
  Get,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { ParseInt } from '../common/pipes/parse-int.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(['admin'])
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseInt) id: number) {
    return this.catsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseInt) id: number) {
    return this.catsService.remove(id);
  }

  @Get('config/:name')
  getConfig(@Param('name') name: string) {
    return this.catsService.getConfig(name);
  }
}
