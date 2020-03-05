import { addImage } from './addImage.js'

export const addImageV2 = urlImg => {

  const prom = new Promise((resolve, reject) => {

    const callbackFromAddImage = (error, data) => {
      if (error) {
        reject(error)
      }
      resolve(data);
    }
    addImage(urlImg, callbackFromAddImage);

    return prom;
  });
}
