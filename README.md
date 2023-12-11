## Installation

```bash
$ npm install
```

## Running the app

```bash
# installing for change env(production/development) on package.json 
$ npm i cross-env

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

For create module/service/controller(in this example for users)
```bash
$ nest generate module users
$ nest generate service users
$ nest generate controller users
```

Use swager
```bash
# install
$ npm i @nestjs/swagger swagger-ui-express
```
on main.ts initialize DocumentBuilder
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
