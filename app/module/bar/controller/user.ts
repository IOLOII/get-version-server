import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery, ContextProto, EggContext, Context } from '@eggjs/tegg';
import { HelloService } from '@/module/foo';

@HTTPController({
  path: '/bar',
})
@ContextProto()
export class UserController {
  @Inject()
  helloService: HelloService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'user',
  })
  async user(@Context() ctx: EggContext, @HTTPQuery({ name: 'userId' }) userId: string) {
    console.log('ctx', ctx);
    return await this.helloService.hello(userId);
  }
}
