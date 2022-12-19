import {isEscape} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const commentsList = document.querySelector('.social__comments');
const commentsCountToShow = 5;
const loadButton = document.querySelector('.comments-loader');

const loadComments = () => {
  const commentsItems = commentsList.children;
  const loadedCommentsCountElement = document.querySelector('.loaded-comments');
  const loadedCommentsCount = parseInt(loadedCommentsCountElement.textContent, 10);
  const currentComments = parseInt(loadedCommentsCount, 10) + commentsCountToShow > commentsItems.length ? commentsItems.length - loadedCommentsCount : commentsCountToShow;

  for (let i = 0; i < currentComments; i++) {
    document.querySelector('.social__comment.hidden').classList.remove('hidden');
  }
  loadedCommentsCountElement.textContent = loadedCommentsCount + currentComments;

  if (loadedCommentsCount + currentComments === commentsItems.length) {
    loadButton.classList.add('hidden');
  }
};

const closePhoto = () => {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  bigPicture.querySelector('.big-picture__cancel').removeEventListener('click', closePhoto);
  document.removeEventListener('click', loadComments);
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
  createComment(photo.comments);
  const commentsItems = commentsList.children;
  bigPicture.querySelector('.loaded-comments').textContent = commentsItems.length > commentsCountToShow ? commentsCountToShow : commentsItems.length;
  for (let i = commentsCountToShow; i < commentsItems.length; i++) {
    commentsItems[i].classList.add('hidden');
  }
  closeButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', pressEscape);
  loadButton.addEventListener('click', loadComments);
  if (commentsItems.length <= 5) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }
};

export {openPhoto};
