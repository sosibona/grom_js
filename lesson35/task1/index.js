window.addEventListener("error", function onUnhandledError (err) {
  console.error("error", err.message);
});

let userParsingResult;

try {
  const user = JSON.parse('{"firstName": "Taras", "lastName": "Baraniak", "email": "email@gmail.com"}');
  console.log("User data: ", user);
  userParsingResult = "success";
} catch(e) {
  userParsingResult = "error";
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse('{"nameOfProduct": "keyboard"');
  console.log("Product data: ", product);
  productParsingResult = "success";
} catch(e) {
  productParsingResult = "error";
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}

// window.addEventListener('error', function (e){
//   console.log(e);
  
// })

// try {
//   const jsonString = '{"name": "Tom"}';
//   throw new ReferenceError();
//   const userData = JSON.parse(jsonString);
//   console.log(userData);
// } catch(err) {
//   if (err instanceof SyntaxError) {
//     console.error('Handled')
//   } else {
//     throw err; 
//   }
// } finally {
//   console.log('Some actions');
// }

// const a = 100;
// const b = 0;

// try {
//   z = a / b;
//   console.log(z);
// } catch(err) {
//   console.error(err.name);
  
// }





