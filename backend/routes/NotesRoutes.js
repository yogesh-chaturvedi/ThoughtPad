const express = require('express')
const router = express.Router()
const userValidation = require('../middleware/userValidation')
const UserNotes = require('../models/Notes')
const UserModel = require('../models/User')

// to add notes 
router.post('/add', userValidation, async (req, res) => {
    const { title, content } = req.body
    try {
        const Note = new UserNotes({
            title: title,
            content: content,
            userId: req.userId
        })
        await Note.save();
        res.status(200).json({ message: "added", success: true })
    }
    catch (error) {
        console.log("there is an error", error)
    }
})


// to get notes 
router.get('/fetch', userValidation, async (req, res) => {
    try {
        const user = await UserNotes.find({ userId: req.userId })
        if (user) {
            res.status(200).json({ message: "your data is here", success: true, user })
        }
        else {
            res.status(400).json({ message: "there is no data of yours present", success: true, user })
        }

    }
    catch (error) {
        console.log("there is an error", error)
    }
})


// to remove note 
router.delete('/remove', userValidation, async (req, res) => {
    const { titleToDelete } = req.body;
    try {
        const Notes = await UserNotes.findByIdAndDelete(titleToDelete)

        if (Notes) {
            res.status(200).json({ message: 'delete successfully', success: true, Notes })
        }
        else{

            res.status(404).json({ message: 'there is not note like this', success: false })
        }
    }
    catch (error) {
        res.status(500).json({ message: 'delete Unsuccessfully', success: false })
    }
})
module.exports = router
