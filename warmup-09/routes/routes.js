'use strict';

const express = require('express');
const router = express.Router();

router.get('/', getAll);
router.post('/save', handleSave);

function getAll(req, res, next){
    res.send('Hello World!');
}

function handleSave(req, res, next){
    res.send(req.body);
}

module.exports = router;