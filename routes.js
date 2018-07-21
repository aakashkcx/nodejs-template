'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Title',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    })
});

module.exports = router;