import {uploadForm} from './formUpload.js';
import {setData} from './fetch.js';
import {onRecieveSuccess, showUnloadingErrorMessage} from './upload-data.js';

setData(onRecieveSuccess,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера :(');
  },
  'GET');

uploadForm();
