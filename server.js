import express from 'express';
import taskRoutes from './src/task/routes.js'
import cors from "cors";
// const cors = require('cors');



const app = express();
const port = 2222

app.use(express.json())

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/v1/taskman', taskRoutes)

app.listen(port, () => console.log(port))