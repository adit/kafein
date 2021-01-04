const https = require('https');

// simple https get request
const get = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data.toString());
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
};

module.exports = get;
