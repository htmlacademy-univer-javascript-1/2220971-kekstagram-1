import {uploadForm} from './formUpload.js';
import {setData} from './fetch.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './dataUpload.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
