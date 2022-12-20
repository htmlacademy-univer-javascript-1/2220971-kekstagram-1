import { imageUpload } from './formUpload.js';
import { form } from './hashtags.js';

const START_EFFECT  = 'none';

const effects = form.querySelector('.effects__list');
const slider = form.querySelector('.img-upload__effect-level');


let nowEffect = START_EFFECT;


noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

slider.disabled = true;


const reSlider = (effect) =>{
  let maxValue = 1;
  let minValue = 0;
  let stepValue = 0.1;
  let nameOfEffect = '';
  let type = '';

  switch (effect) {
    case 'chrome':
      nameOfEffect = 'grayscale';
      break;
    case 'sepia':
      nameOfEffect = 'sepia';
      break;
    case 'marvin':
      maxValue = 100;
      minValue = 0;
      stepValue = 1;
      type = '%';
      nameOfEffect = 'invert';
      break;
    case 'phobos':
      maxValue = 3;
      minValue = 0;
      stepValue = 0.1;
      type = 'px';
      nameOfEffect = 'blur';
      break;
    case 'heat':
      maxValue = 3;
      minValue = 1;
      stepValue = 0.1;
      nameOfEffect = 'brightness';
  }

  slider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue
    },
    start: maxValue,
    step: stepValue,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  slider.noUiSlider.on('update', () =>{
    imageUpload.style.filter = `${nameOfEffect}(${slider.noUiSlider.get()}${type})`;
  });
};

const takeEffect = (effect) => {
  imageUpload.classList.remove(`effects__preview--${nowEffect}`);
  imageUpload.classList.add(`effects__preview--${effect}`);
  nowEffect = effect;

  if (effect === 'none') {
    slider.disabled = false;
    imageUpload.style.filter = '';
  }
  else {
    slider.disabled = null;
    reSlider(effect);
  }
};

const onAddingEffect = (evt) => {
  const targetEffect = evt.target;
  if (targetEffect.name === 'effect') {
    takeEffect(targetEffect.value);
  }
};
const restartEffects = () => {
  effects.removeEventListener('click',onAddingEffect);
  imageUpload.classList.remove(`effects__preview--${nowEffect}`);
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
  slider.disabled = true;
};

const doEffectsHandler = () => {
  imageUpload.style.filter = '';
  effects.addEventListener('click', onAddingEffect);
};
export {doEffectsHandler, restartEffects};
