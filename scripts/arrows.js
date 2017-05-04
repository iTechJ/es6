(() => {
  console.log("hello, world")
})();

function Test() {
  "use strict";

  this.foo = "value";

  return {
    "bar1": function () {
      return this.foo;
    },
    "bar2": () => this.foo
  }
}

const test = new Test();

console.log("anonymous function call: " + test.bar1());
console.log("arrow function call: " + test.bar2());

