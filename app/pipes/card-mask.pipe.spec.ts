import { CardMaskPipe } from './card-mask.pipe';

describe('CardMaskPipe', () => {
let pipe: CardMaskPipe;

beforeEach(() => {
pipe = new CardMaskPipe();
});

it('create an instance', () => {
expect(pipe).toBeTruthy();
});

it('if no mask value provided then should mask by 5', () => {
expect(pipe.transform( '5555555555', undefined)).toBe('*****55555');
});

it('should not return anything if the value is undefined', () => {
expect(pipe.transform('', 5)).toBe('');
});

it('if mask is greater than length of number should return unmasked number', () => {
let val: string = '5555555555';
expect(pipe.transform(val, 17)).toBe(String(val));
});

it('mask value is 7 the last 7 number should be unmasked', () => {
expect(pipe.transform('5555555555', 7)).toBe('***5555555');
});

it('mask value is 1 the last 1 number should be unmasked', () => {
expect(pipe.transform('5555555555', 1)).toBe('*********5');
});

});