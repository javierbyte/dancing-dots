(function () {
  class DancingDots {
    constructor (args = {}) {
      const {dotCount = 10, width = 100, height = 100, speed = 5, getOnlyInts = true} = args
      this.dotCount = dotCount
      this.width = width
      this.height = height
      this.speed = speed
      this.getOnlyInts = getOnlyInts

      this.coords = []

      for (let x = 0; x < this.dotCount; x++) {
        this.coords.push({
          x: Math.floor(Math.random() * this.width),
          y: Math.floor(Math.random() * this.height),
          angle: Math.floor(Math.random() * 2 * Math.PI),
          angleDelta: Math.random() * 0.2 - 0.1
        })
      }
    }

    getCoords () {
      return this.coords.map(el => ({
        x: this.getOnlyInts ? Math.round(el.x) : el.x,
        y: this.getOnlyInts ? Math.round(el.y) : el.y
      }))
    }

    update () {
      this.coords.forEach(el => {
        const newX = el.x + Math.sin(el.angle) * this.speed
        const newY = el.y + Math.cos(el.angle) * this.speed
        let newAngle

        if (newX < 0 || newX > this.width || newY < 0 || newY > this.height) {
          newAngle = (el.angle + Math.PI) % (Math.PI * 2)
        } else {
          newAngle = (el.angle + el.angleDelta) % (Math.PI * 2)
        }

        el.x = Math.max(0, Math.min(this.width, newX))
        el.y = Math.max(0, Math.min(this.height, newY))
        el.angle = newAngle
      })
    }

    getCoordsAndUpdate () {
      this.update()
      return this.getCoords()
    }
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = DancingDots
  } else window.DancingDots = DancingDots
})()

