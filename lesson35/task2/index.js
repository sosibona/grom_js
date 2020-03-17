const successRequest = Promise.resolve({ name: "Tom" });

successRequest
    .then(function onSuccess1(data) {
        throw new Error('Error with data');
    })
    .catch(function onError1(error) {
        console.error("onError1", error.message);
    })


const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
    .catch(function onError2(error) {
        throw new Error('Server error')
    })
    .then(function onSuccess2(data) {
        console.log("onSuccess2", data);
    })
    .catch(function onError3(error) {
        console.error("onError3", error.message);
    });

// const successRequest = Promise.resolve({name: 'Taras'});

// successRequest
//   .then(data => {
//     console.log(data);
//     throw new Error('Unexpected error')
//   })
//   .catch(err => {
//     console.error(err);
    
//   })

// const failedRequest = Promse.reject(new Error('Fail'));

// failedRequest
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error(err.message);
//   })
//   .then(data => {
//     console.log(data);
//   })