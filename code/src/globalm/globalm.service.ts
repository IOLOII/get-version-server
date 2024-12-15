import { Injectable } from '@nestjs/common'

@Injectable()
export class GlobalmService {
  private number: number = 0
  getValue(): number {
    return this.number
  }
  setValue(number: number) {
    this.number += number
  }
}
