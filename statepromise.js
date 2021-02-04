const promise = new Promise((resolve , reject)=>{
    const res = true;
    // An asynchronus operation.s
    if(res) {
        resolve("Resolved!");
    } else {
        reject(Error("Fatal Error"));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);
