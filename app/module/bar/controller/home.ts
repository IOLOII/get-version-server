import { EggLogger } from 'egg';
import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, Context, EggContext } from '@eggjs/tegg';

@HTTPController({
  path: '/',
})
// export class HomeController extends Service {
export class HomeController {
  @Inject()
  logger: EggLogger;
  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/',
  })
  async index(@Context() ctx: EggContext) {
    console.log('this.app', ctx);
    this.logger.info('hello egg logger');
    return 'hello egg';
  }
}
