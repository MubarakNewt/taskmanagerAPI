import pool from "../../db.js"
import queries from "./queries.js";


const getUsers = (req, res) => {

    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}


const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    // pool.query(queries.getUserById, [id], (error, results) => {
    //     const noUserFound = !results.rows.length;
    //     if (noUserFound) {
    //         res?.send('no student found')
    //     }

        pool.query(queries.getUserById, [id], (error, results) => {
            if (error) throw error;
            res?.status(200).json(results.rows)
        })

    // })

}


// const getBoardById = (req, res) => {

// }

const getUserBoards = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getUserBoards, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getColumnTask = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getColumnTask, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const getTasks = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getTasks, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
}

const addUsers = (req, res) => {

    const id = parseInt(req.params.id)

    const { first_name, last_name, email } = req.body
    // console.log('mememem', email)
    pool.query(queries.addUsers, [first_name, last_name, email], (error, results) => {
        if (error) throw error;
        res.status(201).send('User added')
    })

}

const addTasks = (req, res) => {

    const id = parseInt(req.params.id)

    const { title, description, current_status, column_id } = req.body

    pool.query(queries.addTasks, [title, description, current_status, column_id], (error, results) => {
        if (error) throw error;
        res.status(201).send('Task added')
    })

}

const addSubTasks = (req, res) => {

    const id = parseInt(req.params.id)

    const { title, task_id } = req.body

    pool.query(queries.addSubTasks, [title, task_id], (error, results) => {
        if (error) throw error;
        res.status(201).send('Task added')
    })
}

const addColumn = (req, res) => {

    const id = parseInt(req.params.id)

    const { name, colour_tag, task_count, board_id } = req.body

    pool.query(queries.addColumn, [name, colour_tag, task_count, board_id], (error, results) => {
        if (error) throw error;
        res.status(201).send('Task added')
    })
}

const addBoard = (req, res) => {
    const { name, user_id } = req.body

    pool.query(queries.addBoard, [title, task_id], (error, results) => {
        if (error) throw error;
        res.status(201).send('Task added')
    })
}

const removeUser = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('no student found')
        }

        pool.query(queries.removeUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('User removed')
    })

    })

    

}

const removeBoard = (req, res) => {
    const id = parseInt(req.params.id)

    // pool.query(queries.getUserById, [id], (error, results) => {
    //     const noUserFound = !results.rows.length;
    //     if (noUserFound) {
    //         res.send('no student found')
    //     }
    // })

    pool.query(queries.removeBoard, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Board removed')
    })

}

const removeTask = (req, res) => {
    const id = parseInt(req.params.id)

    // pool.query(queries.getUserById, [id], (error, results) => {
    //     const noUserFound = !results.rows.length;
    //     if (noUserFound) {
    //         res.send('no student found')
    //     }
    // })

    pool.query(queries.removeTask, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Task removed')
    })

}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id)
    const { first_name, last_name, email } = req.body

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send('no student found')
        }
    })

    pool.query(queries.updateUser, [first_name, last_name, email, id], (error, results) => {
        if (error) throw error;
        res.status(200).send('User Updated')
    })

}

const updateTask = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, description, current_status, column_id } = req.body

    // pool.query(queries.getUserById, [id], (error, results) => {
    //     const noUserFound = !results.rows.length;
    //     if (noUserFound) {
    //         res.send('no student found')
    //     }
    // })

    pool.query(queries.updateTask, [title, description, current_status, column_id, id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Task Updated')
    })

}

const updateBoard = (req, res) => {
    const id = parseInt(req.params.id)
    const { name, user_id } = req.body

    // pool.query(queries.getUserById, [id], (error, results) => {
    //     const noUserFound = !results.rows.length;
    //     if (noUserFound) {
    //         res.send('no student found')
    //     }
    // })

    pool.query(queries.updateBoard, [name, user_id, id], (error, results) => {
        if (error) throw error;
        res.status(200).send('Task Updated')
    })

}

export default {
    getUsers,
    getUserById,
    getUserBoards,
    getColumnTask,
    getTasks,

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

