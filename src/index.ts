import express from 'express';
import routers from './routes/index';
import checkPath from './middlewares/middleware';

const app = express();
const port = 5000;

//Middleware
app.use(express.static(`/public`));

app.use('/', checkPath, routers);

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`);
});

export default app;
