'use strict';
document.querySelector('.setup').classList.remove('hidden');

var SIMILAR_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SIMILAR_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвин'
];

var SIMILAR_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var SIMILAR_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomElement = function (a) {
  var b = Math.floor(Math.random() * a.length);
  return a[b];
};

// генерим массив волшебников
var genWizards = function (b) {
  b = 3;
  var c = [];
  for (var j = b; j >= 0; j--) {
    c.unshift(
        {
          name: getRandomElement(SIMILAR_NAMES) + ' ' + getRandomElement(SIMILAR_SURNAMES),
          coatColor: getRandomElement(SIMILAR_COAT_COLORS),
          eyesColor: getRandomElement(SIMILAR_EYES_COLORS)
        }
    );
  }
  return c;
};
//  определяем контейнер
var similarListElement = document.querySelector('.setup-similar-list');

//  определяем разметку для одного волшебника
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

//  рисуем одного волшебника
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = genWizards()[0].name;
  wizardElement.querySelector('.wizard-coat').style.fill = genWizards()[0].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = genWizards()[0].eyesColor;
  return wizardElement;
};

//  добавляем волшебников в фрагмент
var fragment = document.createDocumentFragment();
for (var i = 0; i < genWizards().length; i++) {
  fragment.appendChild(renderWizard(genWizards()[i]));
}

//  выводим волшебников из фрагмента в контейнер
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');


//  ТУТ ВСЕ МОИ ПОПОЛЗНОВЕНИЯ ВЫПОЛНИТЬ ТВОЕ ПОСЛЕДНЕЕ ЗАМЕЧАНИЕ ИЗ ПУЛЛ РЕКВЕСТА

//  консоль говорит, что genWizard() - это массив, а не функция, но ведь результат работы genWizard и есть массив?? :((

// var renderWizards = (function(similarListElement, genWizards){
//   for (i = genWizards().length; i >= 0; i++) {
//     var renderWizard = (function () {
//       var wizardElement = similarWizardTemplate.cloneNode(true);
//       wizardElement.querySelector('.setup-similar-label').textContent = genWizards()[0].name;
//       wizardElement.querySelector('.wizard-coat').style.fill = genWizards()[0].coatColor;
//       wizardElement.querySelector('.wizard-eyes').style.fill = genWizards()[0].eyesColor;
//       return wizardElement;
//     }());
//   }
//   similarListElement.appendChild(renderWizard());
// }());


