var store = require('app-store-scraper');

// store
//   .app({ id: 1387885523, ratings: true })
//   .then(console.log)
//   .catch(console.log);

store
  .reviews({
    appId: 'network.celsius.wallet',
    sort: store.sort.HELPFUL,
    page: 2,
  })
  .then(console.log)
  .catch(console.log);
