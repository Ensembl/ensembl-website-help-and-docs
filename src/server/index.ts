import app from './app';
import prepareDatabase from '../db/prepareDatabase';

const port = 3000;

prepareDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  });
});
