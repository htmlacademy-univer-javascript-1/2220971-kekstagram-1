import {createObjects} from './data.js';
import {openPhoto} from './render-full-photo.js';

const photos = createObjects();
const picture = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const clonedPic = templatePicture.cloneNode(true);
  clonedPic.querySelector('.picture__img').src = photo.url;
  clonedPic.querySelector('.picture__likes').textContent = photo.likes;
  clonedPic.querySelector('.picture__comments').textContent = photo.comments.length;
  clonedPic.addEventListener('click', () => {
    openPhoto(photo);
  });
  fragment.appendChild(clonedPic);
});

picture.appendChild(fragment);
