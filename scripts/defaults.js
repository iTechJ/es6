function defaults(greetings, name="World") {
  console.log(`${greetings}, ${name}!`);
}
const greetings = "Hello";
const name = "Students";

defaults(greetings);
defaults(greetings, name);

/*****************************************/

function rest(x, ...y) {
  console.log(x);
  console.log(y);
}
rest(3, "a", "b", "c", "d");

/*****************************************/

function spread(a, b, c) {
  console.log(`${a}, ${b}, ${c}`);
}

spread(...[1, 2, 3]);


