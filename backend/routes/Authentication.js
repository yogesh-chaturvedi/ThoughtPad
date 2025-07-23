const express = require('express')
const router = express.Router()
const UserModel = require('../models/User')

// to save users info. 
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = UserModel(req.body)
        await user.save()
        res.status(200).json({ message: "Accout is created successfully", success: true })
       
    }
    catch (error) {
        console.log("there is an error", error)
    }

})


module.exports = router
