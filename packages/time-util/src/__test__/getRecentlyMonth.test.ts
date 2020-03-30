import { getRecentlyMonth } from '../utils';
describe('month', () => {
    it('current month', () => {
        const ls = getRecentlyMonth();
        const str = ls.map(el => el.toLocaleDateString()).join(',')
        expect(str).toBe('2020-3-1');
    })
    it('next month', () => {
        const ls = getRecentlyMonth(2);
        const str = ls.map(el => el.toLocaleDateString()).join(',')
        expect(str).toBe('2020-3-1,2020-4-1');
    })
    it('next month with no current', () => {
        const ls = getRecentlyMonth(2, false);
        const str = ls.map(el => el.toLocaleDateString()).join(',')
        expect(str).toBe('2020-4-1,2020-5-1');
    })
    it('previous month', () => {
        const ls = getRecentlyMonth(-4);
        const str = ls.map(el => el.toLocaleDateString()).join(',')
        expect(str).toBe('2020-3-1,2020-2-1,2020-1-1,2019-12-1');
    })
    it('previous month with no current', () => {
        const ls = getRecentlyMonth(-4, false);
        const str = ls.map(el => el.toLocaleDateString()).join(',')
        expect(str).toBe('2020-2-1,2020-1-1,2019-12-1,2019-11-1');
    })
})