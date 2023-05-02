function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says Hi!')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise ((resolve, reject) => {
        console.log("Processing response")
        resolve(`Extra information + ${response}`)
    })
}

// makeRequest('Google').then(response => {
//     console.log('Respose received!')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err => {
//     console.log(err)
// })

async function doWork() {
    try{
        const response = await makeRequest('Google') //this returns the resolve section of the Promise
        console.log('Response received')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

doWork()