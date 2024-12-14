import { Controller, Get, Param } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  @Get(':id')
  async findAll(@Param('id') id: string) {
    return await this.service.findOne(id)
  }
}
