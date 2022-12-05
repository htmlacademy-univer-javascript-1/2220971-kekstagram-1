const closeButton = document.querySelector('.big-picture').querySelector('#picture-cancel');
const bigPicture = document.querySelector('.big-picture');

const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    document.body.classList.remove('modal-open');
    document.querySelector('.big-picture').add('hidden');
    document.removeEventListener('keydown', () => closeByEscape);
  }
};

const closePhoto = () => {
  document.body.classList.remove('modal-open');
  document.querySelector('.big-picture').classList.add('hidden');
  document.removeEventListener('click', () => closeByEscape);
};

function createNewComm (comment) {
  const cloneComment = bigPicture.querySelector('.social__comment').cloneNode(true);
  cloneComment.querySelector('.social__picture').src = comment.avatar;
  cloneComment.querySelector('.social__picture').alt = comment.name;
  cloneComment.querySelector('.social__text').textContent = comment.message;
  return cloneComment;
}

const createComment = (comments) => {
  const commentsList = bigPicture.querySelector('.social__comments');
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.appendChild(createNewComm(comment));
  });
  commentsList.innerHTML = '';
  commentsList.append(fragment);
};

const openPhoto = (photo) => {
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  createComment(photo.comments);
  closeButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', closeByEscape);
};

export {openPhoto};
