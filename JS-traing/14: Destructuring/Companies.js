// Destructuring Arrays

const companies = ['Google', 'Facebook', 'Uber'];

/**const [name, name2, name3, name4] = companies;  //Google, Facebook, Uber
name;
name2;
name3;
typeof name4 // undefind
**/

/**const [name, ...rest] = companies; // printer. ['Facebook', 'Uber']   // tar kun resten av, ikke den første
name;
**/

const [name, name2, ...rest] = companies; // printer. Google, Facebook, ['Uber']
name;
name2;
rest;
