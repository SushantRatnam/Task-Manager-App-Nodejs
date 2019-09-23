require('../src/db/mongoose')

const Task = require('../src/models/tasks')

// Task.findByIdAndDelete('5d7f951c54cae344bcd99db7').then((task) => {
//     console.log(task)
//     return Task.countDocuments( {completed: false} )
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5d80c8d4e0a9435624289fd2').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

