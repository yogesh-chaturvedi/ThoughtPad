const express = require('express')
const router = express.Router()
const UserModel = require('../models/User')

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = UserModel(req.body)
        await user.save()
        console.log(user)
    }
    catch (error) {
        console.log("there is an error", error)
    }

})


module.exports = router
