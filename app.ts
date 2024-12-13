/**
 * Run when the app starts.
 *
 * @format
 * @param app - The Egg.js application instance.
 */

import { Application } from 'egg';
// import { EggMySQL } from 'egg-mysql'

/**
 * Initializes the application.
 * @param app - The Egg.js application instance.
 */

export default (app: Application) => {
  app.beforeStart(async () => {
    // if (app.config.env === 'local') {
    //   // await app.redis.flushdb() // flush redis, be careful
    //   // await syncDataStruct(app)
    //   await syncDatabase(app) // init database struct and data
    //   // await syncConfigCache(app) // sync config cache
    //   // await syncPayItemCache(app)
    // }
    // const mysqlConfig = await app.config.fetch('mysql');
    console.log('app', app);
    // const connect = (app.mysql as any).getSingletonInstance();
    // connect.insert('user', {
    //   username: 'test',
    //   password: 'test',
    // });
    // await hookUserSave(app) // hook user save
  });
};
