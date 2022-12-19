import {isEscape} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const commentsList = document.querySelector('.social__comments');


const closePhoto = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  bigPicture.querySelector('.big-picture__cancel').removeEventListener('click', closePhoto);
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', pressEscape);
};

const pressEscape = (evt) => {
  if (isEscape(evt)) {
    evt.preventDefault();
    closePhoto();
  }
};

function createNewComm (comment) {
  const cloneComment = bigPicture.querySelector('.social__comment').cloneNode(true);
  cloneComment.querySelector('.social__picture').src = comment.avatar;
  cloneComment.querySelector('.social__picture').alt = comment.name;
  cloneComment.querySelector('.social__text').textContent = comment.message;
  return cloneComment;
}

const createComment = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.appendChild(createNewComm(comment));
  });
  commentsList.innerHTML = '';
  commentsList.append(fragment);
};

const openPhoto = (photo) => {
  document.querySelector('body').classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  createComment(photo.comments);
  closeButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', pressEscape);
};

export {openPhoto};
