'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var DancingDots = function () {
    function DancingDots() {
      var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, DancingDots);

      var _args$dotCount = args.dotCount;
      var dotCount = _args$dotCount === undefined ? 10 : _args$dotCount;
      var _args$width = args.width;
      var width = _args$width === undefined ? 100 : _args$width;
      var _args$height = args.height;
      var height = _args$height === undefined ? 100 : _args$height;
      var _args$speed = args.speed;
      var speed = _args$speed === undefined ? 5 : _args$speed;
      var _args$getOnlyInts = args.getOnlyInts;
      var getOnlyInts = _args$getOnlyInts === undefined ? true : _args$getOnlyInts;

      this.dotCount = dotCount;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.getOnlyInts = getOnlyInts;

      this.coords = [];

      for (var x = 0; x < this.dotCount; x++) {
        this.coords.push({
          x: Math.floor(Math.random() * this.width),
          y: Math.floor(Math.random() * this.height),
          angle: Math.floor(Math.random() * 2 * Math.PI),
          angleDelta: Math.random() * 0.2 - 0.1
        });
      }
    }

    _createClass(DancingDots, [{
      key: 'getCoords',
      value: function getCoords() {
        var _this = this;

        return this.coords.map(function (el) {
          return {
            x: _this.getOnlyInts ? Math.round(el.x) : el.x,
            y: _this.getOnlyInts ? Math.round(el.y) : el.y
          };
        });
      }
    }, {
      key: 'update',
      value: function update() {
        var _this2 = this;

        this.coords.forEach(function (el) {
          var newX = el.x + Math.sin(el.angle) * _this2.speed;
          var newY = el.y + Math.cos(el.angle) * _this2.speed;
          var newAngle = undefined;

          if (newX < 0 || newX > _this2.width || newY < 0 || newY > _this2.height) {
            newAngle = (el.angle + Math.PI) % (Math.PI * 2);
          } else {
            newAngle = (el.angle + el.angleDelta) % (Math.PI * 2);
          }

          el.x = Math.max(0, Math.min(_this2.width, newX));
          el.y = Math.max(0, Math.min(_this2.height, newY));
          el.angle = newAngle;
        });
      }
    }, {
      key: 'getCoordsAndUpdate',
      value: function getCoordsAndUpdate() {
        this.update();
        return this.getCoords();
      }
    }]);

    return DancingDots;
  }();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = DancingDots;
  } else window.DancingDots = DancingDots;
})();
