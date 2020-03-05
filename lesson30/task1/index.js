export const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {

    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem; 
      resolveCb({width, height});
      
    }

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
  });

  return p;
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amaznaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const resultPromise = addImage(imgSrc);

resultPromise.catch(error => console.log(error));

resultPromise.then(data => console.log(data));

// console.log(result);


// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;  
// };

// addImage(imgSrc, onImageLoaded);
