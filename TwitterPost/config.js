const TwitterApi = require("twitter-lite")

const client = new TwitterApi({
    // consumer_key: "SAO4fIOnAdgCmvv0JVXbB21Kg",
    // consumer_secret: "xKBJKvfylq75KdCf3cc2fYVeKu1Ujw9hmMKhYyYNnlHGSVp0hs",
    // access_token_key: "941984479-oWhlmqgmGwOZKj8toKbRohsdTva3m0QV33KazHZX",
    // access_token_secret: "1NDbeYGUKfXC3KKVBvZ5L8gbUw2HmgSn0smd4SZ30ZPW2"

    consumer_key: "ulNEetZ7sswUsR48ccTcpzV64",
    consumer_secret : "MVlTxYNYbDU922IkbMSmYB3HmLdzmi2Al8EM25DUFCsS5hQZjl",
    access_token_key : "1021066006792265729-rCdl4Y3lAmCvP7OYVq7imSsmB3U3o8",
    access_token_secret : "avoCrg0oEFz7ZpRL1oiaT8OIwzPYyzCZ00hPV0d8MriLX",
})

//const readWrite = client.readWrite

module.exports = client