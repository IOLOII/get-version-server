import { Injectable } from '@nestjs/common'

export interface Cat {
  name: string
  breed: string
}
@Injectable()
export class DemoService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
    return this.cats
  }

  findAll(): Cat[] {
    return this.cats
  }
}
