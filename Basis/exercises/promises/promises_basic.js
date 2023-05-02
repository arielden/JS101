let prom = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 3) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

prom.then((message) => {
    console.log("This is in then: ", message)
}).catch((message)=> {
    console.log('This is in catch: ', message)
})
