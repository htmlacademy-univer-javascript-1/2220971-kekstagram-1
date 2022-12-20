const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_COUNT = 5;
const formUpload = document.querySelector('#upload-select-image');
const textHashtag = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__item--invalid',
  successClass: 'img-upload__item--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

let errorMessage = '';
const error = () => errorMessage;

const validateHashtags = (text) => {
  text = text.toLowerCase().trim();
  if (!text) {
    return true;
  }

  const inputArray = text.split(/\s+/);

  if (inputArray.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item) => item.indexOf('#') >= 1),
      error: 'Хэштеги должны быть разделены пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэштег должнен начинаться с символа #',
    },
    {
      check: inputArray.some((item) => item === '#'),
      error: 'Хэштег не должнен состоять из одного символа #',
    },
    {
      check: inputArray.some((item) => inputArray.indexOf(item) !== inputArray.lastIndexOf(item)),
      error: 'Хэштеги не должны повторяться',
    },
    {
      check: inputArray.length > MAX_HASHTAGS_COUNT,
      error: `Хэштегов должно быть не больше ${MAX_HASHTAGS_COUNT}`,
    },
    {
      check: inputArray.some((item) => item.length > MAX_HASHTAG_LENGTH),
      error: `Длина хэштега не должна превышать ${MAX_HASHTAG_LENGTH} символов`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэштег содержит недопустимые символы',
    }
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const validateDescriptions = (description) => description.length <= MAX_DESCRIPTION_LENGTH;

const validateForm = (evt) => {
  if(!pristine.validate()) {
    evt.preventDefault();
  }
};

pristine.addValidator(
  textHashtag,
  validateHashtags,
  error,
  2,
  false
);

pristine.addValidator(
  textDescription,
  validateDescriptions,
  `Длина комментария не может составлять больше ${MAX_DESCRIPTION_LENGTH} символов`
);

export {validateForm};
