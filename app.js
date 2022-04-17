const express = require('express'), bodyParser = require('body-parser');
const app = express();
const gettingStarted = require('./gettingStarted');
const tweetReq = require('./routes/tweetReq')
const tweetRes = require('./TwitterPost/index')
const respondBack = require('./respondBack');

app.use(bodyParser.json());

app.use('/tweetReq', tweetReq);
app.use('/tweetRes', tweetRes);
app.use('/my-first-app/getting-started',gettingStarted);
app.use('/my-first-app/respondBack',respondBack);

app.listen(5000, ()=>
console.log(`running on: ${5000}`))
module.exports = app;