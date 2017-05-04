class Test {
  constructor(a) {
    this.a = a;
  }

  toString() {
    return "" + this.a;
  }
}

console.log(new Test(3).toString());


class PrettyTest extends Test {
  constructor(a, b) {
    super(a);
    this.b = b;
  }

  toString() {
    return "The value of a is " + super.toString() + " and the value of b is " + this.b;
  }
}

console.log(new PrettyTest(2, 5).toString());
