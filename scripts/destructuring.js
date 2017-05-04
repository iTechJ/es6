const [a, , b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(c);

/*****************************************************/
const getObject = () => {
  return {
    "first": "first",
    "second": "second",
    "third": "third",
    "fourth": "fourth"
  }
};

const {first, third} = getObject();
console.log(first);
console.log(third);

/*****************************************************/

function test({foo: f, bar: b}) {
  // "use strict";
  console.log(`foo is ${f}, and bar is ${b}`);
}
test({
  bar: "Bar",
  foo: "Foo"
});
