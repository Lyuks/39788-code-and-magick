'use strict';
document.querySelector('.setup').classList.remove('hidden');

//  определяем контейнер
var similarListElement = document.querySelector('.setup-similar-list');

//  определяем разметку для одного волшебника
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

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

var genWizards = function (wizardsAmount) {
  var wizzards = [];
  for (var i = 0; i <= wizardsAmount; i++) {
    wizzards.unshift(
        {
          name: getRandomElement(SIMILAR_NAMES) + ' ' + getRandomElement(SIMILAR_SURNAMES),
          coatColor: getRandomElement(SIMILAR_COAT_COLORS),
          eyesColor: getRandomElement(SIMILAR_EYES_COLORS)
        }
    );
  }
  return wizzards;
};

var wizards = genWizards(3);

// рисуем одного волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var renderWizards = function (container, wizardsAmount) {
  for (var i = 0; i < wizardsAmount.length; i++) {
    var wizardElem = renderWizard(wizardsAmount[i]);
    container.appendChild(wizardElem);
  }
};

renderWizards(similarListElement, wizards);

document.querySelector('.setup-similar').classList.remove('hidden');
