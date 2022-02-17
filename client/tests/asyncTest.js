export function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('.5 second!');
    }, 500);
  });
}

export function sixWaitFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('6 second!');
    }, 6000);
  });
}
