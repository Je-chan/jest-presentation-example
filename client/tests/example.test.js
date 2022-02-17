import { double } from './example';

describe('그룹 1', () => {
  beforeAll(() => {
    // console.log('before All');
  });
  afterAll(() => {
    // console.log('after All');
  });
  beforeEach(() => {
    // console.log('before Each');
  });
  afterEach(() => {
    // console.log('after Each');
  });
  test('첫 테스트', () => {
    // console.log('첫 테스트');
    expect(123).toBe(123);
  });

  test('double 테스트', () => {
    // console.log('두 번째 테스트');

    expect(double(123)).toBe(246);
    expect(double(10)).toBe(20);
  });

  test('인수가 없습니다', () => {
    // console.log('세 번째 테스트');

    expect(double()).toBe(0);
  });
});
