promise = new Promise((resolve, reject) => {
  reject();
});

promise
  .then(() => console.log('finally finisged'))
  .then(() => console.log('i was also ran!'))
  .catch(() => console.log('uh oh'));
