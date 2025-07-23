const express = require('express')
const Joi = require('joi');

const validateSignup = (req, res, next) => {
    const { name, email, password } = req.body
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().required().email(),
        password: Joi.string().min(5).max(12).required(),
    })
    const { error } = schema.validate({ name, email, password });
    if (error) {
        return res.status(400).json({ message: "Validation Error", success: false, error })
    }
    next()
}


const validateLogin = (req, res, next) => {
    const { email, password } = req.body
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(5).max(12).required(),
    })
    const { error } = schema.validate({ email, password });
    if (error) {
        return res.status(400).json({ message: "Validation Error", success: false, error })
    }
    next()
}


module.exports = { validateSignup, validateLogin }