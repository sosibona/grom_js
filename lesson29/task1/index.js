const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');

  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem; 
    callback({width, height});
    
  }

  imgElem.addEventListener('load', onImageLoaded);
}

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';


const onImageLoaded = ({ width, height }) => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;  
};

addImage(imgSrc, onImageLoaded);
