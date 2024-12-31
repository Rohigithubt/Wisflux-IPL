const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server', // name of the Redis container
  port: 6379,
});

client.set('visitors', 0);

app.get('/api/visitors', (req, res) => {
  client.get('visitors', (err, visitors) => {
    res.send({ visitors });
  });
});

app.post('/api/visitors', (req, res) => {
  client.incr('visitors', () => {
    client.get('visitors', (err, visitors) => {
      res.send({ visitors });
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
