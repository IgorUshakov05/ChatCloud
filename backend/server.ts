let express = require('express')
import { Response as ExpressResponse } from 'express'; // Или другого подходящего модуля
import registrationUser from './Auth/Registration'
import { Request as ExpressRequest } from 'express'; // Или другого подходящего модуля
import {serverConfig} from './dbConfig'
const app = express();
app.use(express.json())


app.use(registrationUser)

app.get('/', (req: ExpressRequest, res: ExpressResponse) => {
    res.send('Hello');
});

app.listen(serverConfig.host, () => {
    console.log(`Server is running on http://localhost:${serverConfig.host}`);
});
