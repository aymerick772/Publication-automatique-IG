const fetch = require('./node-fetch');
import dotenv from 'dotenv';
dotenv.config();

// import express from 'express';
// const app = express()
// const port = process.env.PORT || 4000;

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

const token = process.env.TOKEN_DISCORD;
const channelId = process.env.TOKEN_SERV_DISCORD;

async function sendDiscordMessage(message) {
  const url = `https://discord.com/api/v9/channels/${channelId}/messages`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bot ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: message,
    }),
  });
  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.statusText}`);
  }
}


// sendDiscordMessage('Hello, World!');

