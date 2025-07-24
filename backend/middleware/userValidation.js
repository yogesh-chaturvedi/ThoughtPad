const express = require('express')
const jwt = require('jsonwebtoken');

const userValidation = (req, res, next) => {
    const token = req.headers['authorization']
    try {
        if (!token) {
            return res.status(400).json({ message: "you are not varified user", success: false })
        }
        else {
            const decoded = jwt.verify(token, process.env.SECRET);
            req.userId = decoded.id
            req.userEmail = decoded.email
            next()
        }
    }
    catch (error) {
        console.log("there is an error", error)
    }
}

module.exports = userValidation;
