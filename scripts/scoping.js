(() => {
  "use strict";
  {
    let a = 3;
    var c = 4;
    console.log(`inside block 'a': ${a}`);
    console.log(`inside block 'c': ${c}`);
  }

  console.log(`outside block 'c': ${c}`);
  console.log(`outside block 'a': ${a}`); // error

  const b = 3;
  // b = 4; error

}) ();
