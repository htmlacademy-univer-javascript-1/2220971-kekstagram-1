import {createObjects} from './data.js';

const photos = createObjects();
const picture = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const clonedPic = templatePicture.cloneNode(true);
  clonedPic.querySelector('.picture__img').src = url;
  clonedPic.querySelector('.picture__likes').textContent = likes;
  clonedPic.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(clonedPic);
});

picture.appendChild(fragment);
