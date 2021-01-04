const get = require('./get');
const url = process.argv[2];

(async () => {
  try {
    await get(url);
    console.log('Request succeed.');
  } catch {
    console.log('Request failed!');
    process.exit(1);
  }
})();
