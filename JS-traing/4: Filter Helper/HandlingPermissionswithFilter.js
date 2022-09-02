// Handling Permissions with Filter

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
];

// 1
var filteredUsers = users.filter(function (user) {
  return user.admin;
});

// 2
var filteredUsers = users.filter((user) => {
  return user.admin;
}); // det er det samme som nr 1 bare nyere versjon å jobbe med
