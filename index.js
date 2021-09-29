class Circle {
  constructor(radius) {
    this.radius = parseInt(radius);
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }

  get circumference() {
      return 2 * Math.PI * this.radius;
  }

  set circumference(circum) {
      this.radius = circum / 2 / Math.PI;
  }

  get area() {
      return Math.PI * (this.radius ** 2);
  }

  set area(newArea) {
        this.radius = Math.sqrt(newArea/Math.PI);
  }
}
