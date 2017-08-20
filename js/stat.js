'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 65);
  var histogramHeight = 150;
  var histogramWidth = 40;
  var indent = 50;
  var max = -1;
  var initialX = 120;
  var initialY = 230;
  for (var i = 0; i < names.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = histogramHeight / (max - 0);
  for (var g = 0; g < times.length; g++) {
    if (names[g] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(2, 14, 134, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + indent * g + histogramWidth * g, initialY, histogramWidth, -(times[g] * step));
    ctx.fillStyle = '#000';
    ctx.fillText(names[g], initialX + indent * g + histogramWidth * g, initialY + histogramWidth);
  }
};


