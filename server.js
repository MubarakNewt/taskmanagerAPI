import express from 'express';
import taskRoutes from './src/task/routes.js'


const app = express();
const port = 2222

app.use(express.json())

app.get('/', (req, res) => {
    res.send('sup')
})

app.use('/api/v1/taskman', taskRoutes)

app.listen(port, () => console.log(port))