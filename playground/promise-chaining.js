require('../src/db/mongoose')

const User = require('../src/models/users')

// User.findByIdAndUpdate('5d80e4668126115dd847c332', {
//     age: 2
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({
//         age: 2
//     })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const updateUserAndCount = async (id, age) => {
    await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({
        age
    })
    return count
}


updateUserAndCount('5d7f92c51ba5ea0bdc0691dc', 21).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})