import { double, greeting, errorMsg } from './example';

describe('===== double =====', () => {
  test('인자로 들어온 숫자에 2를 곱한 값이 나와야 합니다', () => {
    expect(double(123)).toBe(246);
    expect(double(10)).toBe(20);
  });

  test('인자 값이 없는 경우에 0을 반환해야 합니다.', () => {
    expect(double()).toBe(0);
  });
});

describe('===== greeting =====', () => {
  test('이름을 넣었을 때 인사를 해줍니다', () => {
    expect(greeting('liebe')).toBe('Hello liebe!');
  });

  test('인자로 넘어온 값이 string 이 아닌 경우 에러 메시지를 남깁니다.', () => {
    expect(greeting(123)).toBe(errorMsg);
    expect(greeting(['liebe'])).toBe(errorMsg);
    expect(greeting({ name: 'liebe' })).toBe(errorMsg);
    expect(greeting(null)).toBe(errorMsg);
    expect(greeting(undefined)).toBe(errorMsg);
  });
});
