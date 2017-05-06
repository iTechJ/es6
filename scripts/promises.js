function asyncFunction(string) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(string);
    }, 2000);
  });
}

asyncFunction('Hello ')
  .then((result) => {
    console.log(result);
    return asyncFunction(`${result}, World`);
  })
  .then((result) => {
    console.log(result);
  });
