class Shape {
    constructor(color) {
        this.color = color
    }
    setColor(color){
        this.color = (color)
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r=80" fill=""${this.color}"/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="150" height="150" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points ="180,0 270,180 90,180" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle}