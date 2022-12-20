import { imageUpload } from './formUpload.js';
import { form } from './hashtags.js';
const Scale = {
  STEP: 0.25,
  MAX: 1,
  MIN: 0.25,
  START: 0.5,
};

let scaling = Scale.START;

const buttons = form.querySelector('.img-upload__scale');
const scaleValue = form.querySelector('.scale__control--value');


const onValue = () => {
  scaling = scaleValue.value.replace('%', '') / 100;

  if(scaling <= Scale.MAX && scaling >= Scale.MIN){
    imageUpload.style.transform = `scale(${scaling.toFixed(2)})`;
  }
};

const onScaling =(evt) => {
  const targetImage = evt.target;
  imageUpload.style.transform = `scale(${scaling})`;

  let mode = 0;

  if (targetImage.classList.contains('scale__control--smaller' && scaling !== Scale.MIN)){
    mode = -1;
  }
  if (targetImage.classList.contains('scale__control--bigger' && scaling !== Scale.MAX)){
    mode = 1;
  }


  scaling = scaling + Scale.STEP * mode;
  if(scaling > Scale.MAX){
    scaling = Scale.MAX;
  }
  if(scaling < Scale.MIN){
    scaling = Scale.MIN;
  }

  imageUpload.style.transform = `scale(${scaling.toFixed(2)})`;
  scaleValue.value = `${scaling.toFixed(2) * 100  }%`;
};

const scalingPhotos = () => {
  buttons.addEventListener('click', onScaling);
  scaleValue.addEventListener('change', onValue);
  scaleValue.value = `${Scale.START * 100}%`;
  imageUpload.style.transform = `scale(${Scale.START})`;
};
const restart = () => {
  buttons.removeEventListener('click', onScaling);
  scaling = Scale.START;
};


export {scalingPhotos, restart};
