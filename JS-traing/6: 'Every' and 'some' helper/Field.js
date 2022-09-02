function Field(value) {
  this.value = value;
}

Field.prototype.validate = function () {
  return this.value.length > 0;
};

var username = new Field('2cool');
var password = new Field('my_password');

//username.validate() && password.validate();
var fields = [username, password, birthdate];
var formIsValid = fields.every(function (field) {
  return field.validate();
});

if (formIsValid) {
  // allow user to submit
} else {
  // show an error message
}
