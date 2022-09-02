url = 'google.com';

fetch(url)
  .then((response) => console.log(response))
  .catch((error) => console.log('BAD', error));
