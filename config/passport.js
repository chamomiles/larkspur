// const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')
// const User = require('../models/User')

// module.exports = function(passport) {
//     passport.use(new LocalStrategy({
//         // ...
//     }),
    
//     async (/* ... */) => {
//         const newUser = {
//             // ...
//         }

//         try {
//             let user = await User.findOne(/* ... */)

//             if (user) {
//                 done(null, user)
//             } else {
//                 user = await User.create(newUser)
//                 done(null, user)
//             }

//         } catch (err) {
//             console.error(err)
//         }
//     })

//     passport.serializeUser((user, done) => {
//         done(null, user.id)
//     })

//     passport.deserializeUser(async (id, done) => {
//         done(null, await User.findById(id))
//     })
// }