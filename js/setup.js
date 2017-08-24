'use strict';
document.querySelector('.setup').classList.remove('hidden');

var similarNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var similarSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвин'];
var similarCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var similarEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var createRandomName = function () {
  var randomName = Math.floor(Math.random() * similarNames.length);
  var randomSurname = Math.floor(Math.random() * similarSurnames.length);
  return similarNames[randomName] + ' ' + similarSurnames[randomSurname];
};
var createRandomCoatColor = function () {
  var randomColorCoat = Math.floor(Math.random() * similarCoatColors.length);
  return similarCoatColors[randomColorCoat];
};
var createRandomEyesColor = function () {
  var randomColorEye = Math.floor(Math.random() * similarEyesColors.length);
  return similarEyesColors[randomColorEye];
};

var similarCharacters = [
  {
    name: createRandomName(),
    coatColor: createRandomCoatColor(),
    eyesColor: createRandomEyesColor()
  },
  {
    name: createRandomName(),
    coatColor: createRandomCoatColor(),
    eyesColor: createRandomEyesColor()
  },
  {
    name: createRandomName(),
    coatColor: createRandomCoatColor(),
    eyesColor: createRandomEyesColor()
  },
  {
    name: createRandomName(),
    coatColor: createRandomCoatColor(),
    eyesColor: createRandomEyesColor()
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = similarCharacters[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = similarCharacters[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = similarCharacters[i].eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < similarCharacters.length; i++) {
  fragment.appendChild(renderWizard(similarCharacters[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
