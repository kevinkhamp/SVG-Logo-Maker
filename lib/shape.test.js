const {Circle, Square, Triangle} = require('./shape.js')

describe('Circle', () => {
    it('Renders fine', () => {
        const shape = new Circle()
        let color = ('red')
        shape.setColor(color)

        expect(shape.render()).toEqual(`<circle cx="150" cy="150" r=50" fill=${color}/>`)
    })
})
describe('Square', () => {
    it('Renders fine', () => {
        const shape = new Square()
        let color = ('red')
        shape.setColor(color)

        expect(shape.render()).toEqual(`<rect width="50" height="50" fill=${color}/>`)
    })
})
describe('Triangle', () => {
    it('Renders fine', () => {
        const shape = new Triangle()
        let color = ('red')
        shape.setColor(color)

        expect(shape.render()).toEqual(`<polygon points ="180,0 270,180 90,180" fill=${color}/>`)
    })
})