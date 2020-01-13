const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const emojis = require('../emojis.json');

/**
 * Parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Parse application/json
 */
app.use(bodyParser.json())

/**
 * POST /emojify
 * 
 * @param body A list of names.
 * 
 * Example:
 * [string, string, ...]
 * 
 * @return payload An array of objects mapping the name to 
 * an emoji unicode.
 * 
 * Example:
 * [
 *  {
 *     name: string,
 *     emoji: string,
 *  },
 *  {
 *     name: string,
 *     emoji: string,
 *  },
 *  ...
 * ]
 */
app.post('/emojify', (req, res) => {
  const payload = req.body.map((name) => {
    return {
      name,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }
  })

  return res.json(payload);
});

/**
 * GET /
 * 
 * @return payload A hello message.
 */
app.get('/', (req, res) => {
  return res.send('Hello ConUHacks V!');
});

/**
 * Listen to http requests.
 */
app.listen(port, () => console.log(`Listening on port: ${port}!`));
