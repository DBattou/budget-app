const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is masdqds");
    // reject("erroor 456");
  }, 3000);
});

console.log("before ");

promise
  .then(data => {
    console.log(data);
  }).then(()=>{
    console.log("does this run ?")
  })
  .catch(error => {
    console.log(error);
  });

console.log("after ");
