import { uuid } from '../index'
describe('uuid', () => {
    it('uuid length', () => {
        const str = uuid();
        expect(str.length).toBe(21);
        console.log(str)
    })
})