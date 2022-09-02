// Querying for Records with Find

var users = [
  { name: 'Jill' },
  { name: 'Alex', id: 4 },
  { name: 'Bill' },
  { name: 'Alex' },
];

var user;
for (var i = 0; i < user.length; i++) {
  if (users[i].name === 'Alex') {
    user = users[i];
    break; // sier at vi stopper der vi finner den første Alex, vi kjører forloop of stopper der vi finner den første
  }
}
user;

const user1 = users.find(function (user) {
  return user.name === 'Alex';
});

user.forEach(function (color) {
  if (users[i].name === 'Alex') {
    user = users[i];
    return; // Samme som break
  }
});

/**
 * Vi kan også skrive continue som break; men da stopper den ikke bare kjører videre i loppen mens break så hoper ut av funksjonen, continue fortsetter i loopen
 */
