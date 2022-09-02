// Destructuring Arguments Object

var savedField = {
  extension: '.jpg',
  name: 'repost',
  size: 14040,
};

function fileSummary({ name, extension, size }, { color }) {
  return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedField, { color: 'red' });
