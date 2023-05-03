class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color){
        this.color = (color)
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r=50" fill=${this.color}/>`
    }
}

class Square extends Shape {
    render() {
        return `<rect width="50" height="50" fill=${this.color}/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points ="180,0 270,180 90,180" fill=${this.color}/>`
    }
}

module.exports = {Circle, Square, Triangle}