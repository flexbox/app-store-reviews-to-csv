const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const store = require('app-store-scraper');

const STORE_ID = 1387885523; // find it on the url
const APP_ID = 'network.celsius.wallet'; // find it with 1.

const PAGE_NUMBER = 10; // max 10
const FILE_NAME = 'celsius';

// 1. Get general informations
// store
//   .app({ id: STORE_ID, ratings: true })
//   .then(console.log)
//   .catch(console.log);

const csvWriter = createCsvWriter({
  path: `./${FILE_NAME}.csv`,
  fieldDelimiter: ';',
  header: [
    { id: 'id', title: 'id' },
    { id: 'userName', title: 'userName' },
    { id: 'userUrl', title: 'userUrl' },
    { id: 'version', title: 'version' },
    { id: 'score', title: 'score' },
    { id: 'title', title: 'title' },
    { id: 'text', title: 'text' },
    { id: 'url', title: 'url' },
  ],
  append: true,
});

function writeFile(records) {
  csvWriter
    .writeRecords(records) // returns a promise
    .then(() => {
      console.log('✅ export to .csv');
    });
}

store
  .reviews({
    appId: APP_ID,
    sort: store.sort.HELPFUL,
    page: PAGE_NUMBER,
  })
  .then((records) => {
    console.log(`reviews collected on page ${PAGE_NUMBER}...`);
    writeFile(records);
  })
  .catch(console.log);
