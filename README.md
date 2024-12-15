<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

用于获取 version 版本号服务

![Static Badge](https://img.shields.io/badge/docker-support) ![Static Badge](https://img.shields.io/badge/typescript-support) ![Static Badge](https://img.shields.io/badge/nestjs-support)

```bash
# get
localhost:9000/version/:appname
# post
localhost:9000/version/
{
  "appname":"demo"
  "version":"1.0.0"
  "username":"IOLOII"
}
# put
localhost:9000/version/:appname
{
  "version":"1.0.1"
}
```

## 创建脚本

```bash
nest g module demo # 创建模块

nest g controller demo # 创建拦截器

nest g service demo # 创建服务
```
## 数据库 sequelize

https://docs.nestjs.com/techniques/database#sequelize-integration



## 请求中常用修饰器

https://docs.nestjs.cn/8/controllers?id=request

```
@Request()，@Req()	req
@Response()，@Res()*	res
@Next()	next
@Session()	req.session
@Param(key?: string)	req.params/req.params[key]
@Body(key?: string)	req.body/req.body[key]
@Query(key?: string)	req.query/req.query[key]
@Headers(name?: string)	req.headers/req.headers[name]
@Ip()	req.ip
@HostParam()	req.hosts
```

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```



## Resources

- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).


## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).




## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.
