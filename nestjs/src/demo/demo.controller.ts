import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { Cat, DemoService } from './demo.service'
interface ListAllEntities {
  limit: number
  offset: number
}
interface CreateCatDto {
  name: string
  age: number
  breed: string
}
type UpdateCatDto = CreateCatDto

@Controller('demo')
export class DemoController {
  // private demoService: DemoService
  constructor(private demoService: DemoService) {}

  @Get()
  default(): string {
    return 'hello demo123'
  }
  @Get('profile')
  demo(@Query() query: ListAllEntities): string {
    console.log('request', query)
    return 'hello demo ' + query.limit
  }

  @Post()
  create(@Body() createCatDto: Cat) {
    return this.demoService.create(createCatDto)
    // return 1
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`
  // }

  @Put(':id')
  update(@Param('id') id: string, @Body() _updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`
  }

  @Get('403')
  async error() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }
}
