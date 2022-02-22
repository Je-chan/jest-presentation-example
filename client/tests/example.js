export function double(num) {
  if (!num) return 0;
  return num * 2;
}

export const errorMsg = '제대로 된 이름을 넘겨주세요!';

export function greeting(name) {
  if (typeof name !== 'string') return errorMsg;
  return `Hello ${name}!`;
}
