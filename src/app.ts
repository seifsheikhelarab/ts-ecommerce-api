import express from 'express';
import config from 'config';
import connect from './utils/connect';
import log from './utils/logger';
import routes from './routes';

import deserializeUser from './middleware/deserializeUser';

const port = config.get<number>('port');

const app = express();

app.use(express.json());
app.use(deserializeUser);

app.listen(port,async () => {
    log.info(`Server running on http://localhost:${port}`);
    await connect();
    routes(app);
});