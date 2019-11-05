import chai from 'chai'
import Card from '../../Card'

chai.should()
describe('Test Validate Card =>', () => {
    it('Should valid a str', (done) => {
        if(Card.isString("Test") !== -1) {
            done()
        }
    })
    it('Should invalid a str', (done) => {
        if(Card.isString(1) == -1) {
            done()
        }
    })
    it('Should remove string spaces for credit card number', () => {
        const number = "5105 1051 0510 5106"
        chai.assert(Card.removeStringSpaces(number) ===  '5105105105105106', 'Spaces Not Removed')
    })

    it('Should reverse a string', () => {
        const number = '5105105105105106'
        chai.assert(Card.reverseStr(number) ===  '6015015015015015', 'string not reversed')
    })

    it('Should validate a credit number', () => {
        const number = '4111111111111111'
        chai.assert(Card.validate(number) ===  true, 'invalid')
    })

    it('Should not validate a credit number', () => {
        const number = '4111111111111'
        chai.assert(Card.validate(number) ===  false, 'valid')
    })
})