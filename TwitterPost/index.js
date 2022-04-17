const client = require("./config")

const express = require('express');
const router = express.Router();
// Import this to use the interface library
const Create = require('../interfaces/strike');
const { CronJob } = require("cron");

// router.post('/', async function(req,res){
//     const strikeObj = new Create('getting_started','');
//     let apiRes = req.body
//     let tweet = apiRes["user_session_variables"]["name"]
//     let newTweetId = '1234';

//     quesObj = strikeObj.Question('val1');
//     quesObj.QuestionText().SetTextToQuestion(`Tweet successful! Your Tweet link: https://twitter.com/PandaCoding/status/${newTweetId}`)

//     try{
//         await client.post('statuses/update', {status: tweet}).then(res=> {
//             console.log(res.id_str)
//             newTweetId = res.id_str;
//         })
//         console.log("tweet success")

//     //quesObj.QuestionText().SetTextToQuestion(`Tweet successful! Your Tweet link: https://twitter.com/PandaCoding/status/${newTweetId}`)
//     res.status(200).json(strikeObj.Data());
//     }catch(e){
//         console.error(e)
//     }
// })
let sdate;
let NewTweet = "";

async function callack(){
    console.log("asdasf")
    await client.post('statuses/update', {status: NewTweet}).then(res=> {
        newTweetId = res.id_str;
        })
        console.log("tweet success")
}

router.post('/',(req,res) => {
    const strikeObj = new Create('getting_started','');
    console.log("routing")

    let apiRes = req.body
    let tweet = apiRes["user_session_variables"]["name"]
    let duration = apiRes["user_session_variables"]["duration"]

    //Question Card interface
    // quesObj = strikeObj.AnswerCard('val1');
    // quesObj.QuestionText().SetTextToQuestion("name success"+ name)

    questionCardObj = strikeObj.Question('cardResp');
    questionCardObj.QuestionCard().SetHeaderToQuestion(1,strikeObj.HALF_WIDTH).
        AddTextRowToQuestion(strikeObj.H3,`Your Tweet: ${tweet}`,"#00acee",true);

    // Answer Card Interface
    answerCardObj = questionCardObj.Answer(true);
    answerCardObj.AnswerCardArray(strikeObj.VERTICAL_ORIENTATION);
    answerCardObj.AnswerCard().SetHeaderToAnswer(2,strikeObj.HALF_WIDTH).
        AddTextRowToAnswer(strikeObj.H3,`Success! Check back in you set time duration.`,"#4bb543",false);

    //Number(duration)
    let dur = parseInt(duration)
    NewTweet = tweet
    sdate = new Date();
    sdate.setSeconds(sdate.getSeconds()+dur);
    const job = new CronJob(sdate, callack)
    job.start();
    res.status(200).json(strikeObj.Data());
});


module.exports = router;