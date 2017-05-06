let testArray = [1, 2, 3, 4, 5];
testArray.size = 5;

for(let i in testArray) {
  console.log(i);
}

console.log(">>>>>>>>>>>>>>>>>>>>>>");

for(let i of testArray) {
  console.log(i);
}

