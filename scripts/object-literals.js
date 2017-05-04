/**
 * @name obj
 * @property {function} bar
 */
const handler = () => {
  "use strict";
  console.log("the handler handles");
};

const obj = {
  __proto__: {
    "foo": () => {
      "use strict";
      console.log("foo");
    }
  },
  ['bar']: () => {
    "use strict";
    console.log("bar")
  },
  handler,
  toString() {
    return "d " + super.toString();
  },
  [ "prop_" + (() => 42)() ]: 42
};

console.log(obj);
obj.foo();
obj.bar();
