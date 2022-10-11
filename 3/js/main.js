const NAMES = ['Кира','Лавр','Милена','Наум','Аксинья','Добрыня','Сапфира','Святослав','Феодосия','Себастьян','Весна','Оливер','Ульяна','Марк','Доминика','Мирон','Амелия','Самуил','Ривер','Адонис','Андрианна','Анатолий','Инесса','Новомир','Эльвира'];

const DESCRIPTIONS = ['Даже если ты не совершенен, то ты эксклюзивная версия',
  'Если так подумать, любить себя гораздо сложнее, чем любить кого-то другого',
  'Говоришь, это любовь? Не смеши! Всего лишь подделка...',
  'Там, где есть надежда, непременно есть и отчаяние',
  'Я хочу, чтобы дождь шёл весь день',
  'Даже если я потерплю неудачу, я всё равно буду бежать к своей мечте',
  'Всё же реальный мир отличается от обещаний',
  'Вот бы кто-нибудь создал генератор описаний, чтобы мне не пришлось их выдумывать',
  'Хочу пиццу.',
  'Сегодня я опять пытаюсь сбежать от забот... К сожалению, неудачно',
  'Скидка на курс по осуществлению мечты только сегодня, пишите в личные сообщения',
  'Там, где есть надежда, всегда есть трудности',
  'Серьёзно, он так и будет днями спать? Мы не для того хомяка завели',
  'Мы пытаемся скрыть наши чувства, но забываем, что наши глаза нас выдают',
  'Будь уверен в своём лице с момента, как проснёшься',
  'Однажды я высплюсь',
  'Помните, что здесь, в этом маленьком городке, всегда есть человек, который поймёт вас',
  'Я люблю тебя больше, чем вчера, но меньше, чем буду любить тебя завтра',
  'Командная работа приводит к мечте',
  'Я создам из этого момента прекрасные краски и нарисую ещё мечту',
  'Может, просто вернёмся домой?',
  'Семья',
  'Сижу без ключей под дверью квартиры и жду, пока вернется Игорь. Чем дальше, тем веселее. И что ещё готовит мне жизнь?',
  'Я так больше не могу',
  'Удаляю профиль, прощайте'];

const MESSAGES = ['Пожалуйста, не прекращай делать это',
  'Скукота',
  'Когда встретимся-то? Третью неделю только обещаешь',
  'А пооригинальнее никак?',
  'Прикольно, конечно, но пост уже был. Вчера.',
  'Мой тапок умнее',
  'Мой кот одобряет',
  'Собственно, что и требовалось доказать',
  'Довольно умно, стоит сказать',
  'Лайкни, если любишь подписчиков',
  'А ты сегодня отжигаешь по полной',
  'Только я считаю, что это бред?',
  'И что людям не нравится? Шикарно всё',
  'Мечтаю об этом',
  'Люди-то правы',
  'Сколько поводов для гордости',
  'Сложно это всё, однако',
  'Прекрасно! Именно это мне было нужно',
  'Вам очень идёт этот наряд',
  'Как там ваша кошка? Вылечили?',
  'О, у вас новая причёска? Заметно изменились',
  'Полный восторг',
  'Есть захотелось',
  'Интересная обстановка',
  'Слушайте, а вы, может, начнёте писать что-нибудь другое?'];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function generateComments() {
  const COMMENTS = [];
  const COUNT = getRandomPositiveInteger(0, 5);
  for (let i = 0; i < COUNT; i++) {
    COMMENTS.push(createComments());
  }
  return COMMENTS;
}

function createComments() {
  return {
    id: getIdForComments(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getValue(MESSAGES),
    name: getValue(NAMES),
  };
}

let counterIdComm = 0;
function getIdForComments() {
  counterIdComm++;
  return counterIdComm;
}

let counterIdObj = 0;
function getIdForObj() {
  counterIdObj++;
  return counterIdObj;
}

let counterUrl = 0;
function getUrl() {
  counterUrl++;
  return counterUrl;
}

function getValue(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('str', 3);

const OBJECTS = [];
for (let i = 0; i < 25; i++) {
  OBJECTS.push(generateObj());
}

function generateObj() {
  return {
    id: getIdForObj(),
    url: `photos/${getUrl()}.jpg`,
    description: getValue(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: generateComments(),
  };
}
