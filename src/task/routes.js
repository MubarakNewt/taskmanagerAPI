import { Router } from "express";
import controller  from "./controller.js";

const router = Router();

router.get('/', controller.getUsers)
// router.get('/:id', controller.getUserById)
router.get('/users/:id/boards', controller.getUserBoards)
router.get('/boards/:id/columns-tasks', controller.getColumnTask)
router.get('/tasks/:id/subtasks', controller.getTasks)

router.post('/', controller.addUsers)
router.post('/addtasks', controller.addTasks)
router.post('/addsub-task', controller.addSubTasks)
router.post('/add-board', controller.addBoard)
router.post('/add-column', controller.addColumn)

router.delete('/:id', controller.removeUser)
router.delete('/boards/:id', controller.removeBoard)
router.delete('/tasks/:id', controller.removeTask)

router.put('/:id', controller.updateUser)
router.put('/tasks/:id', controller.updateTask)
router.put('/boards/:id', controller.updateTask)

export default router