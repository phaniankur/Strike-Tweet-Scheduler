const express = require('express');
const router = express.Router();

// Import this to use the interface library
const Create = require('../interfaces/strike');

router.post('/',(req,res,next) => {
    const strikeObj = new Create('getting_started','');

    let apiRes = req.body
    let tweet = apiRes["user_session_variables"]["name"]
    // let locationLat = apiRes["user_session_variables"]["location"]["latitude"]
    // let locationLon = apiRes["user_session_variables"]["location"]["longitude"]
    // let favNumber = apiRes["user_session_variables"]["favNumber"]
    // let dob = apiRes["user_session_variables"]["dob"]

    //Question Card interface
    quesObj = strikeObj.Question('val1');
    quesObj.QuestionText().SetTextToQuestion("Tweet says:"+ tweet)



    res.status(200).json(strikeObj.Data());
});

module.exports = router;