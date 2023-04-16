import app from './app';
import { port } from './config';
import Logger from './core/Logger';

app
  .listen(port, () => {
    // console.log(`server is running`);
    Logger.info(`server is running at port: ${port} `);
  })
  .on('error', (e) => Logger.error(e));
