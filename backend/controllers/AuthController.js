const express = require('express')
const bcrypt = require('bcrypt');
const UserModel = require('../models/User')
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = UserModel({ name, email, password: hashedPassword })
            await user.save()
            res.status(200).json({ message: "Account is created successfully", success: true })
        }
        else {
            return res.status(400).json({ message: "already have an account you can login", success: false })
        }
    }
    catch (error) {
        console.log("there is an error", error)
    }
}



// for login
const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(200).json({ message: "Wrong password" })
            }
            else {
                const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET);
                return res.status(200).json({ message: "Login Successfull", success: true, key: token, userEmail: user.email, userName: user.name, userId: user._id })
            }
        }
    }
    catch (error) {
        console.log("there is an error", error)
    }
}

module.exports = { signup, login }