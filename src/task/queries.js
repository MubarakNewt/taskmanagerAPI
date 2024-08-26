
const getUsers = 'SELECT * FROM users'
const getUserById = 'SELECT * FROM users WHERE id = $1'
const getUserBoards = 'SELECT * FROM boards JOIN users ON boards.user_id = users.id WHERE users.id = $1'
const getColumnTask = 'SELECT boards.id, boards.name, columns.id, tasks.id, tasks.title, tasks.description, tasks.current_status FROM boards JOIN columns ON boards.id = columns.board_id JOIN tasks ON columns.id = tasks.column_id WHERE boards.id = $1'
const getTasks = 'SELECT tasks.id, tasks.title, tasks.description, tasks.current_status, sub_tasks.id, sub_tasks.title, sub_tasks.is_completed FROM tasks JOIN sub_tasks ON tasks.id = sub_tasks.task_id WHERE tasks.id = $1'
const getBoardById = 'SELECT * FROM boards WHERE id = $1'
const getColumnById = 'SELECT * FROM columns WHERE id = $1'
const getTaskById = 'SELECT * FROM tasks WHERE id = $1'
const getSubtaskById = 'SELECT * FROM sub_tasks WHERE id = $1'


const addUsers = 'INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)'
const addTasks = 'INSERT INTO tasks (title, description, current_status, column_id) VALUES ($1, $2, $3, $4) RETURNING id'
const addSubTasks = 'INSERT INTO sub_tasks (title, task_id) VALUES ($1, $2)'
const addBoard ='INSERT INTO boards (name, user_id) VALUES ($1, $2)'
const addColumn = 'INSERT INTO columns (name, colour_tag, task_count, board_id) VALUES ($1, $2, $3, $4)'
// (title, task_id) VALUES ($1, $2)
//  INSERT INTO tasks (title, description, due_date)
//   VALUES (@title, COALESCE(@description, ''), COALESCE(@due_date, '1900-01-01'));


const removeUser = 'DELETE FROM users WHERE id = $1'
const removeBoard = 'DELETE FROM boards WHERE id = $1'
const removeTask = 'DELETE FROM tasks WHERE id = $1'


const updateUser  = 'UPDATE users SET first_name = COALESCE($1, first_name), last_name = COALESCE($2, last_name), email = COALESCE($3, email) WHERE id = $4'
const updateTask = 'UPDATE tasks SET title = COALESCE($1, title), description = COALESCE($2, description), current_status = COALESCE($3, current_status), column_id = COALESCE($4, column_id) WHERE id = $5'
// const updateSubTask = 'UPDATE sub_tasks SET title = COALESCE($1, title) WHERE id = $2'
const updateBoard = 'UPDATE users SET name = COALESCE($1, name), user_id = COALESCE($2, user_id) WHERE id = $4'
const updateColumn = ''

export default {
    getUsers,
    getUserById,
    getUserBoards,
    getColumnTask,
    getTasks,
    getBoardById,
    getColumnById,
    getTaskById,
    getSubtaskById,

    addUsers,
    addTasks,
    addSubTasks,
    addBoard,
    addColumn,
    
    removeUser,
    removeBoard,
    removeTask,

    updateUser,
    updateTask,
    updateBoard,
}

// GET /1/members/{memberID}/boards
// -- Get all boards for the user with user_id 1
// SELECT b.board_id, b.board_name, b.created_at
// FROM boards b
// JOIN users u ON b.user_id = u.user_id
// WHERE u.user_id = 1;