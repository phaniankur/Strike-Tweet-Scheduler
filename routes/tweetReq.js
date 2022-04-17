const express = require('express');
const router = express.Router();

// Import this to use the interface library
const Create = require('../interfaces/strike');

const baseAPI = "http://47a0-103-163-67-73.ngrok.io/"
router.post('/',(req,res,next) => {

    const strikeObj = new Create('getting_started', baseAPI+'tweetRes');

    // Question Text interface
    questionTextObj = strikeObj.Question('name');
    questionTextObj.QuestionText().
        SetTextToQuestion("What should your tweet say?");

    // answer Text-Input interface
    questionTextObj.TextInput();


    questionTextObj = strikeObj.Question('duration');
    questionTextObj.QuestionText().
        SetTextToQuestion("After how much time do you want to tweet this?");

    // answer Text-Input interface
    questionTextObj.NumberInput();

    res.status(200).json(strikeObj.Data());

});

module.exports = router;