const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    let feeling = Number(req.body.feeling);
    let understanding = Number(req.body.understanding);
    let support = Number(req.body.support);
    let comments = req.body.comment;

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES($1, $2, $3, $4);`;
    pool.query(queryText, [
        feeling, understanding, support, comments
    ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});
  
module.exports = router;