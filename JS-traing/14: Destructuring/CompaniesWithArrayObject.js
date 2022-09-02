// Destructuring Arrays and Objects "At the Same Time"

const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' },
];

var location = companies[0].location;
location; // Mountain View

const [{ location }] = companies;
location;
