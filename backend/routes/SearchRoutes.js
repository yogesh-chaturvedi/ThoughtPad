const express = require('express')
const router = express.Router()
const userValidation = require('../middleware/userValidation')
const UserNotes = require('../models/Notes')


router.get('/searching', userValidation, async (req, res) => {
    const query = req.query.query.trim() || "";
    try {
        if (!query) {
            return res.status(200).json({ message: 'enter search query', success: false })
        }

        const searchedTitle = await UserNotes.find({
            userId: req.userId,
            title: {
                $regex: req.query.query,
                $options: 'i'
            }
        })
        res.status(200).json({ message: 'search successfull', success: true, searchedTitle })
    }
    catch (error) {
        res.status(500).json({ message: 'search Unsuccessfull', success: false, error })

    }
})

module.exports = router
