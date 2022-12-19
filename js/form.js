import {isEscape} from './util.js';
import {validateForm} from './form-validate.js';

const formPicture = document.querySelector('#upload-select-image');
const inputImage = document.querySelector('#upload-file');
const body = document.querySelector('body');
const hashtags = document.querySelector('.text__hashtags');

const resetFormInput = () => {
  inputImage.value = inputImage.getAttribute('value');
  document.querySelector('.text__description').value = '';
  hashtags.value = '';
};

const closeForm = () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  body.classList.remove('modal-open');
  resetFormInput();
  // eslint-disable-next-line no-use-before-define
  removeEventListenerForm();
};


const closeFormByEsc = (evt) => {
  const activeElem = document.activeElement;
  if (isEscape(evt) && activeElem !== hashtags && activeElem !== document.querySelector('.text__description')) {
    closeForm();
  }
};


const removeEventListenerForm = () => {
  document.querySelector('.img-upload__cancel').removeEventListener('clock', closeForm);
  document.removeEventListener('keydown', closeFormByEsc);
  formPicture.removeEventListener('submit', validateForm);
};


const  addEvtToForm = () => {
  document.querySelector('.img-upload__cancel').addEventListener('click', closeForm);
  document.addEventListener('keydown', closeFormByEsc);
  formPicture.addEventListener('submit', validateForm);
};


inputImage.addEventListener('change', function () {
  if(this.value) {
    body.classList.add('modal-open');
    document.querySelector('.img-upload__overlay').classList.remove('hidden');
    addEvtToForm();
  }
});
